import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World mahesh! ci cd pipline is all done!!';
  }
}
