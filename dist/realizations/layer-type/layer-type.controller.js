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
exports.LayerTypeController = void 0;
const common_1 = require("@nestjs/common");
const layer_type_service_1 = require("./layer-type.service");
const create_layer_type_dto_1 = require("./dto/create-layer-type.dto");
const update_layer_type_dto_1 = require("./dto/update-layer-type.dto");
const admin_decorator_1 = require("../../decorators/admin.decorator");
const pagination_dto_1 = require("../../pagination/dto/pagination.dto");
let LayerTypeController = class LayerTypeController {
    constructor(layerTypeService) {
        this.layerTypeService = layerTypeService;
    }
    async create(createAbrasionTypeDto) {
        return this.layerTypeService.create(createAbrasionTypeDto);
    }
    async findAll(paginationDto) {
        return await this.layerTypeService.findAll(paginationDto);
    }
    async findOne(id) {
        return await this.layerTypeService.findOne(id);
    }
    async update(id, updateAbrasionTypeDto) {
        return await this.layerTypeService.update(id, updateAbrasionTypeDto);
    }
    async remove(id) {
        return await this.layerTypeService.remove(id);
    }
};
exports.LayerTypeController = LayerTypeController;
__decorate([
    (0, admin_decorator_1.Admin)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_layer_type_dto_1.CreateLayerTypeDto]),
    __metadata("design:returntype", Promise)
], LayerTypeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], LayerTypeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LayerTypeController.prototype, "findOne", null);
__decorate([
    (0, admin_decorator_1.Admin)(),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_layer_type_dto_1.UpdateLayerTypeDto]),
    __metadata("design:returntype", Promise)
], LayerTypeController.prototype, "update", null);
__decorate([
    (0, admin_decorator_1.Admin)(),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LayerTypeController.prototype, "remove", null);
exports.LayerTypeController = LayerTypeController = __decorate([
    (0, common_1.Controller)('layer-type'),
    __metadata("design:paramtypes", [layer_type_service_1.LayerTypeService])
], LayerTypeController);
//# sourceMappingURL=layer-type.controller.js.map