"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postgresConfig = void 0;
const config_1 = require("@nestjs/config");
const string_to_boolean_1 = require("../../utils/string-to-boolean");
exports.postgresConfig = (0, config_1.registerAs)('postgres', () => ({
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: (0, string_to_boolean_1.stringToBoolean)(process.env.DB_SYNCHRONIZE),
}));
//# sourceMappingURL=postgres.config.js.map