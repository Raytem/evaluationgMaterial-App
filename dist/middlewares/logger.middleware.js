"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerMiddleware = void 0;
const common_1 = require("@nestjs/common");
class LoggerMiddleware {
    constructor() {
        this.logger = new common_1.Logger(LoggerMiddleware.name);
    }
    use(req, res, next) {
        const loggerBody = {
            method: req.method,
            path: req.path,
            params: req.params,
            query: req.query,
            body: req.body,
        };
        console.log('');
        this.logger.log('New request');
        console.log(loggerBody);
        next();
    }
}
exports.LoggerMiddleware = LoggerMiddleware;
//# sourceMappingURL=logger.middleware.js.map