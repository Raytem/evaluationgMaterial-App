import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MaterialEntity } from './entities/material.entity';
import { ConditionService } from '../condition/condition.service';
import { GlueTypeService } from '../glue-type/glue-type.service';
import { MembraneLayerPolymerTypeService } from '../membrane-layer-polymer-type/membrane-layer-polymer-type.service';
import { ProductionMethodService } from '../production-method/production-method.service';
import { WaterproofFunctionService } from '../waterproof-function/waterproof-function.service';
import { HomeostasisFunctionService } from '../homeostasis-function/homeostasis-function.service';
import { ReliabilityFunctionService } from '../reliability-function/reliability-function.service';
import { EstimationService } from '../estimation/estimation.service';
import { ImageService } from '../image/image.service';
import { LayerService } from '../layer/layer.service';
import { ExelService } from 'src/services/exel/exel.service';
import { PaginationDto } from 'src/services/pagination/dto/pagination.dto';
import { Repository } from 'typeorm';
import { PaginationService } from 'src/services/pagination/pagination.service';
import { NoSuchException } from 'src/exceptions/no-such.exception';
import { LayerTypeService } from '../layer-type/layer-type.service';
import { CreateMaterialDto } from 'src/realizations/material/dto/create-material.dto';
import { UserEntity } from '../user/entities/user.entity';
import { Multer } from 'multer';

@Injectable()
export class MaterialService {
  constructor(
    @InjectRepository(MaterialEntity)
    private materialRepository: Repository<MaterialEntity>,

    private glueTypeService: GlueTypeService,

    private layerTypeService: LayerTypeService,

    private membraneLayerPolymerTypeService: MembraneLayerPolymerTypeService,

    private productionMethodService: ProductionMethodService,

    private conditionService: ConditionService,

    private waterproofFunctionService: WaterproofFunctionService,

    private homeostasisFunctionService: HomeostasisFunctionService,

    private reliabilityFunctionService: ReliabilityFunctionService,

    private estimationService: EstimationService,

    private imageService: ImageService,

    private layerService: LayerService,

    private exelService: ExelService,

    private paginationService: PaginationService,
  ) {}

  async create(
    createMaterialDto: CreateMaterialDto,
    files: Multer.File[],
    reqUser: UserEntity,
  ): Promise<MaterialEntity> {
    try {
      const glueType = await this.glueTypeService.findOne(
        createMaterialDto.material.glueType_id,
      );

      const layerTypeIds = createMaterialDto.material.layers.map(
        (layer) => layer.layerType_id,
      );
      const layerTypes = await this.layerTypeService.findByIds(layerTypeIds);
      if (layerTypeIds.length !== layerTypes.length) {
        throw new NoSuchException('layer type');
      }
      let createLayersList = createMaterialDto.material.layers.map(
        (layer, idx) => {
          return {
            ...layer,
            layerType: layerTypes[idx],
          };
        },
      );

      const membraneLayerPolymerType =
        await this.membraneLayerPolymerTypeService.findOne(
          createMaterialDto.material.membraneLayerPolymerType_id,
        );

      const productionMethod = await this.productionMethodService.findOne(
        createMaterialDto.material.productionMethod_id,
      );

      const condition = await this.conditionService.create(
        createMaterialDto.condition,
      );

      //material creation
      const material = await this.materialRepository.save({
        ...createMaterialDto.material,
        condition,
        user: reqUser,
        productionMethod,
        membraneLayerPolymerType,
        glueType,
      });

      createLayersList = createLayersList.map((item) => ({
        ...item,
        material,
      }));

      const layers = await this.layerService.createMany(createLayersList);

      const images = await this.imageService.createMany(files, material);

      //CALCULATING....

      // const waterproofFunction = await this.waterproofFunctionService.create(
      //   createMaterialDto.waterproofFunction,
      // );

      // const homeostasisFunction = await this.homeostasisFunctionService.create(
      //   createMaterialDto.homeostasisFunction,
      // );

      // const reliabilityFunction = await this.reliabilityFunctionService.create(
      //   createMaterialDto.reliabilityFunction,
      // );

      // const estimation = await this.estimationService.create();

      return await this.findOne(material.id);
    } catch (e) {
      throw e;
    }
  }

  async findAll(paginationDto: PaginationDto): Promise<MaterialEntity[]> {
    const pagination = this.paginationService.paginate(paginationDto);

    return await this.materialRepository.find(pagination);
  }

  async findOne(id: number): Promise<MaterialEntity> {
    const material = await this.materialRepository.findOneBy({ id });

    if (!material) {
      throw new NoSuchException('material');
    }

    return material;
  }

  async remove(id: number): Promise<MaterialEntity> {
    const material = await this.findOne(id);

    try {
      await this.imageService.removeMaterialImagesFolder(material);
    } catch (e) {
      throw e;
    }
    await this.materialRepository.remove(material);

    return material;
  }
}
