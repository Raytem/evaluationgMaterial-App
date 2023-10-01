"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const functionality_level_1 = require("../../enums/functionality-level");
let CommentService = class CommentService {
    getWaterproofFunctionComment(calculatedWaterproofFunction) {
        const cwf = calculatedWaterproofFunction;
        const materialBlottingPressure_lvl = functionality_level_1.FunctionalityLevel.HIGH;
        const materialBlottingTime_lvl = functionality_level_1.FunctionalityLevel.HIGH;
        const waterproofRealizationCriteria_lvl = functionality_level_1.FunctionalityLevel.HIGH;
        const dynamicWaterproofCriteria_lvl = functionality_level_1.FunctionalityLevel.HIGH;
        const waterproofFunctionality_lvl = functionality_level_1.FunctionalityLevel.HIGH;
        const materialBlottingPressure_comment = `- по показателю Рп ${materialBlottingPressure_lvl} уровень водозащиты при гидростатическом давлении ${cwf.hydrostaticPressure} кПа и скорости ${cwf.hydrostaticPressureIncreaseSpeed} кПа/мин\n`;
        const materialBlottingTime_comment = `- ${materialBlottingTime_lvl}\n`;
        const waterproofRealizationCriteria_comment = `- по показателю Кв ${waterproofRealizationCriteria_lvl} уровень водозащиты при гидростатическом давлении ${cwf.hydrostaticPressure} кПа и времени защиты от воды ${cwf.waterproofTime} минут\n`;
        const dynamicWaterproofCriteria_comment = `- по показателю Квд ${dynamicWaterproofCriteria_lvl} уровень водозащиты при гидростатическом давлении ${cwf.hydrostaticPressure} кПа и времени защиты от воды ${cwf.waterproofTime} минут\n`;
        const waterproofFunctionality_comment = `- ${waterproofFunctionality_lvl} уровень функциональности по водозащите`;
        const resComment = materialBlottingPressure_comment +
            materialBlottingTime_comment +
            waterproofRealizationCriteria_comment +
            dynamicWaterproofCriteria_comment +
            waterproofFunctionality_comment;
        return resComment;
    }
    getHomeostasisFunctionComment(calculatedHomeostasisFunction) {
        const chf = calculatedHomeostasisFunction;
        const waterPermeability_lvl = functionality_level_1.FunctionalityLevel.HIGH;
        const totalThermalResistance_lvl = functionality_level_1.FunctionalityLevel.HIGH;
        const homeostasisFunctionality_lvl = functionality_level_1.FunctionalityLevel.HIGH;
        const waterPermeability_comment = `- ${waterPermeability_lvl} уровень паропроницаемости в середине диапазона носки\n`;
        const totalThermalResistance_comment = `- ${totalThermalResistance_lvl} уровень суммарного теплового сопротивления при минимальной температуре наружной среды 0 °С и средней физической активности\n`;
        const homeostasisFunctionality_comment = `- ${homeostasisFunctionality_lvl} уровень функциональности по обеспечению гомеостаза организма человека`;
        const resComment = waterPermeability_comment +
            totalThermalResistance_comment +
            homeostasisFunctionality_comment;
        return resComment;
    }
    getReliabilityFunctionComment(calculatedReliabilityFunction) {
        const crf = calculatedReliabilityFunction;
        const resComment = '';
        return resComment;
    }
    getEstimationComment(calculatedEstimation) {
        const ce = calculatedEstimation;
        const resComment = '';
        return resComment;
    }
};
exports.CommentService = CommentService;
exports.CommentService = CommentService = __decorate([
    (0, common_1.Injectable)()
], CommentService);
//# sourceMappingURL=comment.service.js.map