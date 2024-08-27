package com.example.SpringBootTodo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class JoinListRemarks {
	@Id //Entityの主キーを設定する
	@GeneratedValue(strategy = GenerationType.IDENTITY) //Entityの値を自動採番する
	private Integer id;
	private String name;
	private int age;
	private String remarks;
	private String hobby;
	private String skill;

}
