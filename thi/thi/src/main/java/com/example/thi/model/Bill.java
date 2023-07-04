package com.example.thi.model;

import com.sun.istack.NotNull;
import org.springframework.lang.NonNull;

import javax.persistence.*;

@Entity
public class Bill {

 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Integer id;

 @NotNull
 private Integer billCode;
 @NotNull
 private String date;
 @NotNull
 private Integer total;
 @NotNull
 private Integer amount;
 @ManyToOne
 @JoinColumn
 private Product productId;
 private boolean isDelete;

 private Integer productIdNumber;

 public Bill() {
 }

 public Bill(Integer id, Integer billCode, String date, Integer total, Integer amount, Product productId, boolean isDelete) {
  this.id = id;
  this.billCode = billCode;
  this.date = date;
  this.total = total;
  this.amount = amount;
  this.productId = productId;
  this.isDelete = isDelete;
 }

 public Bill(Integer billCode, String date, Integer total, Integer amount, Product productId, boolean isDelete) {
  this.billCode = billCode;
  this.date = date;
  this.total = total;
  this.amount = amount;
  this.productId = productId;
  this.isDelete = isDelete;
 }
 public Bill(Integer billCode, String date, Integer total, Integer amount, Integer productIdNumber, boolean isDelete) {
  this.billCode = billCode;
  this.date = date;
  this.total = total;
  this.amount = amount;
  this.productIdNumber = productIdNumber;
  this.isDelete = isDelete;
 }

 public Integer getId() {
  return id;
 }

 public void setId(Integer id) {
  this.id = id;
 }

 public Integer getBillCode() {
  return billCode;
 }

 public void setBillCode(Integer billCode) {
  this.billCode = billCode;
 }

 public String getDate() {
  return date;
 }

 public void setDate(String date) {
  this.date = date;
 }

 public Integer getTotal() {
  return total;
 }

 public void setTotal(Integer total) {
  this.total = total;
 }

 public Integer getAmount() {
  return amount;
 }

 public void setAmount(Integer amount) {
  this.amount = amount;
 }

 public Product getProductId() {
  return productId;
 }

 public void setProductId(Product productId) {
  this.productId = productId;
 }

 public boolean isDelete() {
  return isDelete;
 }

 public Integer getProductIdNumber() {
  return productIdNumber;
 }

 public void setProductIdNumber(Integer productIdNumber) {
  this.productIdNumber = productIdNumber;
 }

 public void setDelete(boolean delete) {
  isDelete = delete;
 }
}
