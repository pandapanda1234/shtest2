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


//CORS設定のためのアノテーション、(origins="*")は全てのオリジン(http://...)からのリクエストを許可する
@CrossOrigin(origins="*")

//JSONやXMLを返すアノテーション、HTTPリクエストを受け取りHTTPレスポンスを返す
@RestController

//ベースURLを設定するアノテーション←URLは(http://.../DBJoin)となる
@RequestMapping("/DBJoin")


public class DBJoinController {
	
	//インスタンスを生成するアノテーション
	@Autowired
	
	//JoinListRepository型のjoinListRepoをインスタンス化
	private JoinListRepository joinListRepo;
	
	//インスタンスを生成するアノテーション
	@Autowired
	
	//JoinListRemarksRepository型のjoinListRemarksRepoをインスタンス化
	private JoinListRemarksRepository joinListRemarksRepo;
	
	
	//HTTPリクエストのGETリクエストを受け取る←("/JoinList")は厳密には@RequestMappingから(http://.../DBJoin/JoinList)のURLとなる
	@GetMapping("/JoinList")
	
	//GETリクエストが来た時に、JoinList型のListを戻り値に持つJoinListSendメソッドを実行する
	public List<JoinList> JoinListSend(){

		//JoinList型Listの変数listに、JoinListRepoのJoinMethodメソッドの実行結果を代入する
		List<JoinList> list = joinListRepo.JoinMethod();
		
		//listを返す
		return list;
		
	}
	
	//HTTPリクエストのPOSTリクエストを受け取る←("/JoinListInsert")は厳密には@RequestMappingから(http://.../DBJoin/JoinListInsert)のURLとなる
	@PostMapping("/JoinListInsert")
	
	//POSTリクエストが来た時に、引数JoinListRemarks型のlistから、String型を戻り値に持つJoinListInsertを実行する
	//←@RequestBodyはHTTPリクエストボディからデータを受け取るアノテーション
	public String JoinListInsert(@RequestBody JoinListRemarks list) {
		
		//String型の変数nameに、listのNameを取得し代入する
		String name = list.getName();
		
		//int型の変数ageに、listのAgeを取得し代入する
		int age = list.getAge();
		
		//String型の変数remarksに、"テスト"を代入する
		String remarks = "テスト";
		
		//String型の変数hobbyに、listのhobbyを取得し代入する
		String hobby = list.getHobby();
		
		//String型の変数skillに、listのskillを」取得し代入する
		String skill = list.getSkill();
		
		//nameが""、またはageが0、またはremarksが""、またはhobbyが""、またはskillが""の時に実行する
		if("".equals(name) || age==0 || "".equals(remarks) || "".equals(hobby) || "".equals(skill)) {
			
			//"Error"を返す
			return "Error";
			
		//if文に該当しない場合に実行する
		}else {
		
			//引数name,age,remarksからJoinListRemarksRepoのJoinListInsert_name_age_list2メソッドを実行する
			joinListRemarksRepo.JoinListInsert_name_age_list2(name,age,remarks);
			
			//引数name,hobby,skillかたJoinListRemarksRepoのJoinListInsert_name_hobby_listメソッドを実行する
			joinListRemarksRepo.JoinListInsert_name_hobby_list(name,hobby,skill);
			
			//"Success"を返す
			return "Success";
		
		}

	}
}
