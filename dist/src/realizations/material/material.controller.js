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
exports.MaterialController = void 0;
const common_1 = require("@nestjs/common");
const material_service_1 = require("./material.service");
const create_material_dto_1 = require("./dto/create-material.dto");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../pagination/dto/pagination.dto");
const material_entity_1 = require("./entities/material.entity");
let MaterialController = class MaterialController {
    constructor(materialService) {
        this.materialService = materialService;
    }
    create(createMaterialDto) {
        return this.materialService.create(createMaterialDto);
    }
    findAll(paginationDto) {
        return this.materialService.findAll();
    }
    findOne(id) {
        return this.materialService.findOne(+id);
    }
    remove(id) {
        return this.materialService.remove(+id);
    }
};
exports.MaterialController = MaterialController;
__decorate([
    (0, swagger_1.ApiResponse)({ type: material_entity_1.MaterialEntity }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_material_dto_1.CreateMaterialDto]),
    __metadata("design:returntype", void 0)
], MaterialController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 'page',
        type: Number,
        required: false,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'perPage',
        type: Number,
        required: false,
    }),
    (0, swagger_1.ApiResponse)({ type: material_entity_1.MaterialEntity }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", void 0)
], MaterialController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiResponse)({ type: material_entity_1.MaterialEntity }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MaterialController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiResponse)({ type: material_entity_1.MaterialEntity }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MaterialController.prototype, "remove", null);
exports.MaterialController = MaterialController = __decorate([
    (0, swagger_1.ApiBasicAuth)(),
    (0, swagger_1.ApiTags)('material'),
    (0, common_1.Controller)('material'),
    __metadata("design:paramtypes", [material_service_1.MaterialService])
], MaterialController);
//# sourceMappingURL=material.controller.js.map