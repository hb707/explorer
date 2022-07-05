import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Block } from './block.entity';
import { Repository } from 'typeorm';
import { Transaction } from 'src/transaction/transaction.entity';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:9000'));

@Injectable()
export class BlockService {
  constructor(
    @InjectRepository(Block)
    private blockRepository: Repository<Block>,

    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,
  ) {
    this.blockRepository = blockRepository;
    this.transactionRepository = transactionRepository;
  }

  async getAllBlock() {
    try {
      const block_number = await web3.eth.getBlockNumber();
      for (let i = 1; i <= block_number; i++) {
        const block = await web3.eth.getBlock(i, true);
        const { transactions, uncles, ...rest } = block;
        transactions.map(async (tx: Transaction) => {
          const txEntity = this.transactionRepository.create(tx);
          await this.transactionRepository.save(txEntity);
        });
        const blockEntity = this.blockRepository.create(rest);
        await this.blockRepository.save(blockEntity);
        console.log('db에 block, tx 추가됨');
      }
      return { isError: false, value: undefined };
    } catch (e) {
      console.log(e);
      return { isError: true, error: 'cannot get block data from geth' };
    }
  }

  async getRestBlock() {
    const blockNumber = await web3.eth.getBlockNumber();
    const last = await this.blockRepository.find({
      order: {
        number: 'DESC',
      },
    });
    console.log(last[0]);
    const currentMyBlock = last[0].number;
    console.log(blockNumber, currentMyBlock);
    if (currentMyBlock < blockNumber) {
      console.log(
        `블록이 ${blockNumber - currentMyBlock}개 모자랍니다. db에 추가`,
      );
      for (let i = currentMyBlock + 1; i <= blockNumber; i++) {
        const block = await web3.eth.getBlock(i, true);
        const { transactions, uncles, ...rest } = block;
        transactions.map(async (tx: Transaction) => {
          const txEntity = this.transactionRepository.create(tx);
          await this.transactionRepository.save(txEntity);
        });
        const blockEntity = this.blockRepository.create(rest);
        await this.blockRepository.save(blockEntity);
      }
    } else {
      console.log('블록이 최신입니다.');
    }
    return '나머지블록';
  }

  findAll(): Promise<Block[]> {
    return this.blockRepository.find();
  }
}
