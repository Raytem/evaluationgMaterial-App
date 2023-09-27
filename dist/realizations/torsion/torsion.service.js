"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TorsionService = void 0;
const common_1 = require("@nestjs/common");
let TorsionService = class TorsionService {
    create(createTorsionDto) {
        return 'This action adds a new torsion';
    }
    findAll() {
        return `This action returns all torsion`;
    }
    findOne(id) {
        return `This action returns a #${id} torsion`;
    }
    update(id, updateTorsionDto) {
        return `This action updates a #${id} torsion`;
    }
    remove(id) {
        return `This action removes a #${id} torsion`;
    }
};
exports.TorsionService = TorsionService;
exports.TorsionService = TorsionService = __decorate([
    (0, common_1.Injectable)()
], TorsionService);
//# sourceMappingURL=torsion.service.js.map