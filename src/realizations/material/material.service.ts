import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
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
import { DataSource, Repository } from 'typeorm';
import { PaginationService } from 'src/services/pagination/pagination.service';
import { NoSuchException } from 'src/exceptions/no-such.exception';
import { LayerTypeService } from '../layer-type/layer-type.service';
import { CreateMaterialDto } from 'src/realizations/material/dto/create-material.dto';
import { UserEntity } from '../user/entities/user.entity';
import { Multer } from 'multer';
import { MaterialFilterDto } from './dto/material-filter.dto';
import { LayerEntity } from '../layer/entities/layer.entity';
import { CalculationService } from 'src/services/calculation/calculation.service';
import { MaterialsAndCnt } from './dto/materials-and-cnt.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';

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

    private dataSource: DataSource,
  ) {}

  async create(
    createMaterialDto: CreateMaterialDto,
    files: Multer.File[],
    reqUser: UserEntity,
  ): Promise<MaterialEntity> {
    const waterproofWeightSum =
      createMaterialDto.waterproofFunction
        .waterproofRealizationCriteria_weight +
      createMaterialDto.waterproofFunction.dynamicWaterproofCriteria_weight +
      createMaterialDto.waterproofFunction.materialBlottingPressure_weight +
      createMaterialDto.waterproofFunction.materialBlottingTime_weight +
      createMaterialDto.waterproofFunction.waterproof_weight;

    const homeostasisWeightSum =
      createMaterialDto.homeostasisFunction.waterPermeability_weight +
      createMaterialDto.homeostasisFunction.totalThermalResistance_weight +
      createMaterialDto.homeostasisFunction
        .waterPermeabilityDynamicCriteria_weight;

    const reliabilityWeightSum =
      createMaterialDto.reliabilityFunction.waterproofFunctionResource_weight +
      createMaterialDto.reliabilityFunction
        .relativeBlottingTimeAfterLoad_weight +
      createMaterialDto.reliabilityFunction
        .relativeWaterResistanceAfterLoad_weight +
      createMaterialDto.reliabilityFunction
        .relativeBlottingPressureAfterLoad_weight +
      createMaterialDto.reliabilityFunction
        .waterproofRealizationCriteriaAfterLoad_weight;

    const estimationWeightSum =
      createMaterialDto.estimation.homeostasisFunction_weight +
      createMaterialDto.estimation.waterproofFunction_weight +
      createMaterialDto.estimation.reliabilityFunction_weight;

    if (waterproofWeightSum > 1 || waterproofWeightSum < 0) {
      throw new BadRequestException(
        "The sum of the weights in 'waterproof function' cannot be more than 1 and less then 0",
      );
    }
    if (homeostasisWeightSum > 1 || homeostasisWeightSum < 0) {
      throw new BadRequestException(
        "The sum of the weights in 'homeostasis function' cannot be more than 1 and less then 0",
      );
    }
    if (reliabilityWeightSum > 1 || reliabilityWeightSum < 0) {
      throw new BadRequestException(
        "The sum of the weights in 'reliability function' cannot be more than 1 and less then 0",
      );
    }

    if (estimationWeightSum > 1 || estimationWeightSum < 0) {
      throw new BadRequestException(
        "The sum of the weights in 'estimation' cannot be more than 1 and less then 0",
      );
    }

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction('READ COMMITTED');
    const manager = queryRunner.manager;

    try {
      const glueType = await this.glueTypeService.findOne(
        createMaterialDto.material.glueType_id,
      );

      const membraneLayerPolymerType =
        await this.membraneLayerPolymerTypeService.findOne(
          createMaterialDto.material.membraneLayerPolymerType_id,
        );

      const productionMethod = await this.productionMethodService.findOne(
        createMaterialDto.material.productionMethod_id,
      );

      //material creation
      const condition = await this.conditionService.create(
        createMaterialDto.condition,
        manager,
      );

      const material = await manager
        .withRepository(this.materialRepository)
        .save({
          ...createMaterialDto.material,
          condition,
          user: reqUser,
          productionMethod,
          membraneLayerPolymerType,
          glueType,
        });

      await this.layerService.createMany(
        material,
        createMaterialDto.material.layers,
        manager,
      );

      await this.imageService.createMany(files, material, manager);

      const calculatedFunctionalIndicators = this.calculationService.calcAll(
        createMaterialDto,
        material,
      );

      await this.waterproofFunctionService.create(
        calculatedFunctionalIndicators.waterproofFunction,
        manager,
      );

      await this.homeostasisFunctionService.create(
        calculatedFunctionalIndicators.homeostasisFunction,
        manager,
      );

      await this.reliabilityFunctionService.create(
        calculatedFunctionalIndicators.reliabilityFunction,
        manager,
      );

      await this.estimationService.create(
        calculatedFunctionalIndicators.estimation,
        manager,
      );

      await queryRunner.commitTransaction();
      return await this.findOne(material.id);
    } catch (e) {
      await queryRunner.rollbackTransaction();
      throw e;
    } finally {
      await queryRunner.release();
    }
  }

  async update(
    id: number,
    updateMaterialDto: UpdateMaterialDto,
    reqUser: UserEntity,
  ): Promise<MaterialEntity> {
    const material = await this.findOne(id);

    if (material.user.id !== reqUser.id) {
      throw new ForbiddenException('You can update only your materials');
    }

    const updatedMaterial = await this.materialRepository.save({
      id,
      ...material,
      ...updateMaterialDto,
    });

    return await this.findOne(id);
  }

  async findAll(
    materialFilterDto: MaterialFilterDto,
  ): Promise<MaterialsAndCnt> {
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

    if (materialFilterDto.userId) {
      queryBuilder.andWhere('user.id = :userId', {
        userId: materialFilterDto.userId,
      });
    }

    if (materialFilterDto.name) {
      queryBuilder.andWhere(
        `material.name ILIKE '%${materialFilterDto.name}%'`,
      );
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

    if (materialFilterDto.depth_min) {
      queryBuilder.andWhere('material.depth >= :depth_min', {
        depth_min: materialFilterDto.depth_min,
      });
    }

    if (materialFilterDto.depth_max) {
      queryBuilder.andWhere('material.depth <= :depth_max', {
        depth_max: materialFilterDto.depth_max,
      });
    }

    if (materialFilterDto.materialBlottingPressure_calculated_min) {
      queryBuilder.andWhere(
        'waterproofFunction.materialBlottingPressure_calculated >= :materialBlottingPressure_calculated_min',
        {
          materialBlottingPressure_calculated_min:
            materialFilterDto.materialBlottingPressure_calculated_min,
        },
      );
    }

    if (materialFilterDto.materialBlottingPressure_calculated_max) {
      queryBuilder.andWhere(
        'waterproofFunction.materialBlottingPressure_calculated <= :materialBlottingPressure_calculated_max',
        {
          materialBlottingPressure_calculated_max:
            materialFilterDto.materialBlottingPressure_calculated_max,
        },
      );
    }

    if (materialFilterDto.materialBlottingTime_calculated_min) {
      queryBuilder.andWhere(
        'waterproofFunction.materialBlottingPressure_calculated >= :materialBlottingTime_calculated_min',
        {
          materialBlottingTime_calculated_min:
            materialFilterDto.materialBlottingTime_calculated_min,
        },
      );
    }

    if (materialFilterDto.materialBlottingTime_calculated_max) {
      queryBuilder.andWhere(
        'waterproofFunction.materialBlottingTime_calculated <= :materialBlottingTime_calculated_max',
        {
          materialBlottingTime_calculated_max:
            materialFilterDto.materialBlottingTime_calculated_max,
        },
      );
    }

    if (materialFilterDto.totalThermalResistance_calculated_min) {
      queryBuilder.andWhere(
        'homeostasisFunction.totalThermalResistance_calculated >= :totalThermalResistance_calculated_min',
        {
          totalThermalResistance_calculated_min:
            materialFilterDto.totalThermalResistance_calculated_min,
        },
      );
    }

    if (materialFilterDto.totalThermalResistance_calculated_max) {
      queryBuilder.andWhere(
        'homeostasisFunction.totalThermalResistance_calculated <= :totalThermalResistance_calculated_max',
        {
          totalThermalResistance_calculated_max:
            materialFilterDto.totalThermalResistance_calculated_max,
        },
      );
    }

    if (
      materialFilterDto.relativeBlottingPressureAfterLoad_relativeValuation_min
    ) {
      queryBuilder.andWhere(
        'reliabilityFunction.relativeBlottingPressureAfterLoad_relativeValuation >= :relativeBlottingPressureAfterLoad_relativeValuation_min',
        {
          relativeBlottingPressureAfterLoad_relativeValuation_min:
            materialFilterDto.relativeBlottingPressureAfterLoad_relativeValuation_min,
        },
      );
    }

    if (
      materialFilterDto.relativeBlottingPressureAfterLoad_relativeValuation_max
    ) {
      queryBuilder.andWhere(
        'reliabilityFunction.relativeBlottingPressureAfterLoad_relativeValuation <= :relativeBlottingPressureAfterLoad_relativeValuation_max',
        {
          relativeBlottingPressureAfterLoad_relativeValuation_max:
            materialFilterDto.relativeBlottingPressureAfterLoad_relativeValuation_max,
        },
      );
    }

    const queryBuilderWithoutPagination = queryBuilder;

    const pagination = this.paginationService.paginate(materialFilterDto);
    if (pagination.take) {
      queryBuilder.take(pagination.take);
    }
    if (pagination.skip) {
      queryBuilder.skip(pagination.skip);
    }

    const totalCnt = await queryBuilderWithoutPagination.getCount();
    const filteredMaterials = await queryBuilder.getMany();

    const resMaterials = filteredMaterials.map((m) => {
      return new MaterialEntity({
        ...m,
        waterproofFunction: undefined,
        homeostasisFunction: undefined,
        reliabilityFunction: undefined,
        estimation: undefined,
      });
    });

    return {
      materials: resMaterials,
      totalCnt,
    };
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
