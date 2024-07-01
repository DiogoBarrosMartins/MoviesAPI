import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to this great movie API! Hoping to hear from you soon!';
  }
}
