import { Controller, Get, Param } from '@nestjs/common';
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

  @Get('/findAll')
  findAll() {
    return this.blockService.findAll();
  }

  // @Get('/find/:number')
  // getOne(@Param('number') BlockNumber: number) {
  //   return this.blockService.getOne(BlockNumber);
  // }
}
