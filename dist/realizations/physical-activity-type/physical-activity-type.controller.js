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
exports.PhysicalActivityTypeController = void 0;
const common_1 = require("@nestjs/common");
const physical_activity_type_service_1 = require("./physical-activity-type.service");
const create_physical_activity_type_dto_1 = require("./dto/create-physical-activity-type.dto");
const update_physical_activity_type_dto_1 = require("./dto/update-physical-activity-type.dto");
const admin_decorator_1 = require("../../decorators/admin.decorator");
const pagination_dto_1 = require("../../pagination/dto/pagination.dto");
let PhysicalActivityTypeController = class PhysicalActivityTypeController {
    constructor(physicalActivityTypeService) {
        this.physicalActivityTypeService = physicalActivityTypeService;
    }
    async create(createAbrasionTypeDto) {
        return this.physicalActivityTypeService.create(createAbrasionTypeDto);
    }
    async findAll(paginationDto) {
        return await this.physicalActivityTypeService.findAll(paginationDto);
    }
    async findOne(id) {
        return await this.physicalActivityTypeService.findOne(id);
    }
    async update(id, updateAbrasionTypeDto) {
        return await this.physicalActivityTypeService.update(id, updateAbrasionTypeDto);
    }
    async remove(id) {
        return await this.physicalActivityTypeService.remove(id);
    }
};
exports.PhysicalActivityTypeController = PhysicalActivityTypeController;
__decorate([
    (0, admin_decorator_1.Admin)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_physical_activity_type_dto_1.CreatePhysicalActivityTypeDto]),
    __metadata("design:returntype", Promise)
], PhysicalActivityTypeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], PhysicalActivityTypeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PhysicalActivityTypeController.prototype, "findOne", null);
__decorate([
    (0, admin_decorator_1.Admin)(),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_physical_activity_type_dto_1.UpdatePhysicalActivityTypeDto]),
    __metadata("design:returntype", Promise)
], PhysicalActivityTypeController.prototype, "update", null);
__decorate([
    (0, admin_decorator_1.Admin)(),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PhysicalActivityTypeController.prototype, "remove", null);
exports.PhysicalActivityTypeController = PhysicalActivityTypeController = __decorate([
    (0, common_1.Controller)('physical-activity-type'),
    __metadata("design:paramtypes", [physical_activity_type_service_1.PhysicalActivityTypeService])
], PhysicalActivityTypeController);
//# sourceMappingURL=physical-activity-type.controller.js.map