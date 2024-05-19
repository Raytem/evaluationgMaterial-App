import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './decorators/public.decorator';
import { UserWithEmailNotFound } from './exceptions/user-with-email-not-found';

@Public()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    throw new UserWithEmailNotFound('Danik1320@yandex.by');
    return this.appService.getHello();
  }
}
