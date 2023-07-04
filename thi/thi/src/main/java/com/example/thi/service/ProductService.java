package com.example.thi.service;

import com.example.thi.model.Product;
import com.example.thi.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {

    @Autowired
    private IProductRepository iProductRepository;
    @Override
    public List<Product> getAll() {
        return iProductRepository.getAll();
    }
}
