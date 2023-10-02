import { Inject, Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ImageEntity } from './entities/image.entity';
import { Repository } from 'typeorm';
import { NoSuchException } from 'src/exceptions/no-such.exception';
import { ConfigType } from '@nestjs/config';
import { MaterialEntity } from '../material/entities/material.entity';
import { Multer } from 'multer';
import fspr from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { v4 as uuidv4 } from 'uuid';
import { fileConfig } from 'src/config/config-functions/file.config';

@Injectable()
export class ImageService {
  private baseMaterialsPath;

  constructor(
    @InjectRepository(ImageEntity)
    private imageRepository: Repository<ImageEntity>,

    @Inject(fileConfig.KEY)
    private fileCfg: ConfigType<typeof fileConfig>,
  ) {
    this.baseMaterialsPath = path.join(
      process.cwd(),
      this.fileCfg.staticDirName,
      this.fileCfg.materialImagesDirName,
    );
  }

  private async uploadToDisk(
    files: Multer.File[],
    material: MaterialEntity,
  ): Promise<string[]> {
    const curMaterialFolderPath = path.join(
      this.baseMaterialsPath,
      material.id.toString(),
    );

    try {
      await fspr.access(curMaterialFolderPath);
    } catch {
      await fspr.mkdir(curMaterialFolderPath);
    }

    const fileNames = [];

    files.forEach(async (file) => {
      const fileName = `${uuidv4()}.jpeg`;
      const filePath = path.join(curMaterialFolderPath, fileName);
      fileNames.push(fileName);

      await sharp(file.buffer)
        .resize({
          width: this.fileCfg.resizeSize,
          height: this.fileCfg.resizeSize,
          fit: 'contain',
          position: 'centre',
        })
        .jpeg({
          quality: 70,
        })
        .toFile(filePath);
    });

    return fileNames;
  }

  async createMany(
    files: Multer.File[],
    material: MaterialEntity,
  ): Promise<ImageEntity[]> {
    if (!files.length) return;

    const fileNames = await this.uploadToDisk(files, material);

    const createImagesList = fileNames.map((fileName) => ({
      name: fileName,
      folderName: material.id.toString(),
      material,
    }));

    const images = await this.imageRepository.save(createImagesList);

    return images;
  }

  async findOne(id: number): Promise<ImageEntity> {
    const material = await this.imageRepository.findOneBy({ id });

    if (!material) {
      throw new NoSuchException('material');
    }

    return material;
  }

  async removeMaterialImagesFolder(
    material: MaterialEntity,
  ): Promise<ImageEntity[]> {
    const materialImages = material.images;

    if (!materialImages.length) return;

    const curMaterialFolderPath = path.join(
      this.baseMaterialsPath,
      material.id.toString(),
    );

    try {
      await fspr.rm(curMaterialFolderPath, {
        recursive: true,
      });
      await this.imageRepository.remove(materialImages);

      return materialImages;
    } catch (e) {
      throw e;
    }
  }
}
