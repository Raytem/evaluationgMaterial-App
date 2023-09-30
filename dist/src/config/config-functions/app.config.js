"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
const config_1 = require("@nestjs/config");
exports.appConfig = (0, config_1.registerAs)('app', () => ({
    host: process.env.APP_HOST,
    port: +process.env.APP_PORT,
}));
//# sourceMappingURL=app.config.js.map