"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
const config_1 = require("@nestjs/config");
exports.appConfig = (0, config_1.registerAs)('app', () => ({
    proxyPort: +process.env.APP_PROXY_PORT,
    proxyUrl: process.env.APP_PROXY_URL,
    port: +process.env.APP_PORT,
    url: process.env.APP_URL,
    host: process.env.APP_HOST,
}));
//# sourceMappingURL=app.config.js.map