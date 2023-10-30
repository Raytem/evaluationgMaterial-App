import { StreamableFile } from '@nestjs/common';
import { MaterialService } from './material.service';
import { CreateMaterialDto } from './dto/create-material.dto';
import { MaterialEntity } from './entities/material.entity';
import { Multer } from 'multer';
import { ConfigType } from '@nestjs/config';
import { fileConfig } from 'src/config/config-functions/file.config';
import { UserEntity } from '../user/entities/user.entity';
import { MaterialFilterDto } from './dto/material-filter.dto';
import { Response } from 'express';
export declare class MaterialController {
    private readonly materialService;
    private fileCfg;
    constructor(materialService: MaterialService, fileCfg: ConfigType<typeof fileConfig>);
    getReportFromTemplate(material_id: number, res: Response): Promise<StreamableFile>;
    create(images: Multer.File[], createMaterialDto: CreateMaterialDto, reqUser: UserEntity): Promise<MaterialEntity>;
    findAll(materialFilterDto: MaterialFilterDto, res: Response): Promise<MaterialEntity[]>;
    findOne(id: number): Promise<MaterialEntity>;
    remove(id: number, reqUser: UserEntity): Promise<MaterialEntity>;
}
