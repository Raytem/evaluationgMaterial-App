import { ForbiddenException, Injectable } from '@nestjs/common';
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
import { Repository } from 'typeorm';
import { PaginationService } from 'src/services/pagination/pagination.service';
import { NoSuchException } from 'src/exceptions/no-such.exception';
import { LayerTypeService } from '../layer-type/layer-type.service';
import { CreateMaterialDto } from 'src/realizations/material/dto/create-material.dto';
import { UserEntity } from '../user/entities/user.entity';
import { Multer } from 'multer';
import { MaterialFilterDto } from './dto/material-filter.dto';
import { LayerEntity } from '../layer/entities/layer.entity';
import { CalculationService } from 'src/services/calculation/calculation.service';

@Injectable()
export class MaterialService {
  constructor(
    @InjectRepository(MaterialEntity)
    private materialRepository: Repository<MaterialEntity>,

    private calculationService: CalculationService,

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
    // if (true) {
    //   const calculatedFunctionalIndicators = this.calculationService.calcAll(
    //     createMaterialDto,
    //     {} as MaterialEntity,
    //   );
    //   console.log(calculatedFunctionalIndicators);
    //   return;
    // }

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

      const calculatedFunctionalIndicators = this.calculationService.calcAll(
        createMaterialDto,
        material,
      );

      const waterproofFunction = await this.waterproofFunctionService.create(
        calculatedFunctionalIndicators.waterproofFunction,
      );

      const homeostasisFunction = await this.homeostasisFunctionService.create(
        calculatedFunctionalIndicators.homeostasisFunction,
      );

      //FIX

      // const reliabilityFunction = await this.reliabilityFunctionService.create(
      //   calculatedFunctionalIndicators.reliabilityFunction,
      // );

      // const estimation = await this.estimationService.create(
      //   calculatedFunctionalIndicators.estimation,
      // );

      return await this.findOne(material.id);
    } catch (e) {
      throw e;
    }
  }

  async findAll(
    materialFilterDto: MaterialFilterDto,
  ): Promise<MaterialEntity[]> {
    const pagination = this.paginationService.paginate(materialFilterDto);

    const queryBuilder = this.materialRepository
      .createQueryBuilder('material')
      .leftJoinAndSelect('material.condition', 'condition')
      .leftJoinAndSelect('material.user', 'user')
      .leftJoinAndSelect('condition.abrasionType', 'abrasionType')
      .leftJoinAndSelect('condition.washing', 'washing')
      .leftJoinAndSelect('washing.washingType', 'washingType')
      .leftJoinAndSelect('condition.bendingType', 'bendingType')
      .leftJoinAndSelect(
        'condition.physicalActivityType',
        'physicalActivityType',
      )
      .leftJoinAndSelect('material.waterproofFunction', 'waterproofFunction')
      .leftJoinAndSelect('material.homeostasisFunction', 'homeostasisFunction')
      .leftJoinAndSelect('material.reliabilityFunction', 'reliabilityFunction')
      .leftJoinAndSelect('material.estimation', 'estimation')
      .leftJoinAndSelect('material.layers', 'layer')
      .leftJoinAndSelect('layer.layerType', 'layerType')
      .leftJoinAndSelect('material.images', 'image')
      .leftJoinAndSelect('material.productionMethod', 'productionMethod')
      .leftJoinAndSelect(
        'material.membraneLayerPolymerType',
        'membraneLayerPolymerType',
      )
      .leftJoinAndSelect('material.glueType', 'glueType');

    if (pagination.take) {
      queryBuilder.take(pagination.take);
    }
    if (pagination.skip) {
      queryBuilder.skip(pagination.skip);
    }

    if (materialFilterDto.name) {
      queryBuilder.andWhere(
        `material.name ILIKE '%${materialFilterDto.name}%'`,
      );
    }

    if (materialFilterDto.depth) {
      queryBuilder.andWhere('material.depth = :depth', {
        depth: materialFilterDto.depth,
      });
    }

    if (materialFilterDto.materialBlottingPressure_calculated) {
      queryBuilder.andWhere(
        'waterproofFunction.materialBlottingPressure_calculated >= :materialBlottingPressure_calculated',
        {
          materialBlottingPressure_calculated:
            materialFilterDto.materialBlottingPressure_calculated,
        },
      );
    }

    if (materialFilterDto.totalThermalResistance_calculated) {
      queryBuilder.andWhere(
        'homeostasisFunction.totalThermalResistance_calculated >= :totalThermalResistance_calculated',
        {
          totalThermalResistance_calculated:
            materialFilterDto.totalThermalResistance_calculated,
        },
      );
    }

    if (materialFilterDto.totalThermalResistance_calculated) {
      queryBuilder.andWhere(
        'reliabilityFunction.materialBlottingPressure_relativeValuation >= :materialBlottingPressure_relativeValuation',
        {
          materialBlottingPressure_relativeValuation:
            materialFilterDto.materialBlottingPressure_relativeValuation,
        },
      );
    }

    if (materialFilterDto.depth) {
      queryBuilder.andWhere('material.depth >= :depth', {
        depth: materialFilterDto.depth,
      });
    }

    if (materialFilterDto.membraneLayerPolymerType_id) {
      queryBuilder.andWhere(
        'membraneLayerPolymerType.id = :membraneLayerPolymerType_id',
        {
          membraneLayerPolymerType_id:
            materialFilterDto.membraneLayerPolymerType_id,
        },
      );
    }

    if (materialFilterDto.productionMethod_id) {
      queryBuilder.andWhere('productionMethod.id = :productionMethod_id', {
        productionMethod_id: materialFilterDto.productionMethod_id,
      });
    }

    if (materialFilterDto.layersCnt) {
      queryBuilder.andWhere((qb) => {
        const subQuery = qb
          .subQuery()
          .select('COUNT(layer.id)')
          .from(LayerEntity, 'layer')
          .where('layer.material_id = material.id')
          .getQuery();

        return `${subQuery} = ${materialFilterDto.layersCnt}`;
      });
    }

    const filteredMaterials = await queryBuilder.getMany();

    return filteredMaterials.map((m) => {
      return new MaterialEntity({
        ...m,
        waterproofFunction: undefined,
        homeostasisFunction: undefined,
        reliabilityFunction: undefined,
        estimation: undefined,
      });
    });
  }

  async findOne(
    id: number,
    withFunctionalIndicators = false,
  ): Promise<MaterialEntity> {
    const material = await this.materialRepository.findOne({
      where: { id },
      relations: {
        waterproofFunction: withFunctionalIndicators,
        homeostasisFunction: withFunctionalIndicators,
        reliabilityFunction: withFunctionalIndicators,
        estimation: withFunctionalIndicators,
      },
    });

    if (!material) {
      throw new NoSuchException('material');
    }

    return material;
  }

  async remove(id: number, reqUser: UserEntity): Promise<MaterialEntity> {
    const material = await this.findOne(id);

    if (material.user.id !== reqUser.id) {
      throw new ForbiddenException(
        'You can delete only the materials you have created',
      );
    }

    try {
      await this.imageService.removeMaterialImagesFolder(material);
    } catch (e) {
      throw e;
    }
    await this.materialRepository.remove(material);

    return material;
  }

  async getReportFromTemplate(material: MaterialEntity): Promise<Buffer> {
    return await this.exelService.generateReport(material);
  }
}
