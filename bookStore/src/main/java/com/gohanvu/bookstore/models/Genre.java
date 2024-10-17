// Genre.java
package com.gohanvu.bookstore.models;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Genre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String name;

    // Add this constructor
    public Genre(Integer id) {
        this.id = id;
    }

    // Optionally, add a default constructor if not already present
    public Genre() {
    }
}