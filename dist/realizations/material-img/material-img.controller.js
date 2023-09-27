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
exports.MaterialImgController = void 0;
const common_1 = require("@nestjs/common");
const material_img_service_1 = require("./material-img.service");
const create_material_img_dto_1 = require("./dto/create-material-img.dto");
const update_material_img_dto_1 = require("./dto/update-material-img.dto");
let MaterialImgController = class MaterialImgController {
    constructor(materialImgService) {
        this.materialImgService = materialImgService;
    }
    create(createMaterialImgDto) {
        return this.materialImgService.create(createMaterialImgDto);
    }
    findAll() {
        return this.materialImgService.findAll();
    }
    findOne(id) {
        return this.materialImgService.findOne(+id);
    }
    update(id, updateMaterialImgDto) {
        return this.materialImgService.update(+id, updateMaterialImgDto);
    }
    remove(id) {
        return this.materialImgService.remove(+id);
    }
};
exports.MaterialImgController = MaterialImgController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_material_img_dto_1.CreateMaterialImgDto]),
    __metadata("design:returntype", void 0)
], MaterialImgController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MaterialImgController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MaterialImgController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_material_img_dto_1.UpdateMaterialImgDto]),
    __metadata("design:returntype", void 0)
], MaterialImgController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MaterialImgController.prototype, "remove", null);
exports.MaterialImgController = MaterialImgController = __decorate([
    (0, common_1.Controller)('material-img'),
    __metadata("design:paramtypes", [material_img_service_1.MaterialImgService])
], MaterialImgController);
//# sourceMappingURL=material-img.controller.js.map