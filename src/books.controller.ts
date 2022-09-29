import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Book } from './book.model';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}
  @Get()
  getAllt(): Book[] {
    return this.booksService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number): Book {
    return this.booksService.getOne(id);
  }

  @Post()
  create(@Body() book: Book): string {
    this.booksService.create(book);
    return 'Book create';
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() book: Book): string {
    this.booksService.update(id, book);
    return `Book ${id} updated`;
  }

  @Delete(':id')
  delete(@Param('id') id: number): string {
    this.booksService.delete(id);
    return `Book ${id} deleted`;
  }
}
