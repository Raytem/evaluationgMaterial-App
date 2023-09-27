"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbrasionEntity = void 0;
const abstract_base_entity_1 = require("../../abstract-base-entity");
const typeorm_1 = require("typeorm");
let AbrasionEntity = class AbrasionEntity extends abstract_base_entity_1.AbstractBaseEntity {
};
exports.AbrasionEntity = AbrasionEntity;
exports.AbrasionEntity = AbrasionEntity = __decorate([
    (0, typeorm_1.Entity)('Abrasion')
], AbrasionEntity);
//# sourceMappingURL=abrasion.entity.js.map