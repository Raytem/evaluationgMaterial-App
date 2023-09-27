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
exports.TorsionController = void 0;
const common_1 = require("@nestjs/common");
const torsion_service_1 = require("./torsion.service");
const create_torsion_dto_1 = require("./dto/create-torsion.dto");
const update_torsion_dto_1 = require("./dto/update-torsion.dto");
let TorsionController = class TorsionController {
    constructor(torsionService) {
        this.torsionService = torsionService;
    }
    create(createTorsionDto) {
        return this.torsionService.create(createTorsionDto);
    }
    findAll() {
        return this.torsionService.findAll();
    }
    findOne(id) {
        return this.torsionService.findOne(+id);
    }
    update(id, updateTorsionDto) {
        return this.torsionService.update(+id, updateTorsionDto);
    }
    remove(id) {
        return this.torsionService.remove(+id);
    }
};
exports.TorsionController = TorsionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_torsion_dto_1.CreateTorsionDto]),
    __metadata("design:returntype", void 0)
], TorsionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TorsionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TorsionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_torsion_dto_1.UpdateTorsionDto]),
    __metadata("design:returntype", void 0)
], TorsionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TorsionController.prototype, "remove", null);
exports.TorsionController = TorsionController = __decorate([
    (0, common_1.Controller)('torsion'),
    __metadata("design:paramtypes", [torsion_service_1.TorsionService])
], TorsionController);
//# sourceMappingURL=torsion.controller.js.map