import { Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger(LoggerMiddleware.name);

  use(req: Request, res: Response, next: (error?: any) => void) {
    const loggerBody = {
      method: req.method,
      path: req.baseUrl,
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
