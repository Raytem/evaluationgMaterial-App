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
exports.WashingService = void 0;
const common_1 = require("@nestjs/common");
const washing_type_service_1 = require("../washing-type/washing-type.service");
const typeorm_1 = require("@nestjs/typeorm");
const washing_entity_1 = require("./entities/washing.entity");
const typeorm_2 = require("typeorm");
let WashingService = class WashingService {
    constructor(washingTypeService, washingRepository) {
        this.washingTypeService = washingTypeService;
        this.washingRepository = washingRepository;
    }
    async create(createWashingDto, washingType) {
        if (!washingType) {
            try {
                washingType = await this.washingTypeService.findOne(createWashingDto.washingType_id);
            }
            catch (e) {
                throw e;
            }
        }
        const washing = await this.washingRepository.save({
            ...createWashingDto,
            washingType: washingType,
        });
        return await this.washingRepository.findOneBy({ id: washing.id });
    }
};
exports.WashingService = WashingService;
exports.WashingService = WashingService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(washing_entity_1.WashingEntity)),
    __metadata("design:paramtypes", [washing_type_service_1.WashingTypeService,
        typeorm_2.Repository])
], WashingService);
//# sourceMappingURL=washing.service.js.map