import { MaterialService } from './material.service';
import { CreateMaterialDto } from './dto/create-material.dto';
import { PaginationDto } from 'src/services/pagination/dto/pagination.dto';
import { MaterialEntity } from './entities/material.entity';
import { Multer } from 'multer';
import { ConfigType } from '@nestjs/config';
import { fileConfig } from 'src/config/config-functions/file.config';
import { UserEntity } from '../user/entities/user.entity';
export declare class MaterialController {
    private readonly materialService;
    private fileCfg;
    constructor(materialService: MaterialService, fileCfg: ConfigType<typeof fileConfig>);
    create(images: Multer.File[], createMaterialDto: CreateMaterialDto, reqUser: UserEntity): Promise<MaterialEntity>;
    findAll(paginationDto: PaginationDto, materialFilter: MaterialEntity): Promise<MaterialEntity[]>;
    findOne(id: number): Promise<MaterialEntity>;
    remove(id: number): Promise<MaterialEntity>;
}
