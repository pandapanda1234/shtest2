package com.example.SpringBootTodo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.SpringBootTodo.model.JoinListRemarks;

import jakarta.transaction.Transactional;

public interface JoinListRemarksRepository extends JpaRepository<JoinListRemarks,Integer>{
	@Modifying
	@Transactional
	@Query(value="INSERT INTO createtb_db.name_age_list2(name,age,remarks) "
			+ "VALUES(:name,:age,:remarks)",nativeQuery=true)
	void JoinListInsert_name_age_list2(@Param("name") String name,@Param("age") int age,@Param("remarks") String remarks);

	@Modifying
	@Transactional
	@Query(value="INSERT INTO createtb_db.name_hobby_list(name,hobby,skill) "
			+ "VALUES(:name,:hobby,:skill)",nativeQuery=true)
	void JoinListInsert_name_hobby_list(@Param("name") String name,@Param("hobby") String hobby,@Param("skill") String skill);

}
