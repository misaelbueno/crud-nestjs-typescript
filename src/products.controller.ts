import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getAllt(): string {
    return 'List all products';
  }

  @Get(':id')
  getOne(@Param('id') id: number): string {
    return `return datas of products ${id}`;
  }

  @Post()
  create(@Body() product: object): string {
    console.log(product);
    return 'Product create';
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() product: object): string {
    console.log(product);
    return `Product ${id} updated`;
  }

  @Delete(':id')
  delete(@Param('id') id: number): string {
    return `Product ${id} deleted`;
  }
}
