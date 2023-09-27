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
exports.AbrasionController = void 0;
const common_1 = require("@nestjs/common");
const abrasion_service_1 = require("./abrasion.service");
const create_abrasion_dto_1 = require("./dto/create-abrasion.dto");
const update_abrasion_dto_1 = require("./dto/update-abrasion.dto");
let AbrasionController = class AbrasionController {
    constructor(abrasionService) {
        this.abrasionService = abrasionService;
    }
    create(createAbrasionDto) {
        return this.abrasionService.create(createAbrasionDto);
    }
    findAll() {
        return this.abrasionService.findAll();
    }
    findOne(id) {
        return this.abrasionService.findOne(+id);
    }
    update(id, updateAbrasionDto) {
        return this.abrasionService.update(+id, updateAbrasionDto);
    }
    remove(id) {
        return this.abrasionService.remove(+id);
    }
};
exports.AbrasionController = AbrasionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_abrasion_dto_1.CreateAbrasionDto]),
    __metadata("design:returntype", void 0)
], AbrasionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AbrasionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AbrasionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_abrasion_dto_1.UpdateAbrasionDto]),
    __metadata("design:returntype", void 0)
], AbrasionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AbrasionController.prototype, "remove", null);
exports.AbrasionController = AbrasionController = __decorate([
    (0, common_1.Controller)('abrasion'),
    __metadata("design:paramtypes", [abrasion_service_1.AbrasionService])
], AbrasionController);
//# sourceMappingURL=abrasion.controller.js.map