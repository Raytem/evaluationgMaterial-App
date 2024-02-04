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
exports.DesktopController = void 0;
const common_1 = require("@nestjs/common");
const desktop_service_1 = require("./desktop.service");
const create_desktop_dto_1 = require("./dto/create-desktop.dto");
const swagger_1 = require("@nestjs/swagger");
const public_decorator_1 = require("../../decorators/public.decorator");
let DesktopController = class DesktopController {
    constructor(desktopService) {
        this.desktopService = desktopService;
    }
    async create(createDesktopDto) {
        return this.desktopService.create(createDesktopDto);
    }
    async getLatestVersion() {
        return this.desktopService.getLatestVersion();
    }
    async getInstaller(res) {
        const reportBuffer = await this.desktopService.getInstaller();
        const fileName = `file.txt`;
        res.set({
            'Content-Type': 'application/octet-stream',
            'Content-Disposition': `attachment; filename=${fileName}`,
        });
        return new common_1.StreamableFile(reportBuffer);
    }
};
exports.DesktopController = DesktopController;
__decorate([
    (0, swagger_1.ApiBasicAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'DEVELOPER' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_desktop_dto_1.CreateDesktopDto]),
    __metadata("design:returntype", Promise)
], DesktopController.prototype, "create", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('latestVersion'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DesktopController.prototype, "getLatestVersion", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, swagger_1.ApiOperation)({ summary: 'returns desktop-app installer' }),
    (0, swagger_1.ApiProduces)('application/octet-stream'),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DesktopController.prototype, "getInstaller", null);
exports.DesktopController = DesktopController = __decorate([
    (0, swagger_1.ApiTags)('desktop'),
    (0, common_1.Controller)('desktop'),
    __metadata("design:paramtypes", [desktop_service_1.DesktopService])
], DesktopController);
//# sourceMappingURL=desktop.controller.js.map