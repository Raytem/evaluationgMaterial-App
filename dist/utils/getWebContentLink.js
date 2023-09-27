"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWebContentLink = void 0;
const getWebContentLink = (fileName) => {
    return `${process.env.APP_URL}/${process.env.APP_STATIC_DIR_NAME}/${fileName}`;
};
exports.getWebContentLink = getWebContentLink;
//# sourceMappingURL=getWebContentLink.js.map