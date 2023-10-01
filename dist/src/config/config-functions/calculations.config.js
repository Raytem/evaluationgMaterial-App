"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculationsConfig = void 0;
const config_1 = require("@nestjs/config");
exports.calculationsConfig = (0, config_1.registerAs)('calculations', () => ({
    cntOfNumbersAfterPoint: +process.env.CNT_OF_NUMBERS_AFTER_POINT,
}));
//# sourceMappingURL=calculations.config.js.map