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
exports.ProductionMethodController = void 0;
const common_1 = require("@nestjs/common");
const production_method_service_1 = require("./production-method.service");
const create_production_method_dto_1 = require("./dto/create-production-method.dto");
const update_production_method_dto_1 = require("./dto/update-production-method.dto");
const admin_decorator_1 = require("../../decorators/admin.decorator");
const pagination_dto_1 = require("../../services/pagination/dto/pagination.dto");
const swagger_1 = require("@nestjs/swagger");
const production_method_entity_1 = require("./entities/production-method.entity");
let ProductionMethodController = class ProductionMethodController {
    constructor(productionMethodService) {
        this.productionMethodService = productionMethodService;
    }
    async create(createAbrasionTypeDto) {
        return this.productionMethodService.create(createAbrasionTypeDto);
    }
    async findAll(paginationDto) {
        return await this.productionMethodService.findAll(paginationDto);
    }
    async findOne(id) {
        return await this.productionMethodService.findOne(id);
    }
    async update(id, updateAbrasionTypeDto) {
        return await this.productionMethodService.update(id, updateAbrasionTypeDto);
    }
    async remove(id) {
        return await this.productionMethodService.remove(id);
    }
};
exports.ProductionMethodController = ProductionMethodController;
__decorate([
    (0, swagger_1.ApiResponse)({ type: production_method_entity_1.ProductionMethodEntity }),
    (0, swagger_1.ApiOperation)({ summary: 'ADMIN' }),
    (0, admin_decorator_1.Admin)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_production_method_dto_1.CreateProductionMethodDto]),
    __metadata("design:returntype", Promise)
], ProductionMethodController.prototype, "create", null);
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
    (0, swagger_1.ApiResponse)({ type: production_method_entity_1.ProductionMethodEntity, isArray: true }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], ProductionMethodController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiResponse)({ type: production_method_entity_1.ProductionMethodEntity }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductionMethodController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiResponse)({ type: production_method_entity_1.ProductionMethodEntity }),
    (0, swagger_1.ApiOperation)({ summary: 'ADMIN' }),
    (0, admin_decorator_1.Admin)(),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_production_method_dto_1.UpdateProductionMethodDto]),
    __metadata("design:returntype", Promise)
], ProductionMethodController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiResponse)({ type: production_method_entity_1.ProductionMethodEntity }),
    (0, swagger_1.ApiOperation)({ summary: 'ADMIN' }),
    (0, admin_decorator_1.Admin)(),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductionMethodController.prototype, "remove", null);
exports.ProductionMethodController = ProductionMethodController = __decorate([
    (0, swagger_1.ApiBasicAuth)(),
    (0, swagger_1.ApiTags)('production-method'),
    (0, common_1.Controller)('production-method'),
    __metadata("design:paramtypes", [production_method_service_1.ProductionMethodService])
], ProductionMethodController);
//# sourceMappingURL=production-method.controller.js.map