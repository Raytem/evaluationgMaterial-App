import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { fileConfig } from 'src/config/config-functions/file.config';
import { MaterialEntity } from 'src/realizations/material/entities/material.entity';
import { UserEntity } from 'src/realizations/user/entities/user.entity';
import xlsxPopulate from 'xlsx-populate';
import XlsxTypes from 'xlsx-populate-types';
import path from 'path';

@Injectable()
export class ExelService {
  constructor(
    @Inject(fileConfig.KEY)
    private fileCfg: ConfigType<typeof fileConfig>,
  ) {}

  async generateReport(material: MaterialEntity): Promise<Buffer> {
    const templatesDir = path.join(
      process.cwd(),
      this.fileCfg.staticDirName,
      this.fileCfg.templatesDirName,
    );

    const workbook: XlsxTypes.Workbook = await xlsxPopulate.fromFileAsync(
      path.join(templatesDir, 'report_template.xlsx'),
    );

    const waterproofSheet: XlsxTypes.Sheet = workbook.sheet('Водозащита');
    const homeostasisSheet: XlsxTypes.Sheet = workbook.sheet('Гомеостаз');
    const reliabilitySheet: XlsxTypes.Sheet = workbook.sheet('Надежность');
    const estimationSheet: XlsxTypes.Sheet = workbook.sheet('Оценка');

    this.fillWaterproofSheet(waterproofSheet, material);
    this.fillHomeostasisSheet(homeostasisSheet, material);
    this.fillReliabilitySheet(reliabilitySheet, material);
    this.fillEstimationSheet(estimationSheet, material);

    const buffer = await workbook.outputAsync('buffer');

    return buffer as Buffer;
  }

  private fillWaterproofSheet(
    waterproofSheet: XlsxTypes.Sheet,
    material: MaterialEntity,
  ) {
    const waterproofFunction = material.waterproofFunction;

    //A
    waterproofSheet.cell('A2').value(material.name);
    waterproofSheet.cell('A3').value(material.description);
    waterproofSheet.cell('A5').value(waterproofFunction.equipment);
    waterproofSheet.cell('A27').value(material.user.fio);

    //B
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

    //C
    waterproofSheet
      .cell('C11')
      .value(waterproofFunction.waterproofRealizationCriteria_experimental_2);
    waterproofSheet
      .cell('C12')
      .value(waterproofFunction.dynamicWaterproofCriteria_experimental_2);

    //D
    waterproofSheet
      .cell('D12')
      .value(waterproofFunction.dynamicWaterproofCriteria_experimental_3);

    //E
    waterproofSheet
      .cell('E12')
      .value(waterproofFunction.dynamicWaterproofCriteria_experimental_4);

    //F
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

    //G
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

    //H
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
      .value(
        waterproofFunction.waterproofRealizationCriteria_relativeValuation,
      );
    waterproofSheet
      .cell('H12')
      .value(waterproofFunction.dynamicWaterproofCriteria_relativeValuation);

    //I
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

  private fillHomeostasisSheet(
    homeostasisSheet: XlsxTypes.Sheet,
    material: MaterialEntity,
  ) {
    const homeostasisFunction = material.homeostasisFunction;

    //A
    homeostasisSheet.cell('A2').value(material.name);
    homeostasisSheet.cell('A3').value(material.description);
    homeostasisSheet.cell('A5').value(homeostasisFunction.equipment);
    homeostasisSheet.cell('A7').value(homeostasisFunction.sampleSurfaceArea);
    homeostasisSheet.cell('A34').value(material.user.fio);

    //B
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

    //C
    homeostasisSheet.cell('C10').value(homeostasisFunction.m2s);
    homeostasisSheet.cell('C11').value(homeostasisFunction.m2min);
    homeostasisSheet.cell('C12').value(homeostasisFunction.s);

    //D
    homeostasisSheet.cell('D10').value(homeostasisFunction.s0_1);
    homeostasisSheet.cell('D11').value(homeostasisFunction.m1max);
    homeostasisSheet.cell('D12').value(homeostasisFunction.m);

    //E
    homeostasisSheet.cell('E10').value(homeostasisFunction.t_1);
    homeostasisSheet.cell('E11').value(homeostasisFunction.m2max);

    //F
    homeostasisSheet.cell('F11').value(homeostasisFunction.s0_2);

    //G
    homeostasisSheet.cell('G11').value(homeostasisFunction.t_2);

    //H
    homeostasisSheet
      .cell('H10')
      .value(homeostasisFunction.waterPermeability_calculated);
    homeostasisSheet
      .cell('H11')
      .value(homeostasisFunction.waterPermeabilityDynamicCriteria_calculated);
    homeostasisSheet
      .cell('H12')
      .value(homeostasisFunction.totalThermalResistance_calculated);

    //I
    homeostasisSheet
      .cell('I10')
      .value(homeostasisFunction.waterPermeability_base);
    homeostasisSheet
      .cell('I11')
      .value(homeostasisFunction.waterPermeabilityDynamicCriteria_base);
    homeostasisSheet
      .cell('I12')
      .value(homeostasisFunction.totalThermalResistance_base);

    //J
    homeostasisSheet
      .cell('J10')
      .value(homeostasisFunction.waterPermeability_relativeValuation);
    homeostasisSheet
      .cell('J11')
      .value(
        homeostasisFunction.waterPermeabilityDynamicCriteria_relativeValuation,
      );
    homeostasisSheet
      .cell('J12')
      .value(homeostasisFunction.totalThermalResistance_relativeValuation);

    //K
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

  private fillReliabilitySheet(
    reliabilitySheet: XlsxTypes.Sheet,
    material: MaterialEntity,
  ) {}

  private fillEstimationSheet(
    estimationSheet: XlsxTypes.Sheet,
    material: MaterialEntity,
  ) {}
}
