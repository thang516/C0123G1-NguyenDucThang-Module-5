package com.example.thi.repository;

import com.example.thi.model.Bill;
import com.example.thi.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface IBillRepository extends JpaRepository<Bill,Integer> {
    @Query(value = "SELECT s FROM  Bill s WHERE s.isDelete = false ")
    List<Bill> findAllBill();
    @Transactional
    @Modifying
    @Query(value = "UPDATE Bill b SET b.isDelete = true where b.id  = :id ")
    void deleteByIdBill(@Param("id") Integer id);
    @Transactional
    @Modifying
    @Query(value = "insert into bill (billCode,date,total,amount,productId) value (:billCode,:date,:total,:amount,:productIdNumber) ",nativeQuery = true)
    void createBill(@Param("billCode") Integer billCode ,@Param("date") String date,@Param("total") Integer total,@Param("amount") Integer amount,@Param("productIdNumber") Integer productIdNumber );
}
