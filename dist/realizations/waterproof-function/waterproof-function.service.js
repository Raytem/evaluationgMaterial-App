"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaterproofFunctionService = void 0;
const common_1 = require("@nestjs/common");
let WaterproofFunctionService = class WaterproofFunctionService {
    create(createWaterproofFunctionDto) {
        return 'This action adds a new waterproofFunction';
    }
    findAll() {
        return `This action returns all waterproofFunction`;
    }
    findOne(id) {
        return `This action returns a #${id} waterproofFunction`;
    }
    update(id, updateWaterproofFunctionDto) {
        return `This action updates a #${id} waterproofFunction`;
    }
    remove(id) {
        return `This action removes a #${id} waterproofFunction`;
    }
};
exports.WaterproofFunctionService = WaterproofFunctionService;
exports.WaterproofFunctionService = WaterproofFunctionService = __decorate([
    (0, common_1.Injectable)()
], WaterproofFunctionService);
//# sourceMappingURL=waterproof-function.service.js.map