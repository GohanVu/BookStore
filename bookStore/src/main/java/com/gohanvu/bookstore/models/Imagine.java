// Imagine.java
package com.gohanvu.bookstore.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Imagine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;


    private String url;
}