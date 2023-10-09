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
    constructor(materialRepository, calculationService, glueTypeService, layerTypeService, membraneLayerPolymerTypeService, productionMethodService, conditionService, waterproofFunctionService, homeostasisFunctionService, reliabilityFunctionService, estimationService, imageService, layerService, exelService, paginationService) {
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
    }
    async create(createMaterialDto, files, reqUser) {
        try {
            const glueType = await this.glueTypeService.findOne(createMaterialDto.material.glueType_id);
            const layerTypeIds = createMaterialDto.material.layers.map((layer) => layer.layerType_id);
            const layerTypes = await this.layerTypeService.findByIds(layerTypeIds);
            if (layerTypeIds.length !== layerTypes.length) {
                throw new no_such_exception_1.NoSuchException('layer type');
            }
            let createLayersList = createMaterialDto.material.layers.map((layer, idx) => {
                return {
                    ...layer,
                    layerType: layerTypes[idx],
                };
            });
            const membraneLayerPolymerType = await this.membraneLayerPolymerTypeService.findOne(createMaterialDto.material.membraneLayerPolymerType_id);
            const productionMethod = await this.productionMethodService.findOne(createMaterialDto.material.productionMethod_id);
            const condition = await this.conditionService.create(createMaterialDto.condition);
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
            const calculatedFunctionalIndicators = this.calculationService.calcAll(createMaterialDto, material);
            const waterproofFunction = await this.waterproofFunctionService.create(calculatedFunctionalIndicators.waterproofFunction);
            const homeostasisFunction = await this.homeostasisFunctionService.create(calculatedFunctionalIndicators.homeostasisFunction);
            const reliabilityFunction = await this.reliabilityFunctionService.create(calculatedFunctionalIndicators.reliabilityFunction);
            const estimation = await this.estimationService.create(calculatedFunctionalIndicators.estimation);
            return await this.findOne(material.id);
        }
        catch (e) {
            throw e;
        }
    }
    async findAll(materialFilterDto) {
        const pagination = this.paginationService.paginate(materialFilterDto);
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
        if (pagination.take) {
            queryBuilder.take(pagination.take);
        }
        if (pagination.skip) {
            queryBuilder.skip(pagination.skip);
        }
        if (materialFilterDto.name) {
            queryBuilder.andWhere(`material.name ILIKE '%${materialFilterDto.name}%'`);
        }
        if (materialFilterDto.depth) {
            queryBuilder.andWhere('material.depth = :depth', {
                depth: materialFilterDto.depth,
            });
        }
        if (materialFilterDto.materialBlottingPressure_calculated) {
            queryBuilder.andWhere('waterproofFunction.materialBlottingPressure_calculated >= :materialBlottingPressure_calculated', {
                materialBlottingPressure_calculated: materialFilterDto.materialBlottingPressure_calculated,
            });
        }
        if (materialFilterDto.totalThermalResistance_calculated) {
            queryBuilder.andWhere('homeostasisFunction.totalThermalResistance_calculated >= :totalThermalResistance_calculated', {
                totalThermalResistance_calculated: materialFilterDto.totalThermalResistance_calculated,
            });
        }
        if (materialFilterDto.totalThermalResistance_calculated) {
            queryBuilder.andWhere('reliabilityFunction.materialBlottingPressure_relativeValuation >= :materialBlottingPressure_relativeValuation', {
                materialBlottingPressure_relativeValuation: materialFilterDto.materialBlottingPressure_relativeValuation,
            });
        }
        if (materialFilterDto.depth) {
            queryBuilder.andWhere('material.depth >= :depth', {
                depth: materialFilterDto.depth,
            });
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
        const filteredMaterials = await queryBuilder.getMany();
        return filteredMaterials.map((m) => {
            return new material_entity_1.MaterialEntity({
                ...m,
                waterproofFunction: undefined,
                homeostasisFunction: undefined,
                reliabilityFunction: undefined,
                estimation: undefined,
            });
        });
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
        pagination_service_1.PaginationService])
], MaterialService);
//# sourceMappingURL=material.service.js.map