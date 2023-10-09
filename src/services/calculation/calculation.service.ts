import { Inject, Injectable } from '@nestjs/common';
import { CreateMaterialDto } from 'src/realizations/material/dto/create-material.dto';
import { FunctionalIndicators } from './types/functional-indicators';
import { WaterproofFunctionEntity } from 'src/realizations/waterproof-function/entities/waterproof-function.entity';
import { HomeostasisFunctionEntity } from 'src/realizations/homeostasis-function/entities/homeostasis-function.entity';
import { ReliabilityFunctionEntity } from 'src/realizations/reliability-function/entities/reliability-function.entity';
import { EstimationEntity } from 'src/realizations/estimation/entities/estimation.entity';
import { ConfigType } from '@nestjs/config';
import { calculationsConfig } from 'src/config/config-functions/calculations.config';
import { CommentService } from '../comment/comment.service';
import { MaterialEntity } from 'src/realizations/material/entities/material.entity';
import { CreateWaterproofFunctionDto } from 'src/realizations/waterproof-function/dto/create-waterproof-function.dto';
import { CreateHomeostasisFunctionDto } from 'src/realizations/homeostasis-function/dto/create-homeostasis-function.dto';
import { CreateReliabilityFunctionDto } from 'src/realizations/reliability-function/dto/create-reliability-function.dto';
import { CreateEstimationDto } from 'src/realizations/estimation/dto/create-estimation.dto';
import { objNumbersToFixed } from 'src/utils/obj-numbers-to-fixed';

@Injectable()
export class CalculationService {
  constructor(
    @Inject(calculationsConfig.KEY)
    private calcCfg: ConfigType<typeof calculationsConfig>,

    private commentService: CommentService,
  ) {}

  calcAll(
    createMaterialDto: CreateMaterialDto,
    material: MaterialEntity,
  ): FunctionalIndicators {
    const waterproofFunction = this.calcWaterproofFunction(
      createMaterialDto,
      material,
    );

    const homeostasisFunction = this.calcHomeostasisFunction(
      createMaterialDto,
      material,
    );

    const reliabilityFunction = this.calcReliabilityFunction(
      createMaterialDto,
      material,
      waterproofFunction,
    );

    const estimation = this.calcEstimation(
      createMaterialDto,
      material,
      waterproofFunction,
      homeostasisFunction,
      reliabilityFunction,
    );

    return {
      waterproofFunction,
      homeostasisFunction,
      reliabilityFunction,
      estimation,
    };
  }

