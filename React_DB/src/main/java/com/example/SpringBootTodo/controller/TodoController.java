package com.example.SpringBootTodo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.SpringBootTodo.model.Name_age_list;
import com.example.SpringBootTodo.repository.NameAgeListRepository;

@CrossOrigin(origins = "*") 

@RestController
@RequestMapping("/DBConnect")
public class TodoController {
	

	@Autowired
	private  NameAgeListRepository name_age_list;
	
	
	
	@GetMapping("/name_age_list")
	public List<Name_age_list> nameAgeList(){
		
		System.out.println("test3");
		
		return name_age_list.findAll();
	}
	
	@PostMapping("/InsertList")
	public String InsertList(@RequestBody Name_age_list list){
		
		
		
		if("".equals(list.getName()) || list.getName().length() >= 20 || list.getAge() <=0 || list.getAge()>1000){
			
			String ErrorMessage = "Error";
			
			return ErrorMessage;
		}else {
			
			name_age_list.save(list);
			
			return "Success";
		}
		
		//return name_age_list.save(list);
		
	}
	
	@PostMapping("/UpdateList")
	public String UpdateList(@RequestBody Name_age_list list) {
		
		if("".equals(list.getName()) || list.getName().length() >= 20 || list.getAge() <=0 || list.getAge()>1000){
			
			String ErrorMessage = "Error";
			
			return ErrorMessage;
		}else {
			
			name_age_list.save(list);
			
			return "Success";
		}
	}
	

}
