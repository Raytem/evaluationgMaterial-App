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
    return {
      waterproofFunction: this.calcWaterproofFunction(
        createMaterialDto,
        material,
      ),
      homeostasisFunction: this.calcHomeostasisFunction(
        createMaterialDto,
        material,
      ),
      reliabilityFunction: this.calcReliabilityFunction(
        createMaterialDto,
        material,
      ),
      estimation: this.calcEstimation(createMaterialDto, material),
    };
  }

  private calcWaterproofFunction(
    cmd: CreateMaterialDto,
    material: MaterialEntity,
  ): Omit<WaterproofFunctionEntity, 'id'> {
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
      +(wpf.waterproof_calculated / wpf.waterproof_base) || 0;

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

    const calculatedWaterproofFunction = {
      ...wpf,
      waterproofRealizationCriteria_calculated:
        +waterproofRealizationCriteria_calculated.toFixed(
          this.calcCfg.cntOfNumbersAfterPoint,
        ),
      dynamicWaterproofCriteria_calculated:
        +dynamicWaterproofCriteria_calculated.toFixed(
          this.calcCfg.cntOfNumbersAfterPoint,
        ),
      materialBlottingPressure_relativeValuation:
        +materialBlottingPressure_relativeValuation.toFixed(
          this.calcCfg.cntOfNumbersAfterPoint,
        ),
      waterproof_relativeValuation: +waterproof_relativeValuation.toFixed(
        this.calcCfg.cntOfNumbersAfterPoint,
      ),
      materialBlottingTime_relativeValuation:
        +materialBlottingTime_relativeValuation.toFixed(
          this.calcCfg.cntOfNumbersAfterPoint,
        ),
      waterproofRealizationCriteria_relativeValuation:
        +waterproofRealizationCriteria_relativeValuation.toFixed(
          this.calcCfg.cntOfNumbersAfterPoint,
        ),
      dynamicWaterproofCriteria_relativeValuation:
        +dynamicWaterproofCriteria_relativeValuation.toFixed(
          this.calcCfg.cntOfNumbersAfterPoint,
        ),
      avgWeightedEstimate: +avgWeightedEstimate.toFixed(
        this.calcCfg.cntOfNumbersAfterPoint,
      ),
      material,
    };

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
  ): Omit<HomeostasisFunctionEntity, 'id'> {
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
      (hf.sampleSurfaceArea * hf.tos) / (hf.s * hf.m);

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

    const calculatedHomeostasisFunction = {
      ...hf,
      minPressureDiff: +minPressureDiff.toFixed(
        this.calcCfg.cntOfNumbersAfterPoint,
      ),
      maxPressureDiff: +maxPressureDiff.toFixed(
        this.calcCfg.cntOfNumbersAfterPoint,
      ),
      estimatedPressureDiff: +estimatedPressureDiff.toFixed(
        this.calcCfg.cntOfNumbersAfterPoint,
      ),
      avgRangePressureVal: +avgRangePressureVal.toFixed(
        this.calcCfg.cntOfNumbersAfterPoint,
      ),
      waterPermeability_calculated: +waterPermeability_calculated.toFixed(
        this.calcCfg.cntOfNumbersAfterPoint,
      ),
      waterPermeabilityDynamicCriteria_calculated:
        +waterPermeabilityDynamicCriteria_calculated.toFixed(
          this.calcCfg.cntOfNumbersAfterPoint,
        ),
      totalThermalResistance_calculated:
        +totalThermalResistance_calculated.toFixed(
          this.calcCfg.cntOfNumbersAfterPoint,
        ),
      waterPermeability_relativeValuation:
        +waterPermeability_relativeValuation.toFixed(
          this.calcCfg.cntOfNumbersAfterPoint,
        ),
      waterPermeabilityDynamicCriteria_relativeValuation:
        +waterPermeabilityDynamicCriteria_relativeValuation.toFixed(
          this.calcCfg.cntOfNumbersAfterPoint,
        ),
      totalThermalResistance_relativeValuation:
        +totalThermalResistance_relativeValuation.toFixed(
          this.calcCfg.cntOfNumbersAfterPoint,
        ),
      avgWeightedEstimate: +avgWeightedEstimate.toFixed(
        this.calcCfg.cntOfNumbersAfterPoint,
      ),
      material,
    };

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
  ): Omit<ReliabilityFunctionEntity, 'id'> {
    return;
  }

  private calcEstimation(
    cmd: CreateMaterialDto,
    material: MaterialEntity,
  ): Omit<EstimationEntity, 'id'> {
    return;
  }
}