  private calcWaterproofFunction(
    cmd: CreateMaterialDto,
    material: MaterialEntity,
  ): CreateWaterproofFunctionDto {
    const wpf = cmd.waterproofFunction;

    const waterproofRealizationCriteria_calculated =
      1 -
        (0.25 *
          (wpf.waterproofTime -
            wpf.waterproofRealizationCriteria_experimental_2) +
          wpf.waterproofRealizationCriteria_experimental_1) /
          (0.25 * wpf.waterproofTime) || 0;

    const dynamicWaterproofCriteria_calculated =
      (0.1 *
        (4 * wpf.dynamicWaterproofCriteria_experimental_1 +
          3 * wpf.dynamicWaterproofCriteria_experimental_2 +
          2 * wpf.dynamicWaterproofCriteria_experimental_3 +
          wpf.dynamicWaterproofCriteria_experimental_4)) /
        wpf.waterproofTime || 0;

    const materialBlottingPressure_relativeValuation =
      wpf.materialBlottingPressure_calculated /
        wpf.materialBlottingPressure_base || 0;

    const waterproof_relativeValuation =
      wpf.waterproof_calculated / wpf.waterproof_base || 0;

    const materialBlottingTime_relativeValuation =
      wpf.materialBlottingTime_calculated / wpf.materialBlottingTime_base || 0;

    const waterproofRealizationCriteria_relativeValuation =
      waterproofRealizationCriteria_calculated /
        wpf.waterproofRealizationCriteria_base || 0;

    const dynamicWaterproofCriteria_relativeValuation =
      dynamicWaterproofCriteria_calculated /
        wpf.dynamicWaterproofCriteria_base || 0;

    const avgWeightedEstimate =
      (materialBlottingPressure_relativeValuation **
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

    calculatedWaterproofFunction = objNumbersToFixed(
      calculatedWaterproofFunction,
      this.calcCfg.cntOfNumbersAfterPoint,
    );

    const comment = this.commentService.getWaterproofFunctionComment(
      calculatedWaterproofFunction,
    );

    return {
      ...calculatedWaterproofFunction,
      comment,
    };
  }

  private calcHomeostasisFunction(
    cmd: CreateMaterialDto,
    material: MaterialEntity,
  ): CreateHomeostasisFunctionDto {
    const hf = cmd.homeostasisFunction;

    const D18 =
      1.84 * 10 ** 11 * Math.exp(-5330 / (hf.comfTempInsideClothes + 273.15)) ||
      0;

    const D19 = D18 * (hf.comfHumidityInsideClothes / 100) || 0;

    const D20 =
      1.84 * 10 ** 11 * Math.exp(-5330 / (hf.minOutdoorTemp + 273.15)) || 0;

    const D21 = D20 * (hf.minOutdoorHumidity / 100) || 0;

    const D22 =
      1.84 * 10 ** 11 * Math.exp(-5330 / (hf.maxOutdoorTemp + 273.15)) || 0;

    const D23 = D22 * (hf.maxOutdoorHumidity / 100) || 0;

    //-----------

    const minPressureDiff = Math.min(D19 - D23, D19 - D21) || 0;

    const maxPressureDiff = Math.max(D19 - D23, D19 - D21) || 0;

    const estimatedPressureDiff = maxPressureDiff - minPressureDiff || 0;

    const avgRangePressureVal = (maxPressureDiff + minPressureDiff) / 2 || 0;

    const waterPermeability_calculated =
      24 * ((hf.m1s - hf.m2s) / (hf.s0_1 * hf.t_1)) || 0;

    const waterPermeabilityDynamicCriteria_calculated =
      (24 * (hf.m1max - hf.m2max - (hf.m1min - hf.m2min))) /
        (hf.s0_2 * hf.t_2 * estimatedPressureDiff) || 0;

    const totalThermalResistance_calculated =
      (hf.sampleSurfaceArea * hf.tos) / (hf.s * hf.m) || 0;

    const waterPermeability_relativeValuation =
      waterPermeability_calculated / hf.waterPermeability_base || 0;

    const waterPermeabilityDynamicCriteria_relativeValuation =
      waterPermeabilityDynamicCriteria_calculated /
        hf.waterPermeabilityDynamicCriteria_base || 0;

    const totalThermalResistance_relativeValuation =
      totalThermalResistance_calculated / hf.totalThermalResistance_base || 0;

    const avgWeightedEstimate =
      (waterPermeability_relativeValuation ** hf.waterPermeability_weight *
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

    calculatedHomeostasisFunction = objNumbersToFixed(
      calculatedHomeostasisFunction,
      this.calcCfg.cntOfNumbersAfterPoint,
    );

    const comment = this.commentService.getHomeostasisFunctionComment(
      calculatedHomeostasisFunction,
    );

    return {
      ...calculatedHomeostasisFunction,
      comment,
    };
  }

  private calcReliabilityFunction(
    cmd: CreateMaterialDto,
    material: MaterialEntity,
    createWaterproofFunction: CreateWaterproofFunctionDto,
  ): CreateReliabilityFunctionDto {
    const rf = cmd.reliabilityFunction;

    const relativeBlottingPressureAfterLoad_relativeValuation =
      rf.relativeBlottingPressureAfterLoad_calculated /
        rf.relativeBlottingPressureAfterLoad_base || 0;

    const relativeWaterResistanceAfterLoad_relativeValuation =
      rf.relativeWaterResistanceAfterLoad_calculated /
        rf.relativeWaterResistanceAfterLoad_base || 0;

    const relativeBlottingTimeAfterLoad_relativeValuation =
      rf.relativeBlottingTimeAfterLoad_calculated /
        rf.relativeBlottingTimeAfterLoad_base || 0;

    const waterproofRealizationCriteriaAfterLoad_calculated =
      1 -
        (0.25 *
          (createWaterproofFunction.waterproofTime -
            rf.waterproofRealizationCriteriaAfterLoad_experimental_2) +
          rf.waterproofRealizationCriteriaAfterLoad_experimental_1) /
          (0.25 * createWaterproofFunction.waterproofTime) || 0;

    const waterproofRealizationCriteriaAfterLoad_base =
      createWaterproofFunction.waterproofRealizationCriteria_calculated || 0;

    const waterproofRealizationCriteriaAfterLoad_relativeValuation =
      waterproofRealizationCriteriaAfterLoad_calculated /
        waterproofRealizationCriteriaAfterLoad_base || 0;

    const waterproofFunctionResource_experimental_1 =
      rf.relativeWaterResistanceAfterLoad_experimental_1 || 0;

    const waterproofFunctionResource_experimental_2 =
      createWaterproofFunction.waterproof_experimental_1;

    const waterproofFunctionResource_calculated =
      rf.maxWaterResistanceLvl /
        ((waterproofFunctionResource_experimental_2 -
          waterproofFunctionResource_experimental_1) /
          rf.impactCyclesCnt) || 0;

    const waterproofFunctionResource_relativeValuation =
      waterproofFunctionResource_calculated /
        rf.waterproofFunctionResource_base || 0;

    const avgWeightedEstimate =
      (relativeBlottingPressureAfterLoad_relativeValuation **
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

    calculatedReliabilityFunction = objNumbersToFixed(
      calculatedReliabilityFunction,
      this.calcCfg.cntOfNumbersAfterPoint,
    );

    const comment = this.commentService.getReliabilityFunctionComment(
      calculatedReliabilityFunction,
    );

    return {
      ...calculatedReliabilityFunction,
      comment,
    };
  }

  private calcEstimation(
    cmd: CreateMaterialDto,
    material: MaterialEntity,
    createWaterproofFunction: CreateWaterproofFunctionDto,
    createHomeostasisFunction: CreateHomeostasisFunctionDto,
    createReliabilityFunction: CreateReliabilityFunctionDto,
  ): CreateEstimationDto {
    const est = cmd.estimation;

    const avgWeightedArithmetic =
      est.waterproofFunction_weight *
        createWaterproofFunction.avgWeightedEstimate +
        est.homeostasisFunction_weight *
          createHomeostasisFunction.avgWeightedEstimate +
        est.reliabilityFunction_weight *
          createReliabilityFunction.avgWeightedEstimate || 0;

    const avgWeightedGeometric =
      (createWaterproofFunction.avgWeightedEstimate **
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

    calculatedEstimation = objNumbersToFixed(
      calculatedEstimation,
      this.calcCfg.cntOfNumbersAfterPoint,
    );

    return calculatedEstimation;
  }
}
