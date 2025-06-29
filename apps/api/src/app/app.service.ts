import { Injectable } from '@nestjs/common';
import { CardDto } from '@nx-demo/util-dtos';

@Injectable()
export class AppService {
  getData(): CardDto[] {
    return [
      {
        title: 'Card 1',
        description: 'Content for card 1',
      },
      {
        title: 'Card 2',
        description: 'Content for card 2',
      },
      {
        title: 'Card 3',
        description: 'Content for card 3',
      },
    ];
  }
}
