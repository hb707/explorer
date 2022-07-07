import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from 'src/transaction/transaction.entity';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,
  ) {
    this.transactionRepository = transactionRepository;
  }

  findAll(_page: number, _unit: number): Promise<Transaction[]> {
    return this.transactionRepository.find({
      order: {
        id: 'DESC',
      },
      skip: (_page - 1) * _unit,
      take: _unit,
    });
  }

  findOne(_hash: string): Promise<Transaction> {
    return this.transactionRepository.findOne({
      where: {
        hash: _hash,
      },
    });
  }
}
