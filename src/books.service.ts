import { Injectable } from '@nestjs/common';
import { Book } from './book.model';

@Injectable()
export class BooksService {
  books: Book[] = [
    new Book('LIV01', 'Algoritmos Para Viver', 39.9),
    new Book('LIV02', 'Código Limpo', 89.9),
    new Book('LIV03', 'Refatoração', 90.5),
  ];

  getAll(): Book[] {
    return this.books;
  }

  getOne(id: number): Book {
    return this.books[0];
  }

  create(book: Book) {
    this.books.push(book);
  }

  update(id: number, book:Book) {
    this.books[0];
  }

  delete(id: number) {
    this.books.pop();
  }
}
