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
exports.GlueTypeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const glue_type_entity_1 = require("./entities/glue-type.entity");
const no_such_exception_1 = require("../../exceptions/no-such.exception");
const typeorm_2 = require("typeorm");
const pagination_service_1 = require("../../pagination/pagination.service");
const entities_refer_exception_1 = require("../../exceptions/entities-refer.exception");
let GlueTypeService = class GlueTypeService {
    constructor(paginationService, glueTypeRepository) {
        this.paginationService = paginationService;
        this.glueTypeRepository = glueTypeRepository;
    }
    async create(createGlueTypeDto) {
        let glueType;
        try {
            glueType = await this.findOne(null, createGlueTypeDto.name);
        }
        catch { }
        if (glueType) {
            throw new common_1.BadRequestException('GlueType with this name already exists');
        }
        const newGlueType = await this.glueTypeRepository.save({
            ...createGlueTypeDto,
        });
        return newGlueType;
    }
    async findAll(paginationDto) {
        const pagination = this.paginationService.paginate(paginationDto);
        return await this.glueTypeRepository.find({
            ...pagination,
        });
    }
    async findOne(id, name) {
        let glueType;
        if (name) {
            glueType = await this.glueTypeRepository.findOneBy({
                name,
            });
        }
        else {
            glueType = await this.glueTypeRepository.findOneBy({
                id,
            });
        }
        if (!glueType) {
            throw new no_such_exception_1.NoSuchException('glue type');
        }
        return glueType;
    }
    async update(id, updateGlueTypeDto) {
        await this.findOne(id);
        await this.glueTypeRepository.update({ id }, {
            ...updateGlueTypeDto,
        });
        return await this.findOne(id);
    }
    async remove(id) {
        const glueType = await this.findOne(id);
        try {
            await this.glueTypeRepository.delete({ id });
        }
        catch {
            throw new entities_refer_exception_1.EntitiesReferException('glue type');
        }
        return glueType;
    }
};
exports.GlueTypeService = GlueTypeService;
exports.GlueTypeService = GlueTypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(glue_type_entity_1.GlueTypeEntity)),
    __metadata("design:paramtypes", [pagination_service_1.PaginationService,
        typeorm_2.Repository])
], GlueTypeService);
//# sourceMappingURL=glue-type.service.js.map