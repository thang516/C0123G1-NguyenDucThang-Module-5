package com.example.thi.controller;

import com.example.thi.model.Bill;
import com.example.thi.service.IBillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/bill")
@CrossOrigin("*")
public class RESTBillController {

    @Autowired
    private IBillService billService;



    @GetMapping("")
    public ResponseEntity<List<Bill>> getList() {
        return new ResponseEntity<>(billService.getAll(), HttpStatus.OK);
    }



    @DeleteMapping("/{id}")
    public void deleteBill (@PathVariable("id") Integer id) {
        billService.deleteById(id);
    }

    @PostMapping("/create")
    public void createBill(@RequestBody Bill bill){
        billService.createBill(bill);
    }
}
