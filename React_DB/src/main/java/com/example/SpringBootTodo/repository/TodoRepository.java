package com.example.SpringBootTodo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.SpringBootTodo.model.Name_age_list;

 //Repositoryクラスであることを示す
public interface TodoRepository extends JpaRepository<Name_age_list,Integer>{
	

}
