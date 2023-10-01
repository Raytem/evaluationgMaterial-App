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
exports.CalculationController = void 0;
const common_1 = require("@nestjs/common");
const calculation_service_1 = require("./calculation.service");
let CalculationController = class CalculationController {
    constructor(calculationService) {
        this.calculationService = calculationService;
    }
};
exports.CalculationController = CalculationController;
exports.CalculationController = CalculationController = __decorate([
    (0, common_1.Controller)('calculation'),
    __metadata("design:paramtypes", [calculation_service_1.CalculationService])
], CalculationController);
//# sourceMappingURL=calculation.controller.js.map