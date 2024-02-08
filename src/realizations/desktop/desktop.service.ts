import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import fspr from 'fs/promises';
import path from 'path';
import { ConfigType } from '@nestjs/config';
import { fileConfig } from 'src/config/config-functions/file.config';
import { DesktopEntity } from './entities/desktop.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { NewDesktopVersionFilesDto } from './dto/new-desktop-version-files.dto';
import { FileNameAndBuffer } from './types/file-name-and-buffer';
import { DesktopPlatform } from 'src/enums/desktop-platform.enum';
import { setupExtensionConfig } from 'src/config/config-functions/setupExtension.config';

@Injectable()
export class DesktopService {
  constructor(
    @InjectRepository(DesktopEntity)
    private desktopRepository: Repository<DesktopEntity>,

    @Inject(fileConfig.KEY)
    private fileCfg: ConfigType<typeof fileConfig>,

    @Inject(setupExtensionConfig.KEY)
    private setupExtensionCfg: ConfigType<typeof setupExtensionConfig>,

    private dataSource: DataSource,
  ) {}

  async getLatestVersion(): Promise<DesktopEntity> {
    const latestDesktopEntity = await this.desktopRepository.find({
      order: {
        id: 'DESC',
      },
      take: 1,
    });

    if (!latestDesktopEntity.length) {
      throw new NotFoundException('No desktop version uploaded');
    }

    return latestDesktopEntity[0];
  }
  async create(
    version: string,
    files: NewDesktopVersionFilesDto,
  ): Promise<DesktopEntity> {
    let desktopEntity: DesktopEntity;

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    const manager = queryRunner.manager;

    try {
      desktopEntity = await this.getLatestVersion();

      try {
        await fspr.unlink(
          this.getDesktopSetupFilePath(
            desktopEntity.version,
            DesktopPlatform.MAC,
          ),
        );
        await fspr.unlink(
          this.getDesktopSetupFilePath(
            desktopEntity.version,
            DesktopPlatform.WIN,
          ),
        );
        // await fspr.unlink(this.getDesktopUpdateFilePath(desktopEntity.version));
      } catch (e) {
        console.log(e);
        throw new InternalServerErrorException(
          'cannot find old version of desktop setup',
        );
      }

      desktopEntity = await manager
        .withRepository(this.desktopRepository)
        .save({
          ...desktopEntity,
          version,
        });
    } catch (e) {
      desktopEntity = await manager
        .withRepository(this.desktopRepository)
        .save({ version });
    }

    try {
      await fspr.writeFile(
        this.getDesktopSetupFilePath(
          desktopEntity.version,
          DesktopPlatform.MAC,
        ),
        files.macSetup[0].buffer,
      );
      await fspr.writeFile(
        this.getDesktopSetupFilePath(
          desktopEntity.version,
          DesktopPlatform.WIN,
        ),
        files.winSetup[0].buffer,
      );
      // await fspr.writeFile(
      //   this.getDesktopUpdateFilePath(desktopEntity.version),
      //   files.update[0].buffer,
      // );
    } catch (e) {
      await queryRunner.rollbackTransaction();

      console.log(e);
      throw new InternalServerErrorException(
        'cannot upload new version of desktop app',
      );
    }

    await queryRunner.commitTransaction();
    await queryRunner.release();

    return desktopEntity;
  }

  async getUpdate(): Promise<FileNameAndBuffer> {
    const desktopEntity = await this.getLatestVersion();

    try {
      const fileBuffer = await fspr.readFile(
        this.getDesktopUpdateFilePath(desktopEntity.version),
      );
      return {
        fileName: this.getDesktopUpdateFileName(desktopEntity.version),
        buffer: fileBuffer,
      };
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException('No such desktop update');
    }
  }

  async getInstaller(platform: DesktopPlatform): Promise<FileNameAndBuffer> {
    const desktopEntity = await this.getLatestVersion();

    try {
      const fileBuffer = await fspr.readFile(
        this.getDesktopSetupFilePath(desktopEntity.version, platform),
      );
      return {
        fileName: this.getDesktopSetupFileName(desktopEntity.version, platform),
        buffer: fileBuffer,
      };
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException('No such desktop setup');
    }
  }

  private getDesktopSetupFileName(version: string, platform: DesktopPlatform) {
    switch (platform) {
      case DesktopPlatform.MAC:
        return `${this.fileCfg.desktopSetupName}-${version}.${this.setupExtensionCfg.mac}`;
      case DesktopPlatform.WIN:
        return `${this.fileCfg.desktopSetupName}-${version}.${this.setupExtensionCfg.win}`;
    }
  }

  private getDesktopUpdateFileName(version: string) {
    return `${this.fileCfg.desktopUpdateName}-${version}.dmg`;
  }

  private getDesktopSetupFilePath(
    version: string,
    platform: DesktopPlatform,
  ): string {
    return path.join(
      this.fileCfg.desktopSetupDirPath,
      this.getDesktopSetupFileName(version, platform),
    );
  }

  private getDesktopUpdateFilePath(version: string): string {
    return path.join(
      this.fileCfg.desktopUpdateDirPath,
      this.getDesktopUpdateFileName(version),
    );
  }
}
