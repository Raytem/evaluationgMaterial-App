import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  RequestTimeoutException,
} from '@nestjs/common';
import {
  Observable,
  TimeoutError,
  catchError,
  tap,
  throwError,
  timeout,
} from 'rxjs';

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const before = Date.now();

    const timeout_ms = 20000;

    return next.handle().pipe(
      timeout(timeout_ms),
      tap(() => console.log(`----Request time: ${Date.now() - before}ms`)),
      catchError((err) => {
        if (err instanceof TimeoutError) {
          return throwError(
            () =>
              new RequestTimeoutException(
                `Request time limit: ${timeout_ms}ms`,
              ),
          );
        }
        return throwError(() => err);
      }),
    );
  }
}
