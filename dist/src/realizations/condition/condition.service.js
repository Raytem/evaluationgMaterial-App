"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConditionService = void 0;
const common_1 = require("@nestjs/common");
let ConditionService = class ConditionService {
    create(createConditionDto) {
        return 'This action adds a new condition';
    }
    findAll() {
        return `This action returns all condition`;
    }
    findOne(id) {
        return `This action returns a #${id} condition`;
    }
    update(id, updateConditionDto) {
        return `This action updates a #${id} condition`;
    }
    remove(id) {
        return `This action removes a #${id} condition`;
    }
};
exports.ConditionService = ConditionService;
exports.ConditionService = ConditionService = __decorate([
    (0, common_1.Injectable)()
], ConditionService);
//# sourceMappingURL=condition.service.js.map