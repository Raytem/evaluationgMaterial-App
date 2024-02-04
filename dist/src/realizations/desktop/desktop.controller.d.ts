import { StreamableFile } from '@nestjs/common';
import { DesktopService } from './desktop.service';
import { CreateDesktopDto } from './dto/create-desktop.dto';
import { Response } from 'express';
export declare class DesktopController {
    private readonly desktopService;
    constructor(desktopService: DesktopService);
    create(createDesktopDto: CreateDesktopDto): Promise<string>;
    getLatestVersion(): Promise<string>;
    getInstaller(res: Response): Promise<StreamableFile>;
}
