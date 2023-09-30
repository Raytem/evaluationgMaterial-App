import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionFilter.name);

  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}
  catch(exception: any, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;

    const context = host.switchToHttp();

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const path = httpAdapter.getRequestUrl(context.getRequest());

    const responseBody = {
      statusCode: httpStatus,
      errorMessage: exception.message,
      message: exception?.response?.message || exception.message,
      path,
      timestamp: new Date().toISOString(),
    };

    console.log('');
    this.logger.error('Error');
    console.log(responseBody);

    console.log(exception);

    httpAdapter.reply(context.getResponse(), responseBody, httpStatus);
  }
}
