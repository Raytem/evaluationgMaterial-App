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
exports.BendingTypeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bending_type_entity_1 = require("./entities/bending-type.entity");
const pagination_service_1 = require("../../pagination/pagination.service");
const no_such_exception_1 = require("../../exceptions/no-such.exception");
const entities_refer_exception_1 = require("../../exceptions/entities-refer.exception");
let BendingTypeService = class BendingTypeService {
    constructor(paginationService, bendingTypeRepository) {
        this.paginationService = paginationService;
        this.bendingTypeRepository = bendingTypeRepository;
    }
    async create(createBendingTypeDto) {
        let bendingType;
        try {
            bendingType = await this.findOne(null, createBendingTypeDto.name);
        }
        catch { }
        if (bendingType) {
            throw new common_1.BadRequestException('BendingType with this name already exists');
        }
        const newBendingType = await this.bendingTypeRepository.save({
            ...createBendingTypeDto,
        });
        return newBendingType;
    }
    async findAll(paginationDto) {
        const pagination = this.paginationService.paginate(paginationDto);
        return await this.bendingTypeRepository.find({
            ...pagination,
        });
    }
    async findOne(id, name) {
        let bendingType;
        if (name) {
            bendingType = await this.bendingTypeRepository.findOneBy({
                name,
            });
        }
        else {
            bendingType = await this.bendingTypeRepository.findOneBy({
                id,
            });
        }
        if (!bendingType) {
            throw new no_such_exception_1.NoSuchException('bending type');
        }
        return bendingType;
    }
    async update(id, updateBendingTypeDto) {
        await this.findOne(id);
        await this.bendingTypeRepository.update({ id }, {
            ...updateBendingTypeDto,
        });
        return await this.findOne(id);
    }
    async remove(id) {
        const bendingType = await this.findOne(id);
        try {
            await this.bendingTypeRepository.delete({ id });
        }
        catch {
            throw new entities_refer_exception_1.EntitiesReferException('bending type');
        }
        return bendingType;
    }
};
exports.BendingTypeService = BendingTypeService;
exports.BendingTypeService = BendingTypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(bending_type_entity_1.BendingTypeEntity)),
    __metadata("design:paramtypes", [pagination_service_1.PaginationService,
        typeorm_2.Repository])
], BendingTypeService);
//# sourceMappingURL=bending-type.service.js.map