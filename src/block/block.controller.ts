import { Controller, Get, Param, Query } from '@nestjs/common';
import { BlockService } from './block.service';

@Controller('block')
export class BlockController {
  constructor(readonly blockService: BlockService) {}

  @Get('/getAllfromGeth')
  getAll() {
    return this.blockService.getAllBlock();
  }

  @Get('/getRestFromGeth')
  getRest() {
    return this.blockService.getRestBlock();
  }

  @Get('/list/:page')
  findAll(@Param('page') listPage: number, @Query('unit') recordUnit: number) {
    return this.blockService.findAll(listPage, recordUnit);
  }

  @Get('/findByNumber/:number')
  getOne(@Param('number') BlockNumber: number) {
    return this.blockService.findOne(BlockNumber);
  }

  @Get('/findByHash/:hash')
  getOneByHash(@Param('hash') BlockHash: string) {
    return this.blockService.findOneByHash(BlockHash);
  }
}
