"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultipartMaterialData = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const create_material_dto_1 = require("../realizations/material/dto/create-material.dto");
exports.MultipartMaterialData = (0, common_1.createParamDecorator)(async (data, ctx) => {
    const req = ctx.switchToHttp().getRequest();
    const createMaterialDto = {
        images: req.body.images,
        material: JSON.parse(req.body.material),
        condition: JSON.parse(req.body.condition),
        waterproofFunction: JSON.parse(req.body.waterproofFunction),
        homeostasisFunction: JSON.parse(req.body.homeostasisFunction),
        reliabilityFunction: JSON.parse(req.body.reliabilityFunction),
        estimation: JSON.parse(req.body.estimation),
    };
    console.log('----CreateMaterialBody:');
    console.log({
        ...createMaterialDto,
        images: createMaterialDto.images?.length,
    });
    console.log('\n');
    const validatedCreateMaterialDto = (0, class_transformer_1.plainToInstance)(create_material_dto_1.CreateMaterialDto, createMaterialDto, {
        enableImplicitConversion: false,
    });
    const errors = await (0, class_validator_1.validate)(validatedCreateMaterialDto, {
        skipMissingProperties: true,
    });
    if (errors.length) {
        throw new Error(errors.toString());
    }
    return validatedCreateMaterialDto;
});
//# sourceMappingURL=multipart-material-data.js.map