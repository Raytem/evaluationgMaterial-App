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
exports.MembraneLayerPolymerTypeService = void 0;
const common_1 = require("@nestjs/common");
const no_such_exception_1 = require("../../exceptions/no-such.exception");
const membrane_layer_polymer_type_entity_1 = require("./entities/membrane-layer-polymer-type.entity");
const pagination_service_1 = require("../../services/pagination/pagination.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entities_refer_exception_1 = require("../../exceptions/entities-refer.exception");
let MembraneLayerPolymerTypeService = class MembraneLayerPolymerTypeService {
    constructor(paginationService, membraneLayerPolymerTypeRepository) {
        this.paginationService = paginationService;
        this.membraneLayerPolymerTypeRepository = membraneLayerPolymerTypeRepository;
    }
    async create(createMembraneLayerPolymerTypeDto) {
        let membraneLayerPolymerType;
        try {
            membraneLayerPolymerType = await this.findOne(null, createMembraneLayerPolymerTypeDto.name);
        }
        catch { }
        if (membraneLayerPolymerType) {
            throw new common_1.BadRequestException('MembraneLayerPolymerType with this name already exists');
        }
        const newMembraneLayerPolymerType = await this.membraneLayerPolymerTypeRepository.save({
            ...createMembraneLayerPolymerTypeDto,
        });
        return newMembraneLayerPolymerType;
    }
    async findAll(paginationDto) {
        const pagination = this.paginationService.paginate(paginationDto);
        return await this.membraneLayerPolymerTypeRepository.find({
            ...pagination,
        });
    }
    async findOne(id, name) {
        let membraneLayerPolymerType;
        if (name) {
            membraneLayerPolymerType =
                await this.membraneLayerPolymerTypeRepository.findOneBy({
                    name,
                });
        }
        else {
            membraneLayerPolymerType =
                await this.membraneLayerPolymerTypeRepository.findOneBy({
                    id,
                });
        }
        if (!membraneLayerPolymerType) {
            throw new no_such_exception_1.NoSuchException('membrane layer polymer type');
        }
        return membraneLayerPolymerType;
    }
    async update(id, updateMembraneLayerPolymerTypeDto) {
        await this.findOne(id);
        await this.membraneLayerPolymerTypeRepository.update({ id }, {
            ...updateMembraneLayerPolymerTypeDto,
        });
        return await this.findOne(id);
    }
    async remove(id) {
        const membraneLayerPolymerType = await this.findOne(id);
        try {
            await this.membraneLayerPolymerTypeRepository.delete({ id });
        }
        catch {
            throw new entities_refer_exception_1.EntitiesReferException('membrane layer polymer type');
        }
        return membraneLayerPolymerType;
    }
};
exports.MembraneLayerPolymerTypeService = MembraneLayerPolymerTypeService;
exports.MembraneLayerPolymerTypeService = MembraneLayerPolymerTypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(membrane_layer_polymer_type_entity_1.MembraneLayerPolymerTypeEntity)),
    __metadata("design:paramtypes", [pagination_service_1.PaginationService,
        typeorm_2.Repository])
], MembraneLayerPolymerTypeService);
//# sourceMappingURL=membrane-layer-polymer-type.service.js.map