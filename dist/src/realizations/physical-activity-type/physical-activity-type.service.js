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
exports.PhysicalActivityTypeService = void 0;
const common_1 = require("@nestjs/common");
const physical_activity_type_entity_1 = require("./entities/physical-activity-type.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pagination_service_1 = require("../../pagination/pagination.service");
const no_such_exception_1 = require("../../exceptions/no-such.exception");
const entities_refer_exception_1 = require("../../exceptions/entities-refer.exception");
let PhysicalActivityTypeService = class PhysicalActivityTypeService {
    constructor(paginationService, physicalActivityTypeRepository) {
        this.paginationService = paginationService;
        this.physicalActivityTypeRepository = physicalActivityTypeRepository;
    }
    async create(createPhysicalActivityTypeDto) {
        let physicalActivityType;
        try {
            physicalActivityType = await this.findOne(null, createPhysicalActivityTypeDto.name);
        }
        catch { }
        if (physicalActivityType) {
            throw new common_1.BadRequestException('PhysicalActivityType with this name already exists');
        }
        const newPhysicalActivityType = await this.physicalActivityTypeRepository.save({
            ...createPhysicalActivityTypeDto,
        });
        return newPhysicalActivityType;
    }
    async findAll(paginationDto) {
        const pagination = this.paginationService.paginate(paginationDto);
        return await this.physicalActivityTypeRepository.find({
            ...pagination,
        });
    }
    async findOne(id, name) {
        let physicalActivityType;
        if (name) {
            physicalActivityType =
                await this.physicalActivityTypeRepository.findOneBy({
                    name,
                });
        }
        else {
            physicalActivityType =
                await this.physicalActivityTypeRepository.findOneBy({
                    id,
                });
        }
        if (!physicalActivityType) {
            throw new no_such_exception_1.NoSuchException('physical activity type');
        }
        return physicalActivityType;
    }
    async update(id, updatePhysicalActivityTypeDto) {
        await this.findOne(id);
        await this.physicalActivityTypeRepository.update({ id }, {
            ...updatePhysicalActivityTypeDto,
        });
        return await this.findOne(id);
    }
    async remove(id) {
        const physicalActivityType = await this.findOne(id);
        try {
            await this.physicalActivityTypeRepository.delete({ id });
        }
        catch {
            throw new entities_refer_exception_1.EntitiesReferException('physical activity type');
        }
        return physicalActivityType;
    }
};
exports.PhysicalActivityTypeService = PhysicalActivityTypeService;
exports.PhysicalActivityTypeService = PhysicalActivityTypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(physical_activity_type_entity_1.PhysicalActivityTypeEntity)),
    __metadata("design:paramtypes", [pagination_service_1.PaginationService,
        typeorm_2.Repository])
], PhysicalActivityTypeService);
//# sourceMappingURL=physical-activity-type.service.js.map