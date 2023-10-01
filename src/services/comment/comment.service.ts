import { Injectable } from '@nestjs/common';
import { FunctionalityLevel } from 'src/enums/functionality-level';
import { EstimationEntity } from 'src/realizations/estimation/entities/estimation.entity';
import { HomeostasisFunctionEntity } from 'src/realizations/homeostasis-function/entities/homeostasis-function.entity';
import { ReliabilityFunctionEntity } from 'src/realizations/reliability-function/entities/reliability-function.entity';
import { WaterproofFunctionEntity } from 'src/realizations/waterproof-function/entities/waterproof-function.entity';

@Injectable()
export class CommentService {
  getWaterproofFunctionComment(
    calculatedWaterproofFunction: Omit<
      WaterproofFunctionEntity,
      'id' | 'comment'
    >,
  ): string {
    const cwf = calculatedWaterproofFunction;

    const materialBlottingPressure_lvl = FunctionalityLevel.HIGH;

    const materialBlottingTime_lvl = FunctionalityLevel.HIGH;

    const waterproofRealizationCriteria_lvl = FunctionalityLevel.HIGH;

    const dynamicWaterproofCriteria_lvl = FunctionalityLevel.HIGH;

    const waterproofFunctionality_lvl = FunctionalityLevel.HIGH;

    //-----

    const materialBlottingPressure_comment = `- по показателю Рп ${materialBlottingPressure_lvl} уровень водозащиты при гидростатическом давлении ${cwf.hydrostaticPressure} кПа и скорости ${cwf.hydrostaticPressureIncreaseSpeed} кПа/мин\n`;

    const materialBlottingTime_comment = `- ${materialBlottingTime_lvl}\n`;

    const waterproofRealizationCriteria_comment = `- по показателю Кв ${waterproofRealizationCriteria_lvl} уровень водозащиты при гидростатическом давлении ${cwf.hydrostaticPressure} кПа и времени защиты от воды ${cwf.waterproofTime} минут\n`;

    const dynamicWaterproofCriteria_comment = `- по показателю Квд ${dynamicWaterproofCriteria_lvl} уровень водозащиты при гидростатическом давлении ${cwf.hydrostaticPressure} кПа и времени защиты от воды ${cwf.waterproofTime} минут\n`;

    const waterproofFunctionality_comment = `- ${waterproofFunctionality_lvl} уровень функциональности по водозащите`;

    const resComment =
      materialBlottingPressure_comment +
      materialBlottingTime_comment +
      waterproofRealizationCriteria_comment +
      dynamicWaterproofCriteria_comment +
      waterproofFunctionality_comment;

    return resComment;
  }

  getHomeostasisFunctionComment(
    calculatedHomeostasisFunction: Omit<
      HomeostasisFunctionEntity,
      'id' | 'comment'
    >,
  ): string {
    const chf = calculatedHomeostasisFunction;

    const waterPermeability_lvl = FunctionalityLevel.HIGH;

    const totalThermalResistance_lvl = FunctionalityLevel.HIGH;

    const homeostasisFunctionality_lvl = FunctionalityLevel.HIGH;

    //----

    const waterPermeability_comment = `- ${waterPermeability_lvl} уровень паропроницаемости в середине диапазона носки\n`;

    const totalThermalResistance_comment = `- ${totalThermalResistance_lvl} уровень суммарного теплового сопротивления при минимальной температуре наружной среды 0 °С и средней физической активности\n`;

    const homeostasisFunctionality_comment = `- ${homeostasisFunctionality_lvl} уровень функциональности по обеспечению гомеостаза организма человека`;

    const resComment =
      waterPermeability_comment +
      totalThermalResistance_comment +
      homeostasisFunctionality_comment;

    return resComment;
  }

  getReliabilityFunctionComment(
    calculatedReliabilityFunction: Omit<
      ReliabilityFunctionEntity,
      'id' | 'comment'
    >,
  ): string {
    const crf = calculatedReliabilityFunction;

    const resComment = '';

    return resComment;
  }

  getEstimationComment(
    calculatedEstimation: Omit<EstimationEntity, 'id' | 'comment'>,
  ): string {
    const ce = calculatedEstimation;

    const resComment = '';

    return resComment;
  }
}
