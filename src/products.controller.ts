import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Product } from './product.model';

@Controller('products')
export class ProductsController {
  products: Product[] = [
    new Product('LIV01', 'Algoritmos Para Viver', 39.9),
    new Product('LIV02', 'Código Limpo', 89.9),
    new Product('LIV03', 'Refatoração', 90.5),
  ];

  @Get()
  getAllt(): Product[] {
    return this.products;
  }

  @Get(':id')
  getOne(@Param('id') id: number): Product {
    return this.products[0];
  }

  @Post()
  create(@Body() product: Product): string {
    this.products.push(product);
    return 'Product create';
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() product: object): string {
    console.log(product);
    return `Product ${id} updated`;
  }

  @Delete(':id')
  delete(@Param('id') id: number): string {
    this.products.pop()
    return `Product ${id} deleted`;
  }
}
