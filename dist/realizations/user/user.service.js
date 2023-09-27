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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
const pagination_service_1 = require("../../pagination/pagination.service");
const no_such_exception_1 = require("../../exceptions/no-such.exception");
let UserService = class UserService {
    constructor(paginationService, userRepository) {
        this.paginationService = paginationService;
        this.userRepository = userRepository;
    }
    async create(createUserDto) {
        let user;
        try {
            user = await this.findOne(null, createUserDto.email);
        }
        catch { }
        if (user) {
            throw new common_1.BadRequestException(`User with email '${createUserDto.email}' already exists`);
        }
        const newUser = await this.userRepository.save(createUserDto);
        return new user_entity_1.UserEntity(newUser);
    }
    async findAll(paginationDto) {
        const pagination = this.paginationService.paginate(paginationDto);
        return await this.userRepository.find({
            ...pagination,
        });
    }
    async findOne(id, email) {
        let user;
        if (id) {
            user = await this.userRepository.findOne({
                where: {
                    id,
                },
            });
        }
        else {
            user = await this.userRepository.findOne({
                where: {
                    email,
                },
            });
        }
        if (!user) {
            throw new no_such_exception_1.NoSuchException('user');
        }
        return user;
    }
    async update(id, updateUserDto, reqUser) {
        if (reqUser.id !== id) {
            throw new common_1.ForbiddenException('You can update only your account');
        }
        const user = await this.findOne(id);
        await this.userRepository.update({
            id: user.id,
        }, {
            ...updateUserDto,
        });
        return await this.userRepository.findOne({
            where: {
                id,
            },
        });
    }
    async remove(id, reqUser) {
        if (reqUser.id !== id) {
            throw new common_1.ForbiddenException('You can delete only your account');
        }
        const user = await this.findOne(id);
        await this.userRepository.remove(user);
        return user;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [pagination_service_1.PaginationService,
        typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map