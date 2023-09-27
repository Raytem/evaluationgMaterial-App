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
exports.AbrasionTypeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const abrasion_type_entity_1 = require("./entities/abrasion-type.entity");
const pagination_service_1 = require("../../pagination/pagination.service");
const typeorm_2 = require("typeorm");
const no_such_exception_1 = require("../../exceptions/no-such.exception");
let AbrasionTypeService = class AbrasionTypeService {
    constructor(paginationService, abrasionTypeRepository) {
        this.paginationService = paginationService;
        this.abrasionTypeRepository = abrasionTypeRepository;
    }
    async create(createAbrasionTypeDto) {
        let abrasionType;
        try {
            abrasionType = await this.findOne(null, createAbrasionTypeDto.name);
        }
        catch { }
        if (abrasionType) {
            throw new common_1.BadRequestException('AbrasionType with this name already exists');
        }
        const newAbrasionType = await this.abrasionTypeRepository.save({
            ...createAbrasionTypeDto,
        });
        return newAbrasionType;
    }
    async findAll(paginationDto) {
        const pagination = this.paginationService.paginate(paginationDto);
        return await this.abrasionTypeRepository.find({
            ...pagination,
        });
    }
    async findOne(id, name) {
        let abrasionType;
        if (name) {
            abrasionType = await this.abrasionTypeRepository.findOneBy({
                name,
            });
        }
        else {
            abrasionType = await this.abrasionTypeRepository.findOneBy({
                id,
            });
        }
        if (!abrasionType) {
            throw new no_such_exception_1.NoSuchException('abrasion type');
        }
        return abrasionType;
    }
    async update(id, updateAbrasionTypeDto) {
        await this.findOne(id);
        await this.abrasionTypeRepository.update({ id }, {
            ...updateAbrasionTypeDto,
        });
        return await this.findOne(id);
    }
    async remove(id) {
        const abrasionType = await this.findOne(id);
        await this.abrasionTypeRepository.delete({ id });
        return abrasionType;
    }
};
exports.AbrasionTypeService = AbrasionTypeService;
exports.AbrasionTypeService = AbrasionTypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(abrasion_type_entity_1.AbrasionTypeEntity)),
    __metadata("design:paramtypes", [pagination_service_1.PaginationService,
        typeorm_2.Repository])
], AbrasionTypeService);
//# sourceMappingURL=abrasion-type.service.js.map