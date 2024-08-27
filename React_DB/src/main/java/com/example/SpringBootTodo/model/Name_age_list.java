package com.example.SpringBootTodo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Table(name="name_age_list")
@Getter // フィールドのgetメソッド(id, content)を自動生成する
@Setter// フィールドのsetメソッド(id, content)を自動生成する
@Entity // データの入れ物であるEntityクラスであることを指定する

public class Name_age_list {
	@Id //Entityの主キーを設定する
	@GeneratedValue(strategy = GenerationType.IDENTITY) //Entityの値を自動採番する
	private Integer id;
	private String name;
	private int age;
	
}
