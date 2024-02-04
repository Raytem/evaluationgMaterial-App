/// <reference types="node" />
import { CreateDesktopDto } from './dto/create-desktop.dto';
import { UpdateDesktopDto } from './dto/update-desktop.dto';
import { ConfigType } from '@nestjs/config';
import { fileConfig } from 'src/config/config-functions/file.config';
export declare class DesktopService {
    private fileCfg;
    constructor(fileCfg: ConfigType<typeof fileConfig>);
    getLatestVersion(): Promise<string>;
    create(createDesktopDto: CreateDesktopDto): Promise<string>;
    getInstaller(): Promise<Buffer>;
    findOne(id: number): Promise<string>;
    update(id: number, updateDesktopDto: UpdateDesktopDto): Promise<string>;
    remove(id: number): Promise<string>;
}
