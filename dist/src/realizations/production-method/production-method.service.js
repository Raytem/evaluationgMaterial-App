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
exports.ProductionMethodService = void 0;
const common_1 = require("@nestjs/common");
const production_method_entity_1 = require("./entities/production-method.entity");
const no_such_exception_1 = require("../../exceptions/no-such.exception");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const pagination_service_1 = require("../../pagination/pagination.service");
const entities_refer_exception_1 = require("../../exceptions/entities-refer.exception");
let ProductionMethodService = class ProductionMethodService {
    constructor(paginationService, productionMethodRepository) {
        this.paginationService = paginationService;
        this.productionMethodRepository = productionMethodRepository;
    }
    async create(createProductionMethodDto) {
        let productionMethod;
        try {
            productionMethod = await this.findOne(null, createProductionMethodDto.name);
        }
        catch { }
        if (productionMethod) {
            throw new common_1.BadRequestException('ProductionMethod with this name already exists');
        }
        const newProductionMethod = await this.productionMethodRepository.save({
            ...createProductionMethodDto,
        });
        return newProductionMethod;
    }
    async findAll(paginationDto) {
        const pagination = this.paginationService.paginate(paginationDto);
        return await this.productionMethodRepository.find({
            ...pagination,
        });
    }
    async findOne(id, name) {
        let productionMethod;
        if (name) {
            productionMethod = await this.productionMethodRepository.findOneBy({
                name,
            });
        }
        else {
            productionMethod = await this.productionMethodRepository.findOneBy({
                id,
            });
        }
        if (!productionMethod) {
            throw new no_such_exception_1.NoSuchException('production method');
        }
        return productionMethod;
    }
    async update(id, updateProductionMethodDto) {
        await this.findOne(id);
        await this.productionMethodRepository.update({ id }, {
            ...updateProductionMethodDto,
        });
        return await this.findOne(id);
    }
    async remove(id) {
        const productionMethod = await this.findOne(id);
        try {
            await this.productionMethodRepository.delete({ id });
        }
        catch {
            throw new entities_refer_exception_1.EntitiesReferException('production method');
        }
        return productionMethod;
    }
};
exports.ProductionMethodService = ProductionMethodService;
exports.ProductionMethodService = ProductionMethodService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_2.InjectRepository)(production_method_entity_1.ProductionMethodEntity)),
    __metadata("design:paramtypes", [pagination_service_1.PaginationService,
        typeorm_1.Repository])
], ProductionMethodService);
//# sourceMappingURL=production-method.service.js.map