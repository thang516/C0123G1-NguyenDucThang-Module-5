package com.example.thi.repository;

import com.example.thi.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IProductRepository extends JpaRepository<Product,Integer> {
    @Query(value = "SELECT c FROM Product  c")
    List<Product> getAll();
}
