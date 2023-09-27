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
exports.ReliabilityFunctionController = void 0;
const common_1 = require("@nestjs/common");
const reliability_function_service_1 = require("./reliability-function.service");
const create_reliability_function_dto_1 = require("./dto/create-reliability-function.dto");
const update_reliability_function_dto_1 = require("./dto/update-reliability-function.dto");
let ReliabilityFunctionController = class ReliabilityFunctionController {
    constructor(reliabilityFunctionService) {
        this.reliabilityFunctionService = reliabilityFunctionService;
    }
    create(createReliabilityFunctionDto) {
        return this.reliabilityFunctionService.create(createReliabilityFunctionDto);
    }
    findAll() {
        return this.reliabilityFunctionService.findAll();
    }
    findOne(id) {
        return this.reliabilityFunctionService.findOne(+id);
    }
    update(id, updateReliabilityFunctionDto) {
        return this.reliabilityFunctionService.update(+id, updateReliabilityFunctionDto);
    }
    remove(id) {
        return this.reliabilityFunctionService.remove(+id);
    }
};
exports.ReliabilityFunctionController = ReliabilityFunctionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reliability_function_dto_1.CreateReliabilityFunctionDto]),
    __metadata("design:returntype", void 0)
], ReliabilityFunctionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReliabilityFunctionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReliabilityFunctionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_reliability_function_dto_1.UpdateReliabilityFunctionDto]),
    __metadata("design:returntype", void 0)
], ReliabilityFunctionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReliabilityFunctionController.prototype, "remove", null);
exports.ReliabilityFunctionController = ReliabilityFunctionController = __decorate([
    (0, common_1.Controller)('reliability-function'),
    __metadata("design:paramtypes", [reliability_function_service_1.ReliabilityFunctionService])
], ReliabilityFunctionController);
//# sourceMappingURL=reliability-function.controller.js.map