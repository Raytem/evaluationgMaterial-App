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
let CalculationService = class CalculationService {
    constructor(calcCfg, commentService) {
        this.calcCfg = calcCfg;
        this.commentService = commentService;
    }
    calcAll(createMaterialDto, material) {
        return {
            waterproofFunction: this.calcWaterproofFunction(createMaterialDto, material),
            homeostasisFunction: this.calcHomeostasisFunction(createMaterialDto, material),
            reliabilityFunction: this.calcReliabilityFunction(createMaterialDto, material),
            estimation: this.calcEstimation(createMaterialDto, material),
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
        const waterproof_relativeValuation = +(wpf.waterproof_calculated / wpf.waterproof_base) || 0;
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
        const calculatedWaterproofFunction = {
            ...wpf,
            waterproofRealizationCriteria_calculated: +waterproofRealizationCriteria_calculated.toFixed(this.calcCfg.cntOfNumbersAfterPoint),
            dynamicWaterproofCriteria_calculated: +dynamicWaterproofCriteria_calculated.toFixed(this.calcCfg.cntOfNumbersAfterPoint),
            materialBlottingPressure_relativeValuation: +materialBlottingPressure_relativeValuation.toFixed(this.calcCfg.cntOfNumbersAfterPoint),
            waterproof_relativeValuation: +waterproof_relativeValuation.toFixed(this.calcCfg.cntOfNumbersAfterPoint),
            materialBlottingTime_relativeValuation: +materialBlottingTime_relativeValuation.toFixed(this.calcCfg.cntOfNumbersAfterPoint),
            waterproofRealizationCriteria_relativeValuation: +waterproofRealizationCriteria_relativeValuation.toFixed(this.calcCfg.cntOfNumbersAfterPoint),
            dynamicWaterproofCriteria_relativeValuation: +dynamicWaterproofCriteria_relativeValuation.toFixed(this.calcCfg.cntOfNumbersAfterPoint),
            avgWeightedEstimate: +avgWeightedEstimate.toFixed(this.calcCfg.cntOfNumbersAfterPoint),
            material,
        };
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
        const totalThermalResistance_calculated = (hf.sampleSurfaceArea * hf.tos) / (hf.s * hf.m);
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
        const calculatedHomeostasisFunction = {
            ...hf,
            minPressureDiff: +minPressureDiff.toFixed(this.calcCfg.cntOfNumbersAfterPoint),
            maxPressureDiff: +maxPressureDiff.toFixed(this.calcCfg.cntOfNumbersAfterPoint),
            estimatedPressureDiff: +estimatedPressureDiff.toFixed(this.calcCfg.cntOfNumbersAfterPoint),
            avgRangePressureVal: +avgRangePressureVal.toFixed(this.calcCfg.cntOfNumbersAfterPoint),
            waterPermeability_calculated: +waterPermeability_calculated.toFixed(this.calcCfg.cntOfNumbersAfterPoint),
            waterPermeabilityDynamicCriteria_calculated: +waterPermeabilityDynamicCriteria_calculated.toFixed(this.calcCfg.cntOfNumbersAfterPoint),
            totalThermalResistance_calculated: +totalThermalResistance_calculated.toFixed(this.calcCfg.cntOfNumbersAfterPoint),
            waterPermeability_relativeValuation: +waterPermeability_relativeValuation.toFixed(this.calcCfg.cntOfNumbersAfterPoint),
            waterPermeabilityDynamicCriteria_relativeValuation: +waterPermeabilityDynamicCriteria_relativeValuation.toFixed(this.calcCfg.cntOfNumbersAfterPoint),
            totalThermalResistance_relativeValuation: +totalThermalResistance_relativeValuation.toFixed(this.calcCfg.cntOfNumbersAfterPoint),
            avgWeightedEstimate: +avgWeightedEstimate.toFixed(this.calcCfg.cntOfNumbersAfterPoint),
            material,
        };
        const comment = this.commentService.getHomeostasisFunctionComment(calculatedHomeostasisFunction);
        return {
            ...calculatedHomeostasisFunction,
            comment,
        };
    }
    calcReliabilityFunction(cmd, material) {
        return;
    }
    calcEstimation(cmd, material) {
        return;
    }
};
exports.CalculationService = CalculationService;
exports.CalculationService = CalculationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(calculations_config_1.calculationsConfig.KEY)),
    __metadata("design:paramtypes", [void 0, comment_service_1.CommentService])
], CalculationService);
//# sourceMappingURL=calculation.service.js.map