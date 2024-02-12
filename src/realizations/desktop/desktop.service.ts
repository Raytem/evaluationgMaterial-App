import { Inject, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import fspr from 'fs/promises';
import path from 'path';
import { ConfigType } from '@nestjs/config';
import { fileConfig } from 'src/config/config-functions/file.config';
import { DesktopEntity } from './entities/desktop.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { FileNameAndBuffer } from './types/file-name-and-buffer';
import { DesktopPlatform } from 'src/enums/desktop-platform.enum';
import { setupExtensionConfig } from 'src/config/config-functions/setupExtension.config';
import { Multer } from 'multer';
import { promise as glob_pr } from 'glob-promise';
import { NoSuchException } from 'src/exceptions/no-such.exception';
import sharp from 'sharp';

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
      throw new NoSuchException('desktop version uploaded');
    }

    return latestDesktopEntity[0];
  }

  async create(platform: DesktopPlatform, version: string, setupFile: Multer.file): Promise<DesktopEntity> {
    let desktopEntity: DesktopEntity;

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    const manager = queryRunner.manager;

    try {
      desktopEntity = await this.getLatestVersion();

      try {
        const filePaths = await glob_pr(this.getDesktopSetupFilePathWithPattern('*', platform));
        for (const filePath of filePaths) {
          await fspr.unlink(filePath);
        }
      } catch (e) {
        console.log(e);
        throw new InternalServerErrorException(
          `cannot remove old versions of desktop setup (${platform}), errors: [${e}]`,
        );
      }

      desktopEntity = await manager.withRepository(this.desktopRepository).save({
        ...desktopEntity,
        version,
      });
    } catch (e) {
      desktopEntity = await manager.withRepository(this.desktopRepository).save({ version });
    }

    try {
      await fspr.writeFile(this.getDesktopSetupFilePath(desktopEntity.version, platform), setupFile.buffer);
    } catch (e) {
      await queryRunner.rollbackTransaction();
      console.log(e);
      throw new InternalServerErrorException(
        `cannot upload new version of desktop setup (${platform}), errors: [${e}]`,
      );
    }

    await queryRunner.commitTransaction();
    await queryRunner.release();

    return desktopEntity;
  }

  async getInstaller(platform: DesktopPlatform): Promise<FileNameAndBuffer> {
    await this.getLatestVersion();

    const filePaths = await glob_pr(this.getDesktopSetupFilePathWithPattern('*', platform));

    if (!filePaths.length) {
      throw new NoSuchException(`desktop setup (${platform})`);
    }

    let fileBuffer: Buffer;
    try {
      fileBuffer = await fspr.readFile(filePaths[0]);
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException('Error when reading the file');
    }

    return {
      fileName: path.basename(filePaths[0]),
      buffer: fileBuffer,
    };
  }

  private getDesktopSetupFileName(version: string, platform: DesktopPlatform) {
    switch (platform) {
      case DesktopPlatform.MAC:
        return `${this.fileCfg.desktopSetupName}-${version}.${this.setupExtensionCfg.mac}`;
      case DesktopPlatform.WIN:
        return `${this.fileCfg.desktopSetupName}-${version}.${this.setupExtensionCfg.win}`;
      case DesktopPlatform.LINUX:
        return `${this.fileCfg.desktopSetupName}-${version}.${this.setupExtensionCfg.linux}`;
    }
  }

  private getDesktopSetupFilePath(version: string, platform: DesktopPlatform): string {
    return path.join(process.cwd(), this.fileCfg.desktopSetupDirPath, this.getDesktopSetupFileName(version, platform));
  }

  private getDesktopSetupFilePathWithPattern(pattern: string, platform: DesktopPlatform): string {
    switch (platform) {
      case DesktopPlatform.MAC:
        return path.join(process.cwd(), this.fileCfg.desktopSetupDirPath, `${pattern}.${this.setupExtensionCfg.mac}`);
      case DesktopPlatform.WIN:
        return path.join(process.cwd(), this.fileCfg.desktopSetupDirPath, `${pattern}.${this.setupExtensionCfg.win}`);
      case DesktopPlatform.LINUX:
        return path.join(process.cwd(), this.fileCfg.desktopSetupDirPath, `${pattern}.${this.setupExtensionCfg.linux}`);
    }
  }
}
