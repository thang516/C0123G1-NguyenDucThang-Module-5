package com.example.thi.service;

import com.example.thi.model.Bill;
import com.example.thi.repository.IBillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BillService implements IBillService{
    @Autowired
    private IBillRepository billRepository;


    @Override
    public List<Bill> getAll() {
        return billRepository.findAllBill();
    }

    @Override
    public void deleteById(Integer id) {
        billRepository.deleteByIdBill(id);
    }

    @Override
    public void createBill(Bill bill) {
        billRepository.createBill(bill.getBillCode(),bill.getDate(),bill.getTotal(),bill.getAmount(),bill.getProductIdNumber());
    }
}
