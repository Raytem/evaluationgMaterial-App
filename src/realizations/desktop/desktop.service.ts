import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateDesktopDto } from './dto/create-desktop.dto';
import { UpdateDesktopDto } from './dto/update-desktop.dto';
import fspr from 'fs/promises';
import path from 'path';
import { ConfigType } from '@nestjs/config';
import { fileConfig } from 'src/config/config-functions/file.config';

@Injectable()
export class DesktopService {
  constructor(
    @Inject(fileConfig.KEY)
    private fileCfg: ConfigType<typeof fileConfig>,
  ) {}

  async getLatestVersion() {
    return '1.1';
  }
  async create(createDesktopDto: CreateDesktopDto) {
    return 'This action adds a new desktop';
  }

  async getInstaller(): Promise<Buffer> {
    const desktopAppPath = path.join(
      process.cwd(),
      this.fileCfg.staticDirName,
      this.fileCfg.desktopAppDirName,
      'file.txt',
    );

    try {
      await fspr.access(desktopAppPath);
    } catch (e) {
      throw new InternalServerErrorException('No such desktop app installer');
    }

    const fileBuffer = await fspr.readFile(desktopAppPath);

    return fileBuffer;
  }

  async findOne(id: number) {
    return `This action returns a #${id} desktop`;
  }

  async update(id: number, updateDesktopDto: UpdateDesktopDto) {
    return `This action updates a #${id} desktop`;
  }

  async remove(id: number) {
    return `This action removes a #${id} desktop`;
  }
}
