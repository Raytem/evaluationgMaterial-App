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
exports.CalculationService = void 0;
const common_1 = require("@nestjs/common");
const calculations_config_1 = require("../../config/config-functions/calculations.config");
const comment_service_1 = require("../comment/comment.service");
const obj_numbers_to_fixed_1 = require("../../utils/obj-numbers-to-fixed");
let CalculationService = class CalculationService {
    constructor(calcCfg, commentService) {
        this.calcCfg = calcCfg;
        this.commentService = commentService;
    }
    calcAll(createMaterialDto, material) {
        const waterproofFunction = this.calcWaterproofFunction(createMaterialDto, material);
        const homeostasisFunction = this.calcHomeostasisFunction(createMaterialDto, material);
        const reliabilityFunction = this.calcReliabilityFunction(createMaterialDto, material, waterproofFunction);
        const estimation = this.calcEstimation(createMaterialDto, material, waterproofFunction, homeostasisFunction, reliabilityFunction);
        return {
            waterproofFunction,
            homeostasisFunction,
            reliabilityFunction,
            estimation,
        };
    }
    calcWaterproofFunction(cmd, material) {
        const wpf = cmd.waterproofFunction;
        const waterproofRealizationCriteria_calculated = 1 -
            (0.25 *
                (wpf.waterproofTime -
                    wpf.waterproofRealizationCriteria_experimental_2) +
                wpf.waterproofRealizationCriteria_experimental_1) /
                (0.25 * wpf.waterproofTime) || 0;
        const dynamicWaterproofCriteria_calculated = (0.1 *
            (4 * wpf.dynamicWaterproofCriteria_experimental_1 +
                3 * wpf.dynamicWaterproofCriteria_experimental_2 +
                2 * wpf.dynamicWaterproofCriteria_experimental_3 +
                wpf.dynamicWaterproofCriteria_experimental_4)) /
            wpf.waterproofTime || 0;
        const materialBlottingPressure_relativeValuation = wpf.materialBlottingPressure_calculated /
            wpf.materialBlottingPressure_base || 0;
        const waterproof_relativeValuation = wpf.waterproof_calculated / wpf.waterproof_base || 0;
        const materialBlottingTime_relativeValuation = wpf.materialBlottingTime_calculated / wpf.materialBlottingTime_base || 0;
        const waterproofRealizationCriteria_relativeValuation = waterproofRealizationCriteria_calculated /
            wpf.waterproofRealizationCriteria_base || 0;
        const dynamicWaterproofCriteria_relativeValuation = dynamicWaterproofCriteria_calculated /
            wpf.dynamicWaterproofCriteria_base || 0;
        const avgWeightedEstimate = (materialBlottingPressure_relativeValuation **
            wpf.materialBlottingPressure_weight *
            waterproof_relativeValuation ** wpf.waterproof_weight *
            materialBlottingTime_relativeValuation **
                wpf.materialBlottingTime_weight *
            waterproofRealizationCriteria_relativeValuation **
                wpf.waterproofRealizationCriteria_weight *
            dynamicWaterproofCriteria_relativeValuation **
                wpf.dynamicWaterproofCriteria_weight) **
            (1 / 3) || 0;
        let calculatedWaterproofFunction = {
            ...wpf,
            waterproofRealizationCriteria_calculated,
            dynamicWaterproofCriteria_calculated,
            materialBlottingPressure_relativeValuation,
            waterproof_relativeValuation,
            materialBlottingTime_relativeValuation,
            waterproofRealizationCriteria_relativeValuation,
            dynamicWaterproofCriteria_relativeValuation,
            avgWeightedEstimate,
            material,
        };
        calculatedWaterproofFunction = (0, obj_numbers_to_fixed_1.objNumbersToFixed)(calculatedWaterproofFunction, this.calcCfg.cntOfNumbersAfterPoint);
        const comment = this.commentService.getWaterproofFunctionComment(calculatedWaterproofFunction);
        return {
            ...calculatedWaterproofFunction,
            comment,
        };
    }
    calcHomeostasisFunction(cmd, material) {
        const hf = cmd.homeostasisFunction;
        const D18 = 1.84 * 10 ** 11 * Math.exp(-5330 / (hf.comfTempInsideClothes + 273.15)) ||
            0;
        const D19 = D18 * (hf.comfHumidityInsideClothes / 100) || 0;
        const D20 = 1.84 * 10 ** 11 * Math.exp(-5330 / (hf.minOutdoorTemp + 273.15)) || 0;
        const D21 = D20 * (hf.minOutdoorHumidity / 100) || 0;
        const D22 = 1.84 * 10 ** 11 * Math.exp(-5330 / (hf.maxOutdoorTemp + 273.15)) || 0;
        const D23 = D22 * (hf.maxOutdoorHumidity / 100) || 0;
        const minPressureDiff = Math.min(D19 - D23, D19 - D21) || 0;
        const maxPressureDiff = Math.max(D19 - D23, D19 - D21) || 0;
        const estimatedPressureDiff = maxPressureDiff - minPressureDiff || 0;
        const avgRangePressureVal = (maxPressureDiff + minPressureDiff) / 2 || 0;
        const waterPermeability_calculated = 24 * ((hf.m1s - hf.m2s) / (hf.s0_1 * hf.t_1)) || 0;
        const waterPermeabilityDynamicCriteria_calculated = (24 * (hf.m1max - hf.m2max - (hf.m1min - hf.m2min))) /
            (hf.s0_2 * hf.t_2 * estimatedPressureDiff) || 0;
        const totalThermalResistance_calculated = (hf.sampleSurfaceArea * hf.tos) / (hf.s * hf.m) || 0;
        const waterPermeability_relativeValuation = waterPermeability_calculated / hf.waterPermeability_base || 0;
        const waterPermeabilityDynamicCriteria_relativeValuation = waterPermeabilityDynamicCriteria_calculated /
            hf.waterPermeabilityDynamicCriteria_base || 0;
        const totalThermalResistance_relativeValuation = totalThermalResistance_calculated / hf.totalThermalResistance_base || 0;
        const avgWeightedEstimate = (waterPermeability_relativeValuation ** hf.waterPermeability_weight *
            waterPermeabilityDynamicCriteria_relativeValuation **
                hf.waterPermeabilityDynamicCriteria_weight *
            totalThermalResistance_relativeValuation **
                hf.totalThermalResistance_weight) **
            (1 / 2) || 0;
        let calculatedHomeostasisFunction = {
            ...hf,
            minPressureDiff,
            maxPressureDiff,
            estimatedPressureDiff,
            avgRangePressureVal,
            waterPermeability_calculated,
            waterPermeabilityDynamicCriteria_calculated,
            totalThermalResistance_calculated,
            waterPermeability_relativeValuation,
            waterPermeabilityDynamicCriteria_relativeValuation,
            totalThermalResistance_relativeValuation,
            avgWeightedEstimate,
            material,
        };
        calculatedHomeostasisFunction = (0, obj_numbers_to_fixed_1.objNumbersToFixed)(calculatedHomeostasisFunction, this.calcCfg.cntOfNumbersAfterPoint);
        const comment = this.commentService.getHomeostasisFunctionComment(calculatedHomeostasisFunction);
        return {
            ...calculatedHomeostasisFunction,
            comment,
        };
    }
    calcReliabilityFunction(cmd, material, createWaterproofFunction) {
        const rf = cmd.reliabilityFunction;
        const relativeBlottingPressureAfterLoad_relativeValuation = rf.relativeBlottingPressureAfterLoad_calculated /
            rf.relativeBlottingPressureAfterLoad_base || 0;
        const relativeWaterResistanceAfterLoad_relativeValuation = rf.relativeWaterResistanceAfterLoad_calculated /
            rf.relativeWaterResistanceAfterLoad_base || 0;
        const relativeBlottingTimeAfterLoad_relativeValuation = rf.relativeBlottingTimeAfterLoad_calculated /
            rf.relativeBlottingTimeAfterLoad_base || 0;
        const waterproofRealizationCriteriaAfterLoad_calculated = 1 -
            (0.25 *
                (createWaterproofFunction.waterproofTime -
                    rf.waterproofRealizationCriteriaAfterLoad_experimental_2) +
                rf.waterproofRealizationCriteriaAfterLoad_experimental_1) /
                (0.25 * createWaterproofFunction.waterproofTime) || 0;
        const waterproofRealizationCriteriaAfterLoad_base = createWaterproofFunction.waterproofRealizationCriteria_calculated || 0;
        const waterproofRealizationCriteriaAfterLoad_relativeValuation = waterproofRealizationCriteriaAfterLoad_calculated /
            waterproofRealizationCriteriaAfterLoad_base || 0;
        const waterproofFunctionResource_experimental_1 = rf.relativeWaterResistanceAfterLoad_experimental_1 || 0;
        const waterproofFunctionResource_experimental_2 = createWaterproofFunction.waterproof_experimental_1;
        const waterproofFunctionResource_calculated = (waterproofFunctionResource_experimental_2 -
            waterproofFunctionResource_experimental_1) /
            rf.impactCyclesCnt || 0;
        const waterproofFunctionResource_relativeValuation = waterproofFunctionResource_calculated /
            rf.waterproofFunctionResource_base || 0;
        const avgWeightedEstimate = (relativeBlottingPressureAfterLoad_relativeValuation **
            rf.relativeBlottingPressureAfterLoad_weight *
            relativeWaterResistanceAfterLoad_relativeValuation **
                rf.relativeWaterResistanceAfterLoad_weight *
            relativeBlottingTimeAfterLoad_relativeValuation **
                rf.relativeBlottingTimeAfterLoad_weight *
            waterproofRealizationCriteriaAfterLoad_relativeValuation **
                rf.waterproofRealizationCriteriaAfterLoad_weight *
            waterproofFunctionResource_relativeValuation **
                rf.waterproofFunctionResource_weight) **
            (1 / 2) || 0;
        let calculatedReliabilityFunction = {
            ...rf,
            material,
            relativeBlottingPressureAfterLoad_relativeValuation,
            relativeWaterResistanceAfterLoad_relativeValuation,
            relativeBlottingTimeAfterLoad_relativeValuation,
            waterproofRealizationCriteriaAfterLoad_calculated,
            waterproofRealizationCriteriaAfterLoad_base,
            waterproofRealizationCriteriaAfterLoad_relativeValuation,
            waterproofFunctionResource_experimental_1,
            waterproofFunctionResource_experimental_2,
            waterproofFunctionResource_calculated,
            waterproofFunctionResource_relativeValuation,
            avgWeightedEstimate,
        };
        calculatedReliabilityFunction = (0, obj_numbers_to_fixed_1.objNumbersToFixed)(calculatedReliabilityFunction, this.calcCfg.cntOfNumbersAfterPoint);
        const comment = this.commentService.getReliabilityFunctionComment(calculatedReliabilityFunction);
        return {
            ...calculatedReliabilityFunction,
            comment,
        };
    }
    calcEstimation(cmd, material, createWaterproofFunction, createHomeostasisFunction, createReliabilityFunction) {
        const est = cmd.estimation;
        const avgWeightedArithmetic = est.waterproofFunction_weight *
            createWaterproofFunction.avgWeightedEstimate +
            est.homeostasisFunction_weight *
                createHomeostasisFunction.avgWeightedEstimate +
            est.reliabilityFunction_weight *
                createReliabilityFunction.avgWeightedEstimate || 0;
        const avgWeightedGeometric = (createWaterproofFunction.avgWeightedEstimate **
            est.waterproofFunction_weight *
            createHomeostasisFunction.avgWeightedEstimate **
                est.homeostasisFunction_weight *
            createReliabilityFunction.avgWeightedEstimate **
                est.reliabilityFunction_weight) **
            (1 / 3) || 0;
        let calculatedEstimation = {
            ...est,
            material,
            avgWeightedArithmetic,
            avgWeightedGeometric,
        };
        calculatedEstimation = (0, obj_numbers_to_fixed_1.objNumbersToFixed)(calculatedEstimation, this.calcCfg.cntOfNumbersAfterPoint);
        return calculatedEstimation;
    }
};
exports.CalculationService = CalculationService;
exports.CalculationService = CalculationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(calculations_config_1.calculationsConfig.KEY)),
    __metadata("design:paramtypes", [void 0, comment_service_1.CommentService])
], CalculationService);
//# sourceMappingURL=calculation.service.js.map