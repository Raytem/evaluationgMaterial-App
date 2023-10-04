"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWebContentLink = void 0;
const getWebContentLink = (fileName, materialFolder) => {
    return `${process.env.APP_PROXY_URL}/${process.env.FILE_STATIC_DIR_NAME}/${process.env.FILE_MATERIAL_IMAGES_DIR_NAME}/${materialFolder}/${fileName}`;
};
exports.getWebContentLink = getWebContentLink;
//# sourceMappingURL=getWebContentLink.js.map