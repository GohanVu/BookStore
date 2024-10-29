package com.gohanvu.bookstore.repositories;

import com.gohanvu.bookstore.models.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IBookRepository extends JpaRepository<Book,Integer> {


    Page<Book> findAll(Pageable pageable);

    List<Book> findBookByTitleContainingIgnoreCase(String name);

}
