import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlockRepository } from './block.repository';
import { BlockController } from './block.controller';
import { BlockService } from './block.service';
import { Block } from './block.entity';
import { Transaction } from 'src/transaction/transaction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Block, Transaction])],
  controllers: [BlockController],
  providers: [BlockService],
})
export class BlockModule {}
