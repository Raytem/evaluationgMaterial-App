"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const material_entity_1 = require("./entities/material.entity");
const condition_service_1 = require("../condition/condition.service");
const glue_type_service_1 = require("../glue-type/glue-type.service");
const membrane_layer_polymer_type_service_1 = require("../membrane-layer-polymer-type/membrane-layer-polymer-type.service");
const production_method_service_1 = require("../production-method/production-method.service");
const waterproof_function_service_1 = require("../waterproof-function/waterproof-function.service");
const homeostasis_function_service_1 = require("../homeostasis-function/homeostasis-function.service");
const reliability_function_service_1 = require("../reliability-function/reliability-function.service");
const estimation_service_1 = require("../estimation/estimation.service");
const image_service_1 = require("../image/image.service");
const layer_service_1 = require("../layer/layer.service");
const exel_service_1 = require("../../services/exel/exel.service");
const typeorm_2 = require("typeorm");
const pagination_service_1 = require("../../services/pagination/pagination.service");
const no_such_exception_1 = require("../../exceptions/no-such.exception");
const layer_type_service_1 = require("../layer-type/layer-type.service");
const layer_entity_1 = require("../layer/entities/layer.entity");
const calculation_service_1 = require("../../services/calculation/calculation.service");
let MaterialService = class MaterialService {
    constructor(materialRepository, calculationService, glueTypeService, layerTypeService, membraneLayerPolymerTypeService, productionMethodService, conditionService, waterproofFunctionService, homeostasisFunctionService, reliabilityFunctionService, estimationService, imageService, layerService, exelService, paginationService, dataSource) {
        this.materialRepository = materialRepository;
        this.calculationService = calculationService;
        this.glueTypeService = glueTypeService;
        this.layerTypeService = layerTypeService;
        this.membraneLayerPolymerTypeService = membraneLayerPolymerTypeService;
        this.productionMethodService = productionMethodService;
        this.conditionService = conditionService;
        this.waterproofFunctionService = waterproofFunctionService;
        this.homeostasisFunctionService = homeostasisFunctionService;
        this.reliabilityFunctionService = reliabilityFunctionService;
        this.estimationService = estimationService;
        this.imageService = imageService;
        this.layerService = layerService;
        this.exelService = exelService;
        this.paginationService = paginationService;
        this.dataSource = dataSource;
    }
    async create(createMaterialDto, files, reqUser) {
        const waterproofWeightSum = createMaterialDto.waterproofFunction
            .waterproofRealizationCriteria_weight +
            createMaterialDto.waterproofFunction.dynamicWaterproofCriteria_weight +
            createMaterialDto.waterproofFunction.materialBlottingPressure_weight +
            createMaterialDto.waterproofFunction.materialBlottingTime_weight +
            createMaterialDto.waterproofFunction.waterproof_weight;
        const homeostasisWeightSum = createMaterialDto.homeostasisFunction.waterPermeability_weight +
            createMaterialDto.homeostasisFunction.totalThermalResistance_weight +
            createMaterialDto.homeostasisFunction
                .waterPermeabilityDynamicCriteria_weight;
        const reliabilityWeightSum = createMaterialDto.reliabilityFunction.waterproofFunctionResource_weight +
            createMaterialDto.reliabilityFunction
                .relativeBlottingTimeAfterLoad_weight +
            createMaterialDto.reliabilityFunction
                .relativeWaterResistanceAfterLoad_weight +
            createMaterialDto.reliabilityFunction
                .relativeBlottingPressureAfterLoad_weight +
            createMaterialDto.reliabilityFunction
                .waterproofRealizationCriteriaAfterLoad_weight;
        const estimationWeightSum = createMaterialDto.estimation.homeostasisFunction_weight +
            createMaterialDto.estimation.waterproofFunction_weight +
            createMaterialDto.estimation.reliabilityFunction_weight;
        if (waterproofWeightSum > 1 || waterproofWeightSum < 0) {
            throw new common_1.BadRequestException("The sum of the weights in 'waterproof function' cannot be more than 1 and less then 0");
        }
        if (homeostasisWeightSum > 1 || homeostasisWeightSum < 0) {
            throw new common_1.BadRequestException("The sum of the weights in 'homeostasis function' cannot be more than 1 and less then 0");
        }
        if (reliabilityWeightSum > 1 || reliabilityWeightSum < 0) {
            throw new common_1.BadRequestException("The sum of the weights in 'reliability function' cannot be more than 1 and less then 0");
        }
        if (estimationWeightSum > 1 || estimationWeightSum < 0) {
            throw new common_1.BadRequestException("The sum of the weights in 'estimation' cannot be more than 1 and less then 0");
        }
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction('READ COMMITTED');
        const manager = queryRunner.manager;
        try {
            const glueType = await this.glueTypeService.findOne(createMaterialDto.material.glueType_id);
            const membraneLayerPolymerType = await this.membraneLayerPolymerTypeService.findOne(createMaterialDto.material.membraneLayerPolymerType_id);
            const productionMethod = await this.productionMethodService.findOne(createMaterialDto.material.productionMethod_id);
            const condition = await this.conditionService.create(createMaterialDto.condition, manager);
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
            await this.layerService.createMany(material, createMaterialDto.material.layers, manager);
            await this.imageService.createMany(files, material, manager);
            const calculatedFunctionalIndicators = this.calculationService.calcAll(createMaterialDto, material);
            await this.waterproofFunctionService.create(calculatedFunctionalIndicators.waterproofFunction, manager);
            await this.homeostasisFunctionService.create(calculatedFunctionalIndicators.homeostasisFunction, manager);
            await this.reliabilityFunctionService.create(calculatedFunctionalIndicators.reliabilityFunction, manager);
            await this.estimationService.create(calculatedFunctionalIndicators.estimation, manager);
            await queryRunner.commitTransaction();
            return await this.findOne(material.id);
        }
        catch (e) {
            await queryRunner.rollbackTransaction();
            throw e;
        }
        finally {
            await queryRunner.release();
        }
    }
    async update(id, updateMaterialDto, reqUser) {
        const material = await this.findOne(id);
        if (material.user.id !== reqUser.id) {
            throw new common_1.ForbiddenException('You can update only your materials');
        }
        const updatedMaterial = await this.materialRepository.save({
            id,
            ...material,
            ...updateMaterialDto,
        });
        return updatedMaterial;
    }
    async findAll(materialFilterDto) {
        const queryBuilder = this.materialRepository
            .createQueryBuilder('material')
            .leftJoinAndSelect('material.condition', 'condition')
            .leftJoinAndSelect('material.user', 'user')
            .leftJoinAndSelect('condition.abrasionType', 'abrasionType')
            .leftJoinAndSelect('condition.washing', 'washing')
            .leftJoinAndSelect('washing.washingType', 'washingType')
            .leftJoinAndSelect('condition.bendingType', 'bendingType')
            .leftJoinAndSelect('condition.physicalActivityType', 'physicalActivityType')
            .leftJoinAndSelect('material.waterproofFunction', 'waterproofFunction')
            .leftJoinAndSelect('material.homeostasisFunction', 'homeostasisFunction')
            .leftJoinAndSelect('material.reliabilityFunction', 'reliabilityFunction')
            .leftJoinAndSelect('material.estimation', 'estimation')
            .leftJoinAndSelect('material.layers', 'layer')
            .leftJoinAndSelect('layer.layerType', 'layerType')
            .leftJoinAndSelect('material.images', 'image')
            .leftJoinAndSelect('material.productionMethod', 'productionMethod')
            .leftJoinAndSelect('material.membraneLayerPolymerType', 'membraneLayerPolymerType')
            .leftJoinAndSelect('material.glueType', 'glueType');
        if (materialFilterDto.userId) {
            queryBuilder.andWhere('user.id = :userId', {
                userId: materialFilterDto.userId,
            });
        }
        if (materialFilterDto.name) {
            queryBuilder.andWhere(`material.name ILIKE '%${materialFilterDto.name}%'`);
        }
        if (materialFilterDto.membraneLayerPolymerType_id) {
            queryBuilder.andWhere('membraneLayerPolymerType.id = :membraneLayerPolymerType_id', {
                membraneLayerPolymerType_id: materialFilterDto.membraneLayerPolymerType_id,
            });
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
                    .from(layer_entity_1.LayerEntity, 'layer')
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
            queryBuilder.andWhere('waterproofFunction.materialBlottingPressure_calculated >= :materialBlottingPressure_calculated_min', {
                materialBlottingPressure_calculated_min: materialFilterDto.materialBlottingPressure_calculated_min,
            });
        }
        if (materialFilterDto.materialBlottingPressure_calculated_max) {
            queryBuilder.andWhere('waterproofFunction.materialBlottingPressure_calculated <= :materialBlottingPressure_calculated_max', {
                materialBlottingPressure_calculated_max: materialFilterDto.materialBlottingPressure_calculated_max,
            });
        }
        if (materialFilterDto.materialBlottingTime_calculated_min) {
            queryBuilder.andWhere('waterproofFunction.materialBlottingPressure_calculated >= :materialBlottingTime_calculated_min', {
                materialBlottingTime_calculated_min: materialFilterDto.materialBlottingTime_calculated_min,
            });
        }
        if (materialFilterDto.materialBlottingTime_calculated_max) {
            queryBuilder.andWhere('waterproofFunction.materialBlottingTime_calculated <= :materialBlottingTime_calculated_max', {
                materialBlottingTime_calculated_max: materialFilterDto.materialBlottingTime_calculated_max,
            });
        }
        if (materialFilterDto.totalThermalResistance_calculated_min) {
            queryBuilder.andWhere('homeostasisFunction.totalThermalResistance_calculated >= :totalThermalResistance_calculated_min', {
                totalThermalResistance_calculated_min: materialFilterDto.totalThermalResistance_calculated_min,
            });
        }
        if (materialFilterDto.totalThermalResistance_calculated_max) {
            queryBuilder.andWhere('homeostasisFunction.totalThermalResistance_calculated <= :totalThermalResistance_calculated_max', {
                totalThermalResistance_calculated_max: materialFilterDto.totalThermalResistance_calculated_max,
            });
        }
        if (materialFilterDto.relativeBlottingPressureAfterLoad_relativeValuation_min) {
            queryBuilder.andWhere('reliabilityFunction.relativeBlottingPressureAfterLoad_relativeValuation >= :relativeBlottingPressureAfterLoad_relativeValuation_min', {
                relativeBlottingPressureAfterLoad_relativeValuation_min: materialFilterDto.relativeBlottingPressureAfterLoad_relativeValuation_min,
            });
        }
        if (materialFilterDto.relativeBlottingPressureAfterLoad_relativeValuation_max) {
            queryBuilder.andWhere('reliabilityFunction.relativeBlottingPressureAfterLoad_relativeValuation <= :relativeBlottingPressureAfterLoad_relativeValuation_max', {
                relativeBlottingPressureAfterLoad_relativeValuation_max: materialFilterDto.relativeBlottingPressureAfterLoad_relativeValuation_max,
            });
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
            return new material_entity_1.MaterialEntity({
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
    async findOne(id, withFunctionalIndicators = false) {
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
            throw new no_such_exception_1.NoSuchException('material');
        }
        return material;
    }
    async remove(id, reqUser) {
        const material = await this.findOne(id);
        if (material.user.id !== reqUser.id) {
            throw new common_1.ForbiddenException('You can delete only the materials you have created');
        }
        try {
            await this.imageService.removeMaterialImagesFolder(material);
        }
        catch (e) {
            throw e;
        }
        await this.materialRepository.remove(material);
        return material;
    }
    async getReportFromTemplate(material) {
        return await this.exelService.generateReport(material);
    }
};
exports.MaterialService = MaterialService;
exports.MaterialService = MaterialService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(material_entity_1.MaterialEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        calculation_service_1.CalculationService,
        glue_type_service_1.GlueTypeService,
        layer_type_service_1.LayerTypeService,
        membrane_layer_polymer_type_service_1.MembraneLayerPolymerTypeService,
        production_method_service_1.ProductionMethodService,
        condition_service_1.ConditionService,
        waterproof_function_service_1.WaterproofFunctionService,
        homeostasis_function_service_1.HomeostasisFunctionService,
        reliability_function_service_1.ReliabilityFunctionService,
        estimation_service_1.EstimationService,
        image_service_1.ImageService,
        layer_service_1.LayerService,
        exel_service_1.ExelService,
        pagination_service_1.PaginationService,
        typeorm_2.DataSource])
], MaterialService);
//# sourceMappingURL=material.service.js.map