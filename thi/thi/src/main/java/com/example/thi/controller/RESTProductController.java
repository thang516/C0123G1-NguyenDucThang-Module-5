package com.example.thi.controller;

import com.example.thi.model.Product;
import com.example.thi.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
@RequestMapping("api/product")
@CrossOrigin("*")
public class RESTProductController {
    @Autowired
    private IProductService productService;

    @GetMapping("")
    public ResponseEntity<List<Product>> getList() {
        return new ResponseEntity<>(productService.getAll(), HttpStatus.OK);
    }
}
