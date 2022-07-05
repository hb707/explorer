import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { BlockModule } from './block/block.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    BlockModule,
    TransactionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
