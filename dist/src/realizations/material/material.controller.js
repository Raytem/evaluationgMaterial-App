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
exports.MaterialController = void 0;
const common_1 = require("@nestjs/common");
const material_service_1 = require("./material.service");
const create_material_dto_1 = require("./dto/create-material.dto");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../services/pagination/dto/pagination.dto");
const material_entity_1 = require("./entities/material.entity");
const platform_express_1 = require("@nestjs/platform-express");
const file_config_1 = require("../../config/config-functions/file.config");
const validate_images_1 = require("../../utils/validate-images");
const multipart_material_data_1 = require("../../decorators/multipart-material-data");
const reqUser_decorator_1 = require("../../decorators/reqUser.decorator");
const user_entity_1 = require("../user/entities/user.entity");
let MaterialController = class MaterialController {
    constructor(materialService, fileCfg) {
        this.materialService = materialService;
        this.fileCfg = fileCfg;
    }
    async create(images, createMaterialDto, reqUser) {
        (0, validate_images_1.validateImages)(this.fileCfg, images);
        return await this.materialService.create(createMaterialDto, images, reqUser);
    }
    async findAll(paginationDto, materialFilter) {
        return await this.materialService.findAll(paginationDto);
    }
    async findOne(id) {
        return this.materialService.findOne(id);
    }
    async remove(id) {
        return await this.materialService.remove(id);
    }
};
exports.MaterialController = MaterialController;
__decorate([
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiResponse)({ type: material_entity_1.MaterialEntity }),
    (0, swagger_1.ApiBody)({ type: create_material_dto_1.CreateMaterialDto }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('images')),
    (0, common_1.Post)(),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, multipart_material_data_1.MultipartMaterialData)()),
    __param(2, (0, reqUser_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, create_material_dto_1.CreateMaterialDto,
        user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], MaterialController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 'page',
        type: Number,
        required: false,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'perPage',
        type: Number,
        required: false,
    }),
    (0, swagger_1.ApiResponse)({ type: material_entity_1.MaterialEntity }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto,
        material_entity_1.MaterialEntity]),
    __metadata("design:returntype", Promise)
], MaterialController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiResponse)({ type: material_entity_1.MaterialEntity }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MaterialController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiResponse)({ type: material_entity_1.MaterialEntity }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MaterialController.prototype, "remove", null);
exports.MaterialController = MaterialController = __decorate([
    (0, swagger_1.ApiBasicAuth)(),
    (0, swagger_1.ApiTags)('material'),
    (0, common_1.Controller)('material'),
    __param(1, (0, common_1.Inject)(file_config_1.fileConfig.KEY)),
    __metadata("design:paramtypes", [material_service_1.MaterialService, void 0])
], MaterialController);
//# sourceMappingURL=material.controller.js.map