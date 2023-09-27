"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialImgService = void 0;
const common_1 = require("@nestjs/common");
let MaterialImgService = class MaterialImgService {
    create(createMaterialImgDto) {
        return 'This action adds a new materialImg';
    }
    findAll() {
        return `This action returns all materialImg`;
    }
    findOne(id) {
        return `This action returns a #${id} materialImg`;
    }
    update(id, updateMaterialImgDto) {
        return `This action updates a #${id} materialImg`;
    }
    remove(id) {
        return `This action removes a #${id} materialImg`;
    }
};
exports.MaterialImgService = MaterialImgService;
exports.MaterialImgService = MaterialImgService = __decorate([
    (0, common_1.Injectable)()
], MaterialImgService);
//# sourceMappingURL=material-img.service.js.map