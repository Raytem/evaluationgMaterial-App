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
exports.ImageEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const abstract_base_entity_1 = require("../../abstract-base-entity");
const material_entity_1 = require("../../material/entities/material.entity");
const getWebContentLink_1 = require("../../../utils/getWebContentLink");
const typeorm_1 = require("typeorm");
let ImageEntity = class ImageEntity extends abstract_base_entity_1.AbstractBaseEntity {
    get webContentLink() {
        return (0, getWebContentLink_1.getWebContentLink)(this.name, this.folderName);
    }
    constructor(partial) {
        super();
        Object.assign(this, partial);
    }
};
exports.ImageEntity = ImageEntity;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ImageEntity.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ImageEntity.prototype, "folderName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'webContentLink', type: String }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], ImageEntity.prototype, "webContentLink", null);
__decorate([
    (0, typeorm_1.ManyToOne)(() => material_entity_1.MaterialEntity, (material) => material.images, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'material_id' }),
    __metadata("design:type", material_entity_1.MaterialEntity)
], ImageEntity.prototype, "material", void 0);
exports.ImageEntity = ImageEntity = __decorate([
    (0, typeorm_1.Entity)('Image'),
    __metadata("design:paramtypes", [Object])
], ImageEntity);
//# sourceMappingURL=image.entity.js.map