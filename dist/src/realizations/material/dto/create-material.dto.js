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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMaterialDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const create_condition_dto_1 = require("../../condition/dto/create-condition.dto");
const calculate_waterproof_function_dto_1 = require("../../waterproof-function/dto/calculate-waterproof-function.dto");
const calculate_reliability_function_dto_1 = require("../../reliability-function/dto/calculate-reliability-function.dto");
const class_transformer_1 = require("class-transformer");
const calculate_homeostasis_function_dto_1 = require("../../homeostasis-function/dto/calculate-homeostasis-function.dto");
const material_info_dto_1 = require("./material-info.dto");
const calculate_estimation_dto_1 = require("../../estimation/dto/calculate-estimation.dto");
class CreateMaterialDto {
}
exports.CreateMaterialDto = CreateMaterialDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        format: 'binary',
        isArray: true,
        required: false,
        maxItems: 5,
        description: `Max count of files: 5,
    File type: image/*,
    Max file size: 5000000 bytes`,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMaterialDto.prototype, "images", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => material_info_dto_1.MaterialInfoDto }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => material_info_dto_1.MaterialInfoDto),
    __metadata("design:type", material_info_dto_1.MaterialInfoDto)
], CreateMaterialDto.prototype, "material", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => create_condition_dto_1.CreateConditionDto }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => create_condition_dto_1.CreateConditionDto),
    __metadata("design:type", create_condition_dto_1.CreateConditionDto)
], CreateMaterialDto.prototype, "condition", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => calculate_waterproof_function_dto_1.CalculateWaterproofFunctionDto }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => calculate_waterproof_function_dto_1.CalculateWaterproofFunctionDto),
    __metadata("design:type", calculate_waterproof_function_dto_1.CalculateWaterproofFunctionDto)
], CreateMaterialDto.prototype, "waterproofFunction", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => calculate_homeostasis_function_dto_1.CalculateHomeostasisFunctionDto }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => calculate_homeostasis_function_dto_1.CalculateHomeostasisFunctionDto),
    __metadata("design:type", calculate_homeostasis_function_dto_1.CalculateHomeostasisFunctionDto)
], CreateMaterialDto.prototype, "homeostasisFunction", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => calculate_reliability_function_dto_1.CalculateReliabilityFunctionDto }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => calculate_reliability_function_dto_1.CalculateReliabilityFunctionDto),
    __metadata("design:type", calculate_reliability_function_dto_1.CalculateReliabilityFunctionDto)
], CreateMaterialDto.prototype, "reliabilityFunction", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => calculate_estimation_dto_1.CalculateEstimationDto }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => calculate_estimation_dto_1.CalculateEstimationDto),
    __metadata("design:type", calculate_estimation_dto_1.CalculateEstimationDto)
], CreateMaterialDto.prototype, "estimation", void 0);
//# sourceMappingURL=create-material.dto.js.map