package com.example.SpringBootTodo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;


//name_age_list2とname_hobby_listをnameを基準にJOINする

//Getterを自動生成するアノテーション
@Getter

//Setterを自動生成するアノテーション
@Setter

//Entityクラスであることを宣言するアノテーション
@Entity

public class JoinList {
	
	//Entityの主キーを設定する
	@Id
	
	//Integer型の変数idを宣言する
	private Integer id;
	
	//String型の変数nameを宣言する
	private String name;
	
	//int型の変数ageを宣言する
	private int age;
	
	//String型の変数hobbyを宣言する
	private String hobby;
	
	//String型の変数skillを宣言する
	private String skill;
	

}
