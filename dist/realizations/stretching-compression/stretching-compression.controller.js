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
exports.StretchingCompressionController = void 0;
const common_1 = require("@nestjs/common");
const stretching_compression_service_1 = require("./stretching-compression.service");
const create_stretching_compression_dto_1 = require("./dto/create-stretching-compression.dto");
const update_stretching_compression_dto_1 = require("./dto/update-stretching-compression.dto");
let StretchingCompressionController = class StretchingCompressionController {
    constructor(stretchingCompressionService) {
        this.stretchingCompressionService = stretchingCompressionService;
    }
    create(createStretchingCompressionDto) {
        return this.stretchingCompressionService.create(createStretchingCompressionDto);
    }
    findAll() {
        return this.stretchingCompressionService.findAll();
    }
    findOne(id) {
        return this.stretchingCompressionService.findOne(+id);
    }
    update(id, updateStretchingCompressionDto) {
        return this.stretchingCompressionService.update(+id, updateStretchingCompressionDto);
    }
    remove(id) {
        return this.stretchingCompressionService.remove(+id);
    }
};
exports.StretchingCompressionController = StretchingCompressionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_stretching_compression_dto_1.CreateStretchingCompressionDto]),
    __metadata("design:returntype", void 0)
], StretchingCompressionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StretchingCompressionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StretchingCompressionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_stretching_compression_dto_1.UpdateStretchingCompressionDto]),
    __metadata("design:returntype", void 0)
], StretchingCompressionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StretchingCompressionController.prototype, "remove", null);
exports.StretchingCompressionController = StretchingCompressionController = __decorate([
    (0, common_1.Controller)('stretching-compression'),
    __metadata("design:paramtypes", [stretching_compression_service_1.StretchingCompressionService])
], StretchingCompressionController);
//# sourceMappingURL=stretching-compression.controller.js.map