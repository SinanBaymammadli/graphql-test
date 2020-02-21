import { Injectable } from '@nestjs/common';
import { Prisma } from './prisma.binding';

@Injectable()
export class PrismaService extends Prisma {
  constructor() {
    super({
      endpoint:
        'https://eu1.prisma.sh/sinanbaymammadli-c8fd1d/blog-graphql/dev',
      debug: false,
    });
  }
}
