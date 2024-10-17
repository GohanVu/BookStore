package com.gohanvu.bookstore.repositories;

import com.gohanvu.bookstore.models.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IBookRepository extends JpaRepository<Book,Integer> {
}
