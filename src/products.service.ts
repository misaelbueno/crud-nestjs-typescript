import { Injectable } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  products: Product[] = [
    new Product('LIV01', 'Algoritmos Para Viver', 39.9),
    new Product('LIV02', 'Código Limpo', 89.9),
    new Product('LIV03', 'Refatoração', 90.5),
  ];

  getAll(): Product[] {
    return this.products;
  }

  getOne(id: number): Product {
    return this.products[0];
  }

  create(product: Product) {
    this.products.push(product);
  }

  update(id: number, product:Product) {
    this.products[0];
  }

  delete(id: number) {
    this.products.pop();
  }
}
