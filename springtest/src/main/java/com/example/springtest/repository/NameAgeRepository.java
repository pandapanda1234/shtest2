package com.example.springtest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springtest.model.NameAgeModel;

@Repository
public interface NameAgeRepository extends JpaRepository<NameAgeModel, Integer> {
    
}
