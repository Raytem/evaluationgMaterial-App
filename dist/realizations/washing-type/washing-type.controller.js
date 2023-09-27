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
exports.WashingTypeController = void 0;
const common_1 = require("@nestjs/common");
const washing_type_service_1 = require("./washing-type.service");
const create_washing_type_dto_1 = require("./dto/create-washing-type.dto");
const update_washing_type_dto_1 = require("./dto/update-washing-type.dto");
const admin_decorator_1 = require("../../decorators/admin.decorator");
const pagination_dto_1 = require("../../pagination/dto/pagination.dto");
let WashingTypeController = class WashingTypeController {
    constructor(washingTypeService) {
        this.washingTypeService = washingTypeService;
    }
    async create(createAbrasionTypeDto) {
        return this.washingTypeService.create(createAbrasionTypeDto);
    }
    async findAll(paginationDto) {
        return await this.washingTypeService.findAll(paginationDto);
    }
    async findOne(id) {
        return await this.washingTypeService.findOne(id);
    }
    async update(id, updateAbrasionTypeDto) {
        return await this.washingTypeService.update(id, updateAbrasionTypeDto);
    }
    async remove(id) {
        return await this.washingTypeService.remove(id);
    }
};
exports.WashingTypeController = WashingTypeController;
__decorate([
    (0, admin_decorator_1.Admin)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_washing_type_dto_1.CreateWashingTypeDto]),
    __metadata("design:returntype", Promise)
], WashingTypeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], WashingTypeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WashingTypeController.prototype, "findOne", null);
__decorate([
    (0, admin_decorator_1.Admin)(),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_washing_type_dto_1.UpdateWashingTypeDto]),
    __metadata("design:returntype", Promise)
], WashingTypeController.prototype, "update", null);
__decorate([
    (0, admin_decorator_1.Admin)(),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WashingTypeController.prototype, "remove", null);
exports.WashingTypeController = WashingTypeController = __decorate([
    (0, admin_decorator_1.Admin)(),
    (0, common_1.Controller)('washing-type'),
    __metadata("design:paramtypes", [washing_type_service_1.WashingTypeService])
], WashingTypeController);
//# sourceMappingURL=washing-type.controller.js.map