import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionRepository } from './transaction.repository';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { Transaction } from './transaction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction])],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionModule {}
