import { Controller, Get, Param, Query } from '@nestjs/common';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
  constructor(readonly transactionService: TransactionService) {}

  @Get('/list/:page')
  findAll(@Param('page') listPage: number, @Query('unit') recordUnit: number) {
    return this.transactionService.findAll(listPage, recordUnit);
  }

  @Get('/find')
  getOne(@Query('hash') hash: string) {
    return this.transactionService.findOne(hash);
  }
}
