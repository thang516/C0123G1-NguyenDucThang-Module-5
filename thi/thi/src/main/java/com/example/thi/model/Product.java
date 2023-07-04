package com.example.thi.model;

import com.sun.istack.NotNull;
import org.springframework.lang.NonNull;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity

public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id ;
    @NotNull
    private String nameProduct;
    @NotNull
    private Double price ;
    @NotNull
    private  String typeProduct;


    public Product() {
    }

    public Product(Integer id, String nameProduct, Double price, String typeProduct) {
        this.id = id;
        this.nameProduct = nameProduct;
        this.price = price;
        this.typeProduct = typeProduct;
    }

    public Product(String nameProduct, Double price, String typeProduct) {
        this.nameProduct = nameProduct;
        this.price = price;
        this.typeProduct = typeProduct;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNameProduct() {
        return nameProduct;
    }

    public void setNameProduct(String nameProduct) {
        this.nameProduct = nameProduct;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getTypeProduct() {
        return typeProduct;
    }

    public void setTypeProduct(String typeProduct) {
        this.typeProduct = typeProduct;
    }
}
