import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { Request } from 'express';
import { CreateMaterialDto } from 'src/realizations/material/dto/create-material.dto';

export const MultipartMaterialData = createParamDecorator(
  async (data, ctx: ExecutionContext) => {
    const req: Request = ctx.switchToHttp().getRequest();

    const createMaterialDto = {
      images: req.body.images,
      material: JSON.parse(req.body.material),
      condition: JSON.parse(req.body.condition),
      waterproofFunction: JSON.parse(req.body.waterproofFunction),
      homeostasisFunction: JSON.parse(req.body.homeostasisFunction),
      reliabilityFunction: JSON.parse(req.body.reliabilityFunction),
    };

    const validatedCreateMaterialDto = plainToInstance(
      CreateMaterialDto,
      createMaterialDto,
      {
        enableImplicitConversion: false,
      },
    );

    const errors = await validate(validatedCreateMaterialDto, {
      skipMissingProperties: true,
    });

    if (errors.length) {
      throw new Error(errors.toString());
    }

    return validatedCreateMaterialDto;
  },
);
