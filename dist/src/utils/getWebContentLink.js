"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWebContentLink = void 0;
const node_env_1 = require("../enums/node-env");
const getWebContentLink = (fileName, materialFolder) => {
    let serverUrl;
    if (process.env.NODE_ENV === node_env_1.NodeEnv.DEVELOPMENT) {
        serverUrl = process.env.APP_URL;
    }
    else {
        serverUrl = process.env.APP_PROXY_URL;
    }
    return `${serverUrl}/${process.env.FILE_STATIC_DIR_NAME}/${process.env.FILE_MATERIAL_IMAGES_DIR_NAME}/${materialFolder}/${fileName}`;
};
exports.getWebContentLink = getWebContentLink;
//# sourceMappingURL=getWebContentLink.js.map