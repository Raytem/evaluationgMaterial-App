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
exports.ConditionService = void 0;
const common_1 = require("@nestjs/common");
const condition_entity_1 = require("./entities/condition.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const abrasion_type_service_1 = require("../abrasion-type/abrasion-type.service");
const bending_type_service_1 = require("../bending-type/bending-type.service");
const physical_activity_type_service_1 = require("../physical-activity-type/physical-activity-type.service");
const washing_type_service_1 = require("../washing-type/washing-type.service");
const washing_service_1 = require("../washing/washing.service");
let ConditionService = class ConditionService {
    constructor(conditionRepository, washingService, abrasionTypeService, bendingTypeService, physicalActivityTypeService, washingTypeService) {
        this.conditionRepository = conditionRepository;
        this.washingService = washingService;
        this.abrasionTypeService = abrasionTypeService;
        this.bendingTypeService = bendingTypeService;
        this.physicalActivityTypeService = physicalActivityTypeService;
        this.washingTypeService = washingTypeService;
    }
    async create(createConditionDto) {
        try {
            const abrasionType = await this.abrasionTypeService.findOne(createConditionDto.abrasionType_id);
            const bendingType = await this.bendingTypeService.findOne(createConditionDto.bendingType_id);
            let washing;
            if (createConditionDto.washing) {
                const washingType = await this.washingTypeService.findOne(createConditionDto.washing.washingType_id);
                washing = await this.washingService.create(createConditionDto.washing, washingType);
            }
            const physicalActivityType = await this.physicalActivityTypeService.findOne(createConditionDto.physicalActivityType_id);
            return await this.conditionRepository.save({
                ...createConditionDto,
                washing,
                abrasionType,
                bendingType,
                physicalActivityType,
            });
        }
        catch (e) {
            throw e;
        }
    }
};
exports.ConditionService = ConditionService;
exports.ConditionService = ConditionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(condition_entity_1.ConditionEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        washing_service_1.WashingService,
        abrasion_type_service_1.AbrasionTypeService,
        bending_type_service_1.BendingTypeService,
        physical_activity_type_service_1.PhysicalActivityTypeService,
        washing_type_service_1.WashingTypeService])
], ConditionService);
//# sourceMappingURL=condition.service.js.map