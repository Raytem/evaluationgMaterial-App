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
exports.WashingTypeService = void 0;
const common_1 = require("@nestjs/common");
const pagination_service_1 = require("../../pagination/pagination.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const washing_type_entity_1 = require("./entities/washing-type.entity");
const no_such_exception_1 = require("../../exceptions/no-such.exception");
const entities_refer_exception_1 = require("../../exceptions/entities-refer.exception");
let WashingTypeService = class WashingTypeService {
    constructor(paginationService, washingTypeRepository) {
        this.paginationService = paginationService;
        this.washingTypeRepository = washingTypeRepository;
    }
    async create(createWashingTypeDto) {
        let washingType;
        try {
            washingType = await this.findOne(null, createWashingTypeDto.name);
        }
        catch { }
        if (washingType) {
            throw new common_1.BadRequestException('WashingType with this name already exists');
        }
        const newWashingType = await this.washingTypeRepository.save({
            ...createWashingTypeDto,
        });
        return newWashingType;
    }
    async findAll(paginationDto) {
        const pagination = this.paginationService.paginate(paginationDto);
        return await this.washingTypeRepository.find({
            ...pagination,
        });
    }
    async findOne(id, name) {
        let washingType;
        if (name) {
            washingType = await this.washingTypeRepository.findOneBy({
                name,
            });
        }
        else {
            washingType = await this.washingTypeRepository.findOneBy({
                id,
            });
        }
        if (!washingType) {
            throw new no_such_exception_1.NoSuchException('washing type');
        }
        return washingType;
    }
    async update(id, updateWashingTypeDto) {
        await this.findOne(id);
        await this.washingTypeRepository.update({ id }, {
            ...updateWashingTypeDto,
        });
        return await this.findOne(id);
    }
    async remove(id) {
        const washingType = await this.findOne(id);
        try {
            await this.washingTypeRepository.delete({ id });
        }
        catch {
            throw new entities_refer_exception_1.EntitiesReferException('washing type');
        }
        return washingType;
    }
};
exports.WashingTypeService = WashingTypeService;
exports.WashingTypeService = WashingTypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(washing_type_entity_1.WashingTypeEntity)),
    __metadata("design:paramtypes", [pagination_service_1.PaginationService,
        typeorm_2.Repository])
], WashingTypeService);
//# sourceMappingURL=washing-type.service.js.map