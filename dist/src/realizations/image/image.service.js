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
exports.ImageService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const image_entity_1 = require("./entities/image.entity");
const typeorm_2 = require("typeorm");
const no_such_exception_1 = require("../../exceptions/no-such.exception");
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
const uuid_1 = require("uuid");
const file_config_1 = require("../../config/config-functions/file.config");
let ImageService = class ImageService {
    constructor(imageRepository, fileCfg) {
        this.imageRepository = imageRepository;
        this.fileCfg = fileCfg;
        this.baseMaterialsPath = path_1.default.join(process.cwd(), this.fileCfg.staticDirName, this.fileCfg.materialImagesDirName);
    }
    async uploadToDisk(files, material) {
        const curMaterialFolderPath = path_1.default.join(this.baseMaterialsPath, material.id.toString());
        try {
            await promises_1.default.access(curMaterialFolderPath);
        }
        catch {
            await promises_1.default.mkdir(curMaterialFolderPath);
        }
        const fileNames = [];
        files.forEach(async (file) => {
            const fileName = `${(0, uuid_1.v4)()}.jpeg`;
            const filePath = path_1.default.join(curMaterialFolderPath, fileName);
            fileNames.push(fileName);
            await (0, sharp_1.default)(file.buffer)
                .resize({
                width: this.fileCfg.resizeSize,
                height: this.fileCfg.resizeSize,
                fit: 'contain',
                position: 'centre',
            })
                .jpeg({
                quality: 70,
            })
                .toFile(filePath);
        });
        return fileNames;
    }
    async createMany(files, material) {
        if (!files.length)
            return;
        const fileNames = await this.uploadToDisk(files, material);
        const createImagesList = fileNames.map((fileName) => ({
            name: fileName,
            folderName: material.id.toString(),
            material,
        }));
        const images = await this.imageRepository.save(createImagesList);
        return images;
    }
    async findOne(id) {
        const material = await this.imageRepository.findOneBy({ id });
        if (!material) {
            throw new no_such_exception_1.NoSuchException('material');
        }
        return material;
    }
    async removeMaterialImagesFolder(material) {
        const materialImages = material.images;
        if (!materialImages.length)
            return;
        const curMaterialFolderPath = path_1.default.join(this.baseMaterialsPath, material.id.toString());
        try {
            await promises_1.default.rm(curMaterialFolderPath, {
                recursive: true,
            });
            await this.imageRepository.remove(materialImages);
            return materialImages;
        }
        catch (e) {
            throw e;
        }
    }
};
exports.ImageService = ImageService;
exports.ImageService = ImageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(image_entity_1.ImageEntity)),
    __param(1, (0, common_1.Inject)(file_config_1.fileConfig.KEY)),
    __metadata("design:paramtypes", [typeorm_2.Repository, void 0])
], ImageService);
//# sourceMappingURL=image.service.js.map