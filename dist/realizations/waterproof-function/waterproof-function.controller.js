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
exports.WaterproofFunctionController = void 0;
const common_1 = require("@nestjs/common");
const waterproof_function_service_1 = require("./waterproof-function.service");
const create_waterproof_function_dto_1 = require("./dto/create-waterproof-function.dto");
const update_waterproof_function_dto_1 = require("./dto/update-waterproof-function.dto");
let WaterproofFunctionController = class WaterproofFunctionController {
    constructor(waterproofFunctionService) {
        this.waterproofFunctionService = waterproofFunctionService;
    }
    create(createWaterproofFunctionDto) {
        return this.waterproofFunctionService.create(createWaterproofFunctionDto);
    }
    findAll() {
        return this.waterproofFunctionService.findAll();
    }
    findOne(id) {
        return this.waterproofFunctionService.findOne(+id);
    }
    update(id, updateWaterproofFunctionDto) {
        return this.waterproofFunctionService.update(+id, updateWaterproofFunctionDto);
    }
    remove(id) {
        return this.waterproofFunctionService.remove(+id);
    }
};
exports.WaterproofFunctionController = WaterproofFunctionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_waterproof_function_dto_1.CreateWaterproofFunctionDto]),
    __metadata("design:returntype", void 0)
], WaterproofFunctionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WaterproofFunctionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WaterproofFunctionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_waterproof_function_dto_1.UpdateWaterproofFunctionDto]),
    __metadata("design:returntype", void 0)
], WaterproofFunctionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WaterproofFunctionController.prototype, "remove", null);
exports.WaterproofFunctionController = WaterproofFunctionController = __decorate([
    (0, common_1.Controller)('waterproof-function'),
    __metadata("design:paramtypes", [waterproof_function_service_1.WaterproofFunctionService])
], WaterproofFunctionController);
//# sourceMappingURL=waterproof-function.controller.js.map