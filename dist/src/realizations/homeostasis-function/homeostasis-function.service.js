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
exports.HomeostasisFunctionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const homeostasis_function_entity_1 = require("./entities/homeostasis-function.entity");
const typeorm_2 = require("typeorm");
let HomeostasisFunctionService = class HomeostasisFunctionService {
    constructor(homeostasisFunctionRepository) {
        this.homeostasisFunctionRepository = homeostasisFunctionRepository;
    }
    async create(createHomeostasisFunctionDto, manager) {
        if (manager) {
            return await manager
                .withRepository(this.homeostasisFunctionRepository)
                .save(createHomeostasisFunctionDto);
        }
        else {
            return await this.homeostasisFunctionRepository.save(createHomeostasisFunctionDto);
        }
    }
};
exports.HomeostasisFunctionService = HomeostasisFunctionService;
exports.HomeostasisFunctionService = HomeostasisFunctionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(homeostasis_function_entity_1.HomeostasisFunctionEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], HomeostasisFunctionService);
//# sourceMappingURL=homeostasis-function.service.js.map