import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Transaction } from '../transaction/transaction.entity';

@Entity('BLOCK')
export class Block {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'text',
    name: 'DIFFICULTY',
  })
  difficulty: string;

  @Column({
    type: 'text',
    name: 'EXTRA_DATA',
  })
  extraData: string;

  @Column({
    type: 'int',
    name: 'GAS_LIMIT',
  })
  gasLimit: number;

  @Column({
    type: 'int',
    name: 'GAS_USED',
  })
  gasUsed: number;

  @Column({
    type: 'text',
    name: 'HASH',
  })
  hash: string;

  // ❗️ 얘는 필요없으면 삭제하기
  @Column({
    type: 'text',
    name: 'LOGS_BLOOM',
  })
  logsBloom: string;

  @Column({
    type: 'text',
    name: 'MINER',
  })
  miner: string;

  @Column({
    type: 'text',
    name: 'MIX_HASH',
  })
  mixHash: string;

  @Column({
    type: 'text',
    name: 'NONCE',
  })
  nonce: string;

  @Column({
    type: 'int',
    name: 'NUMBER',
  })
  number: number;

  @Column({
    type: 'text',
    name: 'PARENT_HASH',
  })
  parentHash: string;

  @Column({
    type: 'text',
    name: 'RECEIPTS_ROOT',
  })
  receiptsRoot: string;

  @Column({
    type: 'text',
    name: 'SHA3_UNCLES',
  })
  sha3Uncles: string;

  @Column({
    type: 'int',
    name: 'SIZE',
  })
  size: number;

  @Column({
    type: 'text',
    name: 'STATE_ROOT',
  })
  stateRoot: string;

  @Column({
    type: 'int',
    name: 'TIMESTAMP',
  })
  timestamp: number;

  @Column({
    type: 'text',
    name: 'TRANSACTION_ROOT',
  })
  transactionsRoot: string;
}
