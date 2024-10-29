package com.gohanvu.bookstore.services;

import com.gohanvu.bookstore.models.Book;
import org.springframework.data.domain.Page;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import java.util.List;

public interface IBookService {
    List<Book> getAllBooks();
    Book getBookById(Integer id);
    Book createBook(Book book);
    Book updateBook(Integer id, Book book);
    void deleteBook(Integer id);



    Page<Book> getBooksPage(Pageable pageable);

    List<Book> findBookByTitleContainingIgnoreCase(String name);
}