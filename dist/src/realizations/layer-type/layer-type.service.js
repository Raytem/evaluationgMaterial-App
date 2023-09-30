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
exports.LayerTypeService = void 0;
const common_1 = require("@nestjs/common");
const no_such_exception_1 = require("../../exceptions/no-such.exception");
const pagination_service_1 = require("../../services/pagination/pagination.service");
const typeorm_1 = require("@nestjs/typeorm");
const layer_type_entity_1 = require("./entities/layer-type.entity");
const typeorm_2 = require("typeorm");
const entities_refer_exception_1 = require("../../exceptions/entities-refer.exception");
let LayerTypeService = class LayerTypeService {
    constructor(paginationService, layerTypeRepository) {
        this.paginationService = paginationService;
        this.layerTypeRepository = layerTypeRepository;
    }
    async create(createLayerTypeDto) {
        let layerType;
        try {
            layerType = await this.findOne(null, createLayerTypeDto.name);
        }
        catch { }
        if (layerType) {
            throw new common_1.BadRequestException('LayerType with this name already exists');
        }
        const newLayerType = await this.layerTypeRepository.save({
            ...createLayerTypeDto,
        });
        return newLayerType;
    }
    async findAll(paginationDto) {
        const pagination = this.paginationService.paginate(paginationDto);
        return await this.layerTypeRepository.find({
            ...pagination,
        });
    }
    async findByIds(layerTypeIds) {
        return await this.layerTypeRepository.find({
            where: {
                id: (0, typeorm_2.In)(layerTypeIds),
            },
        });
    }
    async findOne(id, name) {
        let layerType;
        if (name) {
            layerType = await this.layerTypeRepository.findOneBy({
                name,
            });
        }
        else {
            layerType = await this.layerTypeRepository.findOneBy({
                id,
            });
        }
        if (!layerType) {
            throw new no_such_exception_1.NoSuchException('layer type');
        }
        return layerType;
    }
    async update(id, updateLayerTypeDto) {
        await this.findOne(id);
        await this.layerTypeRepository.update({ id }, {
            ...updateLayerTypeDto,
        });
        return await this.findOne(id);
    }
    async remove(id) {
        const layerType = await this.findOne(id);
        try {
            await this.layerTypeRepository.delete({ id });
        }
        catch {
            throw new entities_refer_exception_1.EntitiesReferException('layer type');
        }
        return layerType;
    }
};
exports.LayerTypeService = LayerTypeService;
exports.LayerTypeService = LayerTypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(layer_type_entity_1.LayerTypeEntity)),
    __metadata("design:paramtypes", [pagination_service_1.PaginationService,
        typeorm_2.Repository])
], LayerTypeService);
//# sourceMappingURL=layer-type.service.js.map