"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeostasisFunctionService = void 0;
const common_1 = require("@nestjs/common");
let HomeostasisFunctionService = class HomeostasisFunctionService {
    create(createHomeostasisFunctionDto) {
        return 'This action adds a new homeostasisFunction';
    }
    findAll() {
        return `This action returns all homeostasisFunction`;
    }
    findOne(id) {
        return `This action returns a #${id} homeostasisFunction`;
    }
    update(id, updateHomeostasisFunctionDto) {
        return `This action updates a #${id} homeostasisFunction`;
    }
    remove(id) {
        return `This action removes a #${id} homeostasisFunction`;
    }
};
exports.HomeostasisFunctionService = HomeostasisFunctionService;
exports.HomeostasisFunctionService = HomeostasisFunctionService = __decorate([
    (0, common_1.Injectable)()
], HomeostasisFunctionService);
//# sourceMappingURL=homeostasis-function.service.js.map