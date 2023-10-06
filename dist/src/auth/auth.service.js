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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../realizations/user/entities/user.entity");
const typeorm_2 = require("@nestjs/typeorm");
const user_service_1 = require("../realizations/user/user.service");
const bcrypt_1 = __importDefault(require("bcrypt"));
let AuthService = class AuthService {
    constructor(userService, userRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
    }
    async validate(loginDto) {
        try {
            const user = await this.userService.findOne(null, loginDto.email);
            const isEqual = await bcrypt_1.default.compare(loginDto.password, user.password);
            if (!isEqual) {
                throw new common_1.UnauthorizedException('Invalid password');
            }
            return user;
        }
        catch (e) {
            throw new common_1.UnauthorizedException('There is no user with this email');
        }
    }
    async signup(createUserDto) {
        try {
            const password = await bcrypt_1.default.hash(createUserDto.password, 10);
            const user = await this.userService.create({
                ...createUserDto,
                password,
            });
            return user;
        }
        catch (e) {
            throw e;
        }
    }
    async login(loginDto) {
        try {
            const user = await this.validate(loginDto);
            return user;
        }
        catch (e) {
            throw e;
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_2.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [user_service_1.UserService,
        typeorm_1.Repository])
], AuthService);
//# sourceMappingURL=auth.service.js.map