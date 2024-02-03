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
exports.LayerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const layer_entity_1 = require("./entities/layer.entity");
const typeorm_2 = require("@nestjs/typeorm");
const layer_type_service_1 = require("../layer-type/layer-type.service");
let LayerService = class LayerService {
    constructor(layerRepository, layerTypeService) {
        this.layerRepository = layerRepository;
        this.layerTypeService = layerTypeService;
    }
    async create(createLayerDto, layerType) {
        if (!layerType) {
            try {
                layerType = await this.layerTypeService.findOne(createLayerDto.layerType_id);
            }
            catch (e) {
                throw e;
            }
        }
        return await this.layerRepository.save({
            ...createLayerDto,
            layerType,
        });
    }
    async createMany(material, createLayerDtoList, manager) {
        const layerIds = createLayerDtoList.map((createLayerDto) => createLayerDto.layerType_id);
        const layerIndexNums = createLayerDtoList.map((dto) => dto.indexNum);
        const layerIndexNumsSet = Array.from(new Set(layerIndexNums));
        if (layerIndexNumsSet.length !== layerIndexNums.length) {
            throw new common_1.BadRequestException('duplicated indexNum property');
        }
        const layerTypes = await this.layerTypeService.findByIds(layerIds);
        const createLayerList = createLayerDtoList.map((createLayerDto) => {
            const layerType = layerTypes.find((layerType) => layerType.id === createLayerDto.layerType_id);
            return this.layerRepository.create({
                layerType,
                indexNum: createLayerDto.indexNum,
                material,
            });
        });
        if (manager) {
            return await manager
                .withRepository(this.layerRepository)
                .save(createLayerList);
        }
        else {
            return await this.layerRepository.save(createLayerList);
        }
    }
};
exports.LayerService = LayerService;
exports.LayerService = LayerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(layer_entity_1.LayerEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        layer_type_service_1.LayerTypeService])
], LayerService);
//# sourceMappingURL=layer.service.js.map