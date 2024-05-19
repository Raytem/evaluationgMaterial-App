import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpExceptionBody,
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

    const errorResponse: HttpExceptionBody =
      exception instanceof HttpException
        ? {
            statusCode: exception.getStatus(),
            //@ts-ignore
            message: exception.getResponse()?.message || exception.message,
            //@ts-ignore
            error: exception.getResponse()?.error || exception.message,
          }
        : {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: 'Internal server error',
            error: 'Something wend wrong',
          };

    const path = httpAdapter.getRequestUrl(context.getRequest());

    const responseBody: HttpExceptionBody = errorResponse;

    console.log('');
    this.logger.error('Error');
    console.log(responseBody);

    console.log(exception);

    httpAdapter.reply(context.getResponse(), responseBody, errorResponse.statusCode);
  }
}
