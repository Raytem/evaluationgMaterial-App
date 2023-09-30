"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateImages = void 0;
const common_1 = require("@nestjs/common");
const validateImages = (fileCfg, images) => {
    if (images.length) {
        if (images.length > fileCfg.uploadLimit) {
            throw new common_1.BadRequestException(`Exceeded the limit on the number of images: ${fileCfg.uploadLimit}`);
        }
        images.forEach((img) => {
            if (!/image\/*/.test(img.mimetype)) {
                throw new common_1.BadRequestException(`Unsupported file type, file: ${img.originalname}`);
            }
            if (img.size > fileCfg.maxSize) {
                throw new common_1.BadRequestException(`Exceeded the file size limit: ${fileCfg.maxSize} bytes, file: ${img.originalname}`);
            }
        });
    }
};
exports.validateImages = validateImages;
//# sourceMappingURL=validate-images.js.map