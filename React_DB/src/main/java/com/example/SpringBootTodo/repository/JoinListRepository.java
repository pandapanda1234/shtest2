package com.example.SpringBootTodo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.SpringBootTodo.model.JoinList;


//<JoinList(Entityのクラス名),integer(Entityの主キーの型)>を設定したJpaRepositoryを継承し、interface JoinListRepositoryを作成する
public interface JoinListRepository extends JpaRepository<JoinList,Integer>{
	
	
	//@QueryでSQL文を直接
	@Query(value="SELECT createtb_db.name_age_list2.id,createtb_db.name_age_list2.name,createtb_db.name_age_list2.age,"
			+ "createtb_db.name_hobby_list.hobby,createtb_db.name_hobby_list.skill FROM createtb_db.name_age_list2 "
			+ "INNER JOIN createtb_db.name_hobby_list ON createtb_db.name_age_list2.name = createtb_db.name_hobby_list.name",nativeQuery=true)
	public List<JoinList> JoinMethod();
	

}
