package com.example.thi.service;


import com.example.thi.model.Bill;

import java.util.List;

public interface IBillService {

    List<Bill> getAll();

    void deleteById(Integer id);

    void createBill(Bill bill);
}
