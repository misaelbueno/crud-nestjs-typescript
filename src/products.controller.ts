import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Product } from './products.model';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @Get()
  getAllt(): Product[] {
    return this.productsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number): Product {
    return this.productsService.getOne(id);
  }

  @Post()
  create(@Body() product: Product): string {
    this.productsService.create(product);
    return 'Product create';
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() product: Product): string {
    this.productsService.update(id, product);
    return `Product ${id} updated`;
  }

  @Delete(':id')
  delete(@Param('id') id: number): string {
    this.productsService.delete(id);
    return `Product ${id} deleted`;
  }
}
