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
exports.EstimationController = void 0;
const common_1 = require("@nestjs/common");
const estimation_service_1 = require("./estimation.service");
const create_estimation_dto_1 = require("./dto/create-estimation.dto");
const update_estimation_dto_1 = require("./dto/update-estimation.dto");
let EstimationController = class EstimationController {
    constructor(estimationService) {
        this.estimationService = estimationService;
    }
    create(createEstimationDto) {
        return this.estimationService.create(createEstimationDto);
    }
    findAll() {
        return this.estimationService.findAll();
    }
    findOne(id) {
        return this.estimationService.findOne(+id);
    }
    update(id, updateEstimationDto) {
        return this.estimationService.update(+id, updateEstimationDto);
    }
    remove(id) {
        return this.estimationService.remove(+id);
    }
};
exports.EstimationController = EstimationController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_estimation_dto_1.CreateEstimationDto]),
    __metadata("design:returntype", void 0)
], EstimationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EstimationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EstimationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_estimation_dto_1.UpdateEstimationDto]),
    __metadata("design:returntype", void 0)
], EstimationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EstimationController.prototype, "remove", null);
exports.EstimationController = EstimationController = __decorate([
    (0, common_1.Controller)('estimation'),
    __metadata("design:paramtypes", [estimation_service_1.EstimationService])
], EstimationController);
//# sourceMappingURL=estimation.controller.js.map