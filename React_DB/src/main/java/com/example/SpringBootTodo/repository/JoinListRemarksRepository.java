package com.example.SpringBootTodo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.SpringBootTodo.model.JoinListRemarks;

import jakarta.transaction.Transactional;

//<JoinListRemarks(Entityのクラス名),integer(Entityの主キーの型)>を設定したJpaRepositoryを継承し、interface JoinListRemarksRepositoryを作成する
public interface JoinListRemarksRepository extends JpaRepository<JoinListRemarks,Integer>{
	
	//@Queryでinsert,update,deleteを行うときに必要なアノテーション←これがなかったらselectクエリと見なされてエラーが出る
	@Modifying
	
	//トランザクション管理をするアノテーション←@Modifyingとセットで使う
	@Transactional
	
	//@Query内でcreatetb_db.name_age_list2のname,age,remarksに、変数:name,:age,:remarksを追加するクエリを書く
	//←nativeQuery = true を指定することで、JPQL ではなくSQLによる問い合わせができる
	@Query(value="INSERT INTO createtb_db.name_age_list2(name,age,remarks) "
			+ "VALUES(:name,:age,:remarks)",nativeQuery=true)
	
	//引数name,age,remarksを持つ戻り値無しのメソッドJoinListInsert_name_age_list2を作成する
	//←@Paramで@Query内の:name,:age,:remarksにマッピングしている
	void JoinListInsert_name_age_list2(@Param("name") String name,@Param("age") int age,@Param("remarks") String remarks);

	
	//@Queryでinsert,update,deleteを行うときに必要なアノテーション←これがなかったらselectクエリと見なされてエラーが出る
	@Modifying
	
	//トランザクション管理をするアノテーション←@Modifyingとセットで使う
	@Transactional
	
	//@Query内でcreatetb_db.name_hobby_listのname,hobby,skillに、変数:name,:hobby,:skillを追加するクエリを書く
	//←nativeQuery = true を指定することで、JPQL ではなくSQLによる問い合わせができる
	@Query(value="INSERT INTO createtb_db.name_hobby_list(name,hobby,skill) "
			+ "VALUES(:name,:hobby,:skill)",nativeQuery=true)
	
	//引数name,hobby,skillを持つ戻り値無しのメソッドJoinListInsert_name_hobby_listを作成する
	//←@Paramで@Query内の:name,:hobby,:skillにマッピングしている
	void JoinListInsert_name_hobby_list(@Param("name") String name,@Param("hobby") String hobby,@Param("skill") String skill);

}
