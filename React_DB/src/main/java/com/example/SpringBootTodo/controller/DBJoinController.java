package com.example.SpringBootTodo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.SpringBootTodo.model.JoinList;
import com.example.SpringBootTodo.model.JoinListRemarks;
import com.example.SpringBootTodo.repository.JoinListRemarksRepository;
import com.example.SpringBootTodo.repository.JoinListRepository;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/DBJoin")
public class DBJoinController {
	
	//Repositoryをインスタンス化
	@Autowired
	private JoinListRepository joinListRepo;
	@Autowired
	private JoinListRemarksRepository joinListRemarksRepo;
	

	
	@GetMapping("/JoinList")
	public List<JoinList> JoinListSend(){
		System.out.println("test1");

		List<JoinList> list = joinListRepo.JoinMethod();
		System.out.println("test2");
		return list;
		
	}
	
	@PostMapping("/JoinListInsert")
	public String JoinListInsert(@RequestBody JoinListRemarks list) {
		String name = list.getName();
		int age = list.getAge();
		String remarks = "永遠の17才";
		String hobby = list.getHobby();
		String skill = list.getSkill();
		
		if("".equals(name) || age==0 || "".equals(remarks) || "".equals(hobby) || "".equals(skill)) {
			
			return "Error";
		}else {
		
		joinListRemarksRepo.JoinListInsert_name_age_list2(name,age,remarks);
		
		joinListRemarksRepo.JoinListInsert_name_hobby_list(name,hobby,skill);
		
		System.out.println("あいうえお");
		
		return "Success";
		
	}

}
}
