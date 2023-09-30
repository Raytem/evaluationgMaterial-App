"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReliabilityFunctionModule = void 0;
const common_1 = require("@nestjs/common");
const reliability_function_service_1 = require("./reliability-function.service");
const typeorm_1 = require("@nestjs/typeorm");
const reliability_function_entity_1 = require("./entities/reliability-function.entity");
let ReliabilityFunctionModule = class ReliabilityFunctionModule {
};
exports.ReliabilityFunctionModule = ReliabilityFunctionModule;
exports.ReliabilityFunctionModule = ReliabilityFunctionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([reliability_function_entity_1.ReliabilityFunctionEntity])],
        providers: [reliability_function_service_1.ReliabilityFunctionService],
        exports: [reliability_function_service_1.ReliabilityFunctionService],
    })
], ReliabilityFunctionModule);
//# sourceMappingURL=reliability-function.module.js.map