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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExelService = void 0;
const common_1 = require("@nestjs/common");
const file_config_1 = require("../../config/config-functions/file.config");
const xlsx_populate_1 = __importDefault(require("xlsx-populate"));
const path_1 = __importDefault(require("path"));
let ExelService = class ExelService {
    constructor(fileCfg) {
        this.fileCfg = fileCfg;
    }
    async generateReport(material) {
        const templatesDir = path_1.default.join(process.cwd(), this.fileCfg.staticDirName, this.fileCfg.templatesDirName);
        const workbook = await xlsx_populate_1.default.fromFileAsync(path_1.default.join(templatesDir, 'report_template.xlsx'));
        const waterproofSheet = workbook.sheet('Водозащита');
        const homeostasisSheet = workbook.sheet('Гомеостаз');
        const reliabilitySheet = workbook.sheet('Надежность');
        const estimationSheet = workbook.sheet('Оценка');
        this.fillWaterproofSheet(waterproofSheet, material);
        this.fillHomeostasisSheet(homeostasisSheet, material);
        this.fillReliabilitySheet(reliabilitySheet, material);
        this.fillEstimationSheet(estimationSheet, material);
        const buffer = await workbook.outputAsync('buffer');
        return buffer;
    }
    fillWaterproofSheet(waterproofSheet, material) {
        const waterproofFunction = material.waterproofFunction;
        waterproofSheet.cell('A2').value(material.name);
        waterproofSheet.cell('A3').value(material.description);
        waterproofSheet.cell('A5').value(waterproofFunction.equipment);
        waterproofSheet.cell('A27').value(material.user.fio);
        waterproofSheet
            .cell('B8')
            .value(waterproofFunction.materialBlottingPressure_experimental_1);
        waterproofSheet
            .cell('B9')
            .value(waterproofFunction.waterproof_experimental_1);
        waterproofSheet
            .cell('B10')
            .value(waterproofFunction.materialBlottingTime_experimental_1);
        waterproofSheet
            .cell('B11')
            .value(waterproofFunction.waterproofRealizationCriteria_experimental_1);
        waterproofSheet
            .cell('B12')
            .value(waterproofFunction.dynamicWaterproofCriteria_experimental_1);
        waterproofSheet
            .cell('B14')
            .value(waterproofFunction.hydrostaticPressureIncreaseSpeed);
        waterproofSheet.cell('B15').value(waterproofFunction.hydrostaticPressure);
        waterproofSheet.cell('B16').value(waterproofFunction.waterproofTime);
        waterproofSheet.cell('B18').value(waterproofFunction.comment);
        waterproofSheet
            .cell('C11')
            .value(waterproofFunction.waterproofRealizationCriteria_experimental_2);
        waterproofSheet
            .cell('C12')
            .value(waterproofFunction.dynamicWaterproofCriteria_experimental_2);
        waterproofSheet
            .cell('D12')
            .value(waterproofFunction.dynamicWaterproofCriteria_experimental_3);
        waterproofSheet
            .cell('E12')
            .value(waterproofFunction.dynamicWaterproofCriteria_experimental_4);
        waterproofSheet
            .cell('F8')
            .value(waterproofFunction.materialBlottingPressure_calculated);
        waterproofSheet.cell('F9').value(waterproofFunction.waterproof_calculated);
        waterproofSheet
            .cell('F10')
            .value(waterproofFunction.materialBlottingTime_calculated);
        waterproofSheet
            .cell('F11')
            .value(waterproofFunction.waterproofRealizationCriteria_calculated);
        waterproofSheet
            .cell('F12')
            .value(waterproofFunction.dynamicWaterproofCriteria_calculated);
        waterproofSheet
            .cell('G8')
            .value(waterproofFunction.materialBlottingPressure_base);
        waterproofSheet.cell('G9').value(waterproofFunction.waterproof_base);
        waterproofSheet
            .cell('G10')
            .value(waterproofFunction.materialBlottingTime_base);
        waterproofSheet
            .cell('G11')
            .value(waterproofFunction.waterproofRealizationCriteria_base);
        waterproofSheet
            .cell('G12')
            .value(waterproofFunction.dynamicWaterproofCriteria_base);
        waterproofSheet
            .cell('H8')
            .value(waterproofFunction.materialBlottingPressure_relativeValuation);
        waterproofSheet
            .cell('H9')
            .value(waterproofFunction.waterproof_relativeValuation);
        waterproofSheet
            .cell('H10')
            .value(waterproofFunction.materialBlottingTime_relativeValuation);
        waterproofSheet
            .cell('H11')
            .value(waterproofFunction.waterproofRealizationCriteria_relativeValuation);
        waterproofSheet
            .cell('H12')
            .value(waterproofFunction.dynamicWaterproofCriteria_relativeValuation);
        waterproofSheet
            .cell('I8')
            .value(waterproofFunction.materialBlottingPressure_weight);
        waterproofSheet.cell('I9').value(waterproofFunction.waterproof_weight);
        waterproofSheet
            .cell('I10')
            .value(waterproofFunction.materialBlottingTime_weight);
        waterproofSheet
            .cell('I11')
            .value(waterproofFunction.waterproofRealizationCriteria_weight);
        waterproofSheet
            .cell('I12')
            .value(waterproofFunction.dynamicWaterproofCriteria_weight);
        waterproofSheet.cell('I19').value(waterproofFunction.avgWeightedEstimate);
    }
    fillHomeostasisSheet(homeostasisSheet, material) {
        const homeostasisFunction = material.homeostasisFunction;
        homeostasisSheet.cell('A2').value(material.name);
        homeostasisSheet.cell('A3').value(material.description);
        homeostasisSheet.cell('A5').value(homeostasisFunction.equipment);
        homeostasisSheet.cell('A7').value(homeostasisFunction.sampleSurfaceArea);
        homeostasisSheet.cell('A34').value(material.user.fio);
        homeostasisSheet.cell('B10').value(homeostasisFunction.m1s);
        homeostasisSheet.cell('B11').value(homeostasisFunction.m1min);
        homeostasisSheet.cell('B12').value(homeostasisFunction.tos);
        homeostasisSheet.cell('B14').value(homeostasisFunction.minPressureDiff);
        homeostasisSheet.cell('B15').value(homeostasisFunction.maxPressureDiff);
        homeostasisSheet
            .cell('B16')
            .value(homeostasisFunction.estimatedPressureDiff);
        homeostasisSheet.cell('B17').value(homeostasisFunction.avgRangePressureVal);
        homeostasisSheet
            .cell('B18')
            .value(homeostasisFunction.comfTempInsideClothes);
        homeostasisSheet
            .cell('B19')
            .value(homeostasisFunction.comfHumidityInsideClothes);
        homeostasisSheet.cell('B20').value(homeostasisFunction.minOutdoorTemp);
        homeostasisSheet.cell('B21').value(homeostasisFunction.minOutdoorHumidity);
        homeostasisSheet.cell('B22').value(homeostasisFunction.maxOutdoorTemp);
        homeostasisSheet.cell('B23').value(homeostasisFunction.maxOutdoorHumidity);
        homeostasisSheet.cell('B24').value(homeostasisFunction.avgOutdoorAirSpeed);
        homeostasisSheet.cell('B26').value(homeostasisFunction.comment);
        homeostasisSheet.cell('C10').value(homeostasisFunction.m2s);
        homeostasisSheet.cell('C11').value(homeostasisFunction.m2min);
        homeostasisSheet.cell('C12').value(homeostasisFunction.s);
        homeostasisSheet.cell('D10').value(homeostasisFunction.s0_1);
        homeostasisSheet.cell('D11').value(homeostasisFunction.m1max);
        homeostasisSheet.cell('D12').value(homeostasisFunction.m);
        homeostasisSheet.cell('E10').value(homeostasisFunction.t_1);
        homeostasisSheet.cell('E11').value(homeostasisFunction.m2max);
        homeostasisSheet.cell('F11').value(homeostasisFunction.s0_2);
        homeostasisSheet.cell('G11').value(homeostasisFunction.t_2);
        homeostasisSheet
            .cell('H10')
            .value(homeostasisFunction.waterPermeability_calculated);
        homeostasisSheet
            .cell('H11')
            .value(homeostasisFunction.waterPermeabilityDynamicCriteria_calculated);
        homeostasisSheet
            .cell('H12')
            .value(homeostasisFunction.totalThermalResistance_calculated);
        homeostasisSheet
            .cell('I10')
            .value(homeostasisFunction.waterPermeability_base);
        homeostasisSheet
            .cell('I11')
            .value(homeostasisFunction.waterPermeabilityDynamicCriteria_base);
        homeostasisSheet
            .cell('I12')
            .value(homeostasisFunction.totalThermalResistance_base);
        homeostasisSheet
            .cell('J10')
            .value(homeostasisFunction.waterPermeability_relativeValuation);
        homeostasisSheet
            .cell('J11')
            .value(homeostasisFunction.waterPermeabilityDynamicCriteria_relativeValuation);
        homeostasisSheet
            .cell('J12')
            .value(homeostasisFunction.totalThermalResistance_relativeValuation);
        homeostasisSheet
            .cell('K10')
            .value(homeostasisFunction.waterPermeability_weight);
        homeostasisSheet
            .cell('K11')
            .value(homeostasisFunction.waterPermeabilityDynamicCriteria_weight);
        homeostasisSheet
            .cell('K12')
            .value(homeostasisFunction.totalThermalResistance_weight);
        homeostasisSheet.cell('K27').value(homeostasisFunction.avgWeightedEstimate);
    }
    fillReliabilitySheet(reliabilitySheet, material) {
        const waterproofFunction = material.waterproofFunction;
        const reliabilityFunction = material.reliabilityFunction;
        const homeostasisFunction = material.homeostasisFunction;
        reliabilitySheet.cell('A2').value(material.name);
        reliabilitySheet.cell('A3').value(material.description);
        reliabilitySheet.cell('A5').value(reliabilityFunction.equipment);
        reliabilitySheet.cell('A32').value(material.user.fio);
        reliabilitySheet
            .cell('B8')
            .value(reliabilityFunction.relativeBlottingPressureAfterLoad_experimental_1);
        reliabilitySheet
            .cell('B9')
            .value(reliabilityFunction.relativeWaterResistanceAfterLoad_experimental_1);
        reliabilitySheet
            .cell('B10')
            .value(reliabilityFunction.relativeBlottingTimeAfterLoad_experimental_1);
        reliabilitySheet
            .cell('B11')
            .value(reliabilityFunction.waterproofRealizationCriteriaAfterLoad_experimental_1);
        reliabilitySheet
            .cell('B12')
            .value(reliabilityFunction.waterproofFunctionResource_experimental_1);
        reliabilitySheet
            .cell('B14')
            .value(reliabilityFunction.maxWaterResistanceLvl);
        reliabilitySheet
            .cell('B15')
            .value(waterproofFunction.hydrostaticPressureIncreaseSpeed);
        reliabilitySheet.cell('B16').value(waterproofFunction.hydrostaticPressure);
        reliabilitySheet.cell('B17').value(waterproofFunction.waterproofTime);
        reliabilitySheet.cell('B18').value(reliabilityFunction.impactCyclesCnt);
        const bending = material.condition?.bendingType?.name || '-';
        reliabilitySheet.cell('B20').value(bending);
        const sign = material.condition.isPositive ? '+' : '-';
        reliabilitySheet
            .cell('B21')
            .value(`${sign}${homeostasisFunction.minOutdoorTemp}`);
        reliabilitySheet.cell('B22').value(homeostasisFunction.maxOutdoorHumidity);
        reliabilitySheet.cell('B23').value(reliabilityFunction.comment);
        reliabilitySheet
            .cell('C11')
            .value(reliabilityFunction.waterproofRealizationCriteriaAfterLoad_experimental_2);
        reliabilitySheet
            .cell('C12')
            .value(reliabilityFunction.waterproofFunctionResource_experimental_2);
        const abrasionType = material.condition?.abrasionType?.name || '-';
        reliabilitySheet.cell('D20').value(abrasionType);
        reliabilitySheet
            .cell('F8')
            .value(reliabilityFunction.relativeBlottingPressureAfterLoad_calculated);
        reliabilitySheet
            .cell('F9')
            .value(reliabilityFunction.relativeWaterResistanceAfterLoad_calculated);
        reliabilitySheet
            .cell('F10')
            .value(reliabilityFunction.relativeBlottingTimeAfterLoad_calculated);
        reliabilitySheet
            .cell('F11')
            .value(reliabilityFunction.waterproofRealizationCriteriaAfterLoad_calculated);
        reliabilitySheet
            .cell('F12')
            .value(reliabilityFunction.waterproofFunctionResource_calculated);
        const torsion = `${material.condition?.torsionAngle}°` || '-';
        reliabilitySheet.cell('F20').value(torsion);
        reliabilitySheet
            .cell('G8')
            .value(reliabilityFunction.relativeBlottingPressureAfterLoad_base);
        reliabilitySheet
            .cell('G9')
            .value(reliabilityFunction.relativeWaterResistanceAfterLoad_base);
        reliabilitySheet
            .cell('G10')
            .value(reliabilityFunction.relativeBlottingTimeAfterLoad_base);
        reliabilitySheet
            .cell('G11')
            .value(reliabilityFunction.waterproofRealizationCriteriaAfterLoad_base);
        reliabilitySheet
            .cell('G12')
            .value(reliabilityFunction.waterproofFunctionResource_base);
        const stretchingCompression = `${material.condition?.stretchingCompression}%` || '-';
        reliabilitySheet.cell('G20').value(stretchingCompression);
        reliabilitySheet
            .cell('H8')
            .value(reliabilityFunction.relativeBlottingPressureAfterLoad_relativeValuation);
        reliabilitySheet
            .cell('H9')
            .value(reliabilityFunction.relativeWaterResistanceAfterLoad_relativeValuation);
        reliabilitySheet
            .cell('H10')
            .value(reliabilityFunction.relativeBlottingTimeAfterLoad_relativeValuation);
        reliabilitySheet
            .cell('H11')
            .value(reliabilityFunction.waterproofRealizationCriteriaAfterLoad_relativeValuation);
        reliabilitySheet
            .cell('H12')
            .value(reliabilityFunction.waterproofFunctionResource_relativeValuation);
        const washing = material.condition?.washing;
        let washingStr;
        if (washing) {
            washingStr = `${washing.cyclesCnt} циклов, ${washing.washingType.name}, ${washing.temperature} °C, ${washing.duration} мин, ${washing.press ? 'c отжимом' : 'без отжима'}`;
        }
        else {
            washingStr = '-';
        }
        reliabilitySheet.cell('H20').value(washingStr);
        reliabilitySheet
            .cell('I8')
            .value(reliabilityFunction.relativeBlottingPressureAfterLoad_weight);
        reliabilitySheet
            .cell('I9')
            .value(reliabilityFunction.relativeWaterResistanceAfterLoad_weight);
        reliabilitySheet
            .cell('I10')
            .value(reliabilityFunction.relativeBlottingTimeAfterLoad_weight);
        reliabilitySheet
            .cell('I11')
            .value(reliabilityFunction.waterproofRealizationCriteriaAfterLoad_weight);
        reliabilitySheet
            .cell('I12')
            .value(reliabilityFunction.waterproofFunctionResource_weight);
        reliabilitySheet.cell('I24').value(reliabilityFunction.avgWeightedEstimate);
    }
    fillEstimationSheet(estimationSheet, material) {
        const estimation = material.estimation;
        estimationSheet.cell('B1').value(estimation.waterproofFunction_weight);
        estimationSheet.cell('B2').value(estimation.homeostasisFunction_weight);
        estimationSheet.cell('B3').value(estimation.reliabilityFunction_weight);
        estimationSheet.cell('B8').value(estimation.avgWeightedArithmetic);
        estimationSheet.cell('B10').value(estimation.avgWeightedGeometric);
    }
};
exports.ExelService = ExelService;
exports.ExelService = ExelService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(file_config_1.fileConfig.KEY)),
    __metadata("design:paramtypes", [void 0])
], ExelService);
//# sourceMappingURL=exel.service.js.map