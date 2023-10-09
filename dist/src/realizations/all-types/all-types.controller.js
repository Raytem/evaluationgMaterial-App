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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllTypesController = void 0;
const common_1 = require("@nestjs/common");
const all_types_service_1 = require("./all-types.service");
const swagger_1 = require("@nestjs/swagger");
const return_all_types_dto_1 = require("./dto/return-all-types.dto");
let AllTypesController = class AllTypesController {
    constructor(allTypesService) {
        this.allTypesService = allTypesService;
    }
    async findAll() {
        return await this.allTypesService.findAll();
    }
};
exports.AllTypesController = AllTypesController;
__decorate([
    (0, swagger_1.ApiResponse)({ type: return_all_types_dto_1.ReturnAllTypesDto }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AllTypesController.prototype, "findAll", null);
exports.AllTypesController = AllTypesController = __decorate([
    (0, swagger_1.ApiBasicAuth)(),
    (0, swagger_1.ApiTags)('all-types'),
    (0, common_1.Controller)('all-types'),
    __metadata("design:paramtypes", [all_types_service_1.AllTypesService])
], AllTypesController);
//# sourceMappingURL=all-types.controller.js.map