import { ImageEntity } from './entities/image.entity';
import { Repository } from 'typeorm';
import { ConfigType } from '@nestjs/config';
import { MaterialEntity } from '../material/entities/material.entity';
import { Multer } from 'multer';
import { fileConfig } from 'src/config/config-functions/file.config';
export declare class ImageService {
    private imageRepository;
    private fileCfg;
    private baseMaterialsPath;
    constructor(imageRepository: Repository<ImageEntity>, fileCfg: ConfigType<typeof fileConfig>);
    private uploadToDisk;
    createMany(files: Multer.File[], material: MaterialEntity): Promise<ImageEntity[]>;
    findOne(id: number): Promise<ImageEntity>;
    removeMaterialImagesFolder(material: MaterialEntity): Promise<ImageEntity[]>;
}
