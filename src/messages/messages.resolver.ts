import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';

@Resolver()
export class MessagesResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query()
  messages(@Args() args: any) {
    return this.prisma.query.messages(args);
  }

  @Mutation()
  createMessage(@Args() args: any) {
    return this.prisma.mutation.createMessage(args);
  }
}
