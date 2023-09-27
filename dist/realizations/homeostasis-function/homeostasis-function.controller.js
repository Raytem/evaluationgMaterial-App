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
exports.HomeostasisFunctionController = void 0;
const common_1 = require("@nestjs/common");
const homeostasis_function_service_1 = require("./homeostasis-function.service");
const create_homeostasis_function_dto_1 = require("./dto/create-homeostasis-function.dto");
const update_homeostasis_function_dto_1 = require("./dto/update-homeostasis-function.dto");
let HomeostasisFunctionController = class HomeostasisFunctionController {
    constructor(homeostasisFunctionService) {
        this.homeostasisFunctionService = homeostasisFunctionService;
    }
    create(createHomeostasisFunctionDto) {
        return this.homeostasisFunctionService.create(createHomeostasisFunctionDto);
    }
    findAll() {
        return this.homeostasisFunctionService.findAll();
    }
    findOne(id) {
        return this.homeostasisFunctionService.findOne(+id);
    }
    update(id, updateHomeostasisFunctionDto) {
        return this.homeostasisFunctionService.update(+id, updateHomeostasisFunctionDto);
    }
    remove(id) {
        return this.homeostasisFunctionService.remove(+id);
    }
};
exports.HomeostasisFunctionController = HomeostasisFunctionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_homeostasis_function_dto_1.CreateHomeostasisFunctionDto]),
    __metadata("design:returntype", void 0)
], HomeostasisFunctionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HomeostasisFunctionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HomeostasisFunctionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_homeostasis_function_dto_1.UpdateHomeostasisFunctionDto]),
    __metadata("design:returntype", void 0)
], HomeostasisFunctionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HomeostasisFunctionController.prototype, "remove", null);
exports.HomeostasisFunctionController = HomeostasisFunctionController = __decorate([
    (0, common_1.Controller)('homeostasis-function'),
    __metadata("design:paramtypes", [homeostasis_function_service_1.HomeostasisFunctionService])
], HomeostasisFunctionController);
//# sourceMappingURL=homeostasis-function.controller.js.map