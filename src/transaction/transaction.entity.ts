import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Block } from '../block/block.entity';

@Entity('TRANSACTION')
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  // @ManyToOne(() => Block, (block) => block.hash)
  // blockHash: Block;

  // @ManyToOne(() => Block, (block) => block.number)
  // blockNumber: Block;

  @Column({
    type: 'text',
    name: 'BLOCK_HASH',
  })
  blockHash: string;

  @Column({
    type: 'int',
    name: 'BLOCK_NUMBER',
  })
  blockNumber: number;

  @Column({
    type: 'text',
    name: 'FROM',
  })
  from: string;

  @Column({
    type: 'int',
    name: 'GAS',
  })
  gas: number;

  @Column({
    type: 'int',
    name: 'GAS_PRICE',
  })
  gasPrice: number;

  @Column({
    type: 'text',
    name: 'HASH',
  })
  hash: string;

  @Column({
    type: 'text',
    name: 'INPUT',
  })
  input: string;

  @Column({
    type: 'int',
    name: 'NONCE',
  })
  nonce: number;

  @Column({
    type: 'text',
    name: 'TO',
  })
  to: string;

  @Column({
    type: 'int',
    name: 'TRANSACTION_INDEX',
  })
  transactionIndex: number;

  @Column({
    type: 'text',
    name: 'VALUE',
  })
  value: string;

  // @Column({
  //   type: 'text',
  //   name: 'TYPE',
  // })
  // type: string;

  @Column({
    type: 'text',
    name: 'V',
  })
  v: string;

  @Column({
    type: 'text',
    name: 'R',
  })
  r: string;

  @Column({
    type: 'text',
    name: 'S',
  })
  s: string;
}
