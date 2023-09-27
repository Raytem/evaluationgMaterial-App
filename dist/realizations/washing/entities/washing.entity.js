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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WashingEntity = void 0;
const abstract_base_entity_1 = require("../../abstract-base-entity");
const condition_entity_1 = require("../../condition/entities/condition.entity");
const washing_type_entity_1 = require("../../washing-type/entities/washing-type.entity");
const typeorm_1 = require("typeorm");
let WashingEntity = class WashingEntity extends abstract_base_entity_1.AbstractBaseEntity {
};
exports.WashingEntity = WashingEntity;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WashingEntity.prototype, "temperature", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WashingEntity.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WashingEntity.prototype, "press", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => condition_entity_1.ConditionEntity, (condition) => condition.washing, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", condition_entity_1.ConditionEntity)
], WashingEntity.prototype, "condition", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => washing_type_entity_1.WashingTypeEntity, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'washingType_id' }),
    __metadata("design:type", washing_type_entity_1.WashingTypeEntity)
], WashingEntity.prototype, "washingType", void 0);
exports.WashingEntity = WashingEntity = __decorate([
    (0, typeorm_1.Entity)('Washing')
], WashingEntity);
//# sourceMappingURL=washing.entity.js.map