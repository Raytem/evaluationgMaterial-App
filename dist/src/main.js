"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const swagger_config_1 = require("../swagger.config");
const path = require("path");
const serve = require("express-static");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const port = configService.get('app.port') || 3000;
    const staticDirName = configService.get('file.staticDirName');
    const staticDirPath = path.join(process.cwd(), staticDirName);
    app.use(`/${staticDirName}`, serve(staticDirPath));
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
    }));
    (0, swagger_config_1.setupSwagger)(app);
    await app.listen(port);
    console.log(`----Server started on port: ${port}\n`);
}
bootstrap();
//# sourceMappingURL=main.js.map