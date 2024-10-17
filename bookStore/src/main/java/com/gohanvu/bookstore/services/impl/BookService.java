package com.gohanvu.bookstore.services.impl;

import com.gohanvu.bookstore.models.Book;
import com.gohanvu.bookstore.repositories.IBookRepository;
import com.gohanvu.bookstore.services.IBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class BookService implements IBookService {
    @Autowired
    IBookRepository bookRepository;
    @Override
    public List<Book> getAllBook() {
        return  bookRepository.findAll();
    }
}
