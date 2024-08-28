package com.example.springtest.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.springtest.model.NameAge2Model;

@Repository // DB操作をするリポジトリクラスと認識させる
// name_age_list2とname_hobby_listテーブルの操作を行うクラス
public interface NameAge2Repository extends JpaRepository<NameAge2Model, Integer> {

    // 情報のリストを取得するSQL文
    static final String GET_LIST_SQL = """
        SELECT 
            createtb_db.name_age_list2.id, 
            name, 
            age, 
            remarks, 
            hobby, 
            skill 
        FROM 
            createtb_db.name_age_list2 
            INNER JOIN createtb_db.name_hobby_list 
                USING (name);
        """;

    // SQL文をGET_LIST_SQLとしたネイティブSQLクエリを行うメソッドであることを指定
    @Query(value = GET_LIST_SQL, nativeQuery = true)
    // 情報のリストを返す関数
    List<NameAge2Model> getAllJoined();

    // 指定された名前を持つ人の情報を取得するSQL文
    static final String GET_DETAIL_SQL = """
        SELECT 
            createtb_db.name_age_list2.id, 
            name, 
            age, 
            remarks, 
            hobby, 
            skill 
        FROM 
            createtb_db.name_age_list2 
            INNER JOIN createtb_db.name_hobby_list 
                USING (name) 
        WHERE 
            name = :name;
        """;

    // SQL文をGET_DETAIL_SQLとしたネイティブSQLクエリを行うメソッドであることを指定
    @Query(value = GET_DETAIL_SQL, nativeQuery = true)
    // 文字列型nameを引数として引数nameを名前に持つ人の情報を返す関数
    // 変数nameがSQL文の:nameに埋め込まれる
    List<NameAge2Model> getDetail(@Param("name") String name);

    // 指定された名前を持つ人の数を取得するSQL文
    static final String COUNT_SQL = """
        SELECT 
            count(name) 
        FROM 
            createtb_db.name_age_list2 
        WHERE 
            name = :name;
        """;

    // SQL文をCOUNT_SQLとしたネイティブSQLクエリを行うメソッドであることを指定
    @Query(value = COUNT_SQL, nativeQuery = true)
    // 文字列型nameを引数として引数nameを名前に持つ人の数を返す関数
    // 変数nameがSQL文の:nameに埋め込まれる
    int getCount(@Param("name") String name);

    // 指定された名前、年齢、備考を持つ人を登録するSQL文
    static final String CREATE_NAME_AGE_SQL = """
        INSERT 
        INTO createtb_db.name_age_list2(name, age, remarks) 
        VALUES (:name, :age, :remarks);
        """;
        
    @Modifying // データの変更を行うことを示す
    @Transactional // トランザクションを行うことを示す
    // SQL文をCREATE_NAME_AGE_SQLとしたネイティブSQLクエリを行うメソッドであることを指定
    @Query(value = CREATE_NAME_AGE_SQL, nativeQuery = true)
    // 文字列型name、整数型age、文字列型remarksを引数として引数の情報を登録し、変更した行数を返す関数
    // 変数name,age,remarksがそれぞれSQL文の:name,:age,:remarksに埋め込まれる
    int saveNewNameAge(@Param("name") String name, @Param("age") Integer age, @Param("remarks") String remarks);

    // 指定された名前、趣味、スキルを持つ人を登録するSQL文
    static final String CREATE_HOBBY_SKILL_SQL = """
        INSERT 
        INTO createtb_db.name_hobby_list(name, hobby, skill) 
        VALUES (:name, :hobby, :skill);
        """;
        
    @Modifying // データの変更を行うことを示す
    @Transactional // トランザクションを行うことを示す
    // SQL文をCREATE_HOBBY_SKILL_SQLとしたネイティブSQLクエリを行うメソッドであることを指定
    @Query(value = CREATE_HOBBY_SKILL_SQL, nativeQuery = true)
    // 文字列型name、文字列型hobby、文字列型skillを引数として引数の情報を登録し、変更した行数を返す関数
    // 変数name,hobby,skillがそれぞれSQL文の:name,:hobby,:skillに埋め込まれる
    int saveNewHobbySkill(@Param("name") String name, @Param("hobby") String hobby, @Param("skill") String skill);

    // 指定された名前を持つ人の年齢、備考を修正するSQL文
    static final String UPDATE_NAME_AGE_SQL = """
        UPDATE createtb_db.name_age_list2 
        SET 
        age = :age 
        WHERE 
            name = :name;
        """;

    @Modifying // データの変更を行うことを示す
    @Transactional // トランザクションを行うことを示す
    // SQL文をUPDATE_NAME_AGE_SQLとしたネイティブSQLクエリを行うメソッドであることを指定
    @Query(value = UPDATE_NAME_AGE_SQL, nativeQuery = true)
    // 文字列型name、整数型age、文字列型remarksを引数として引数を用いて情報を修正し、変更した行数を返す関数
    // 変数name,age,remarksがそれぞれSQL文の:name,:age,:remarksに埋め込まれる
    int updateNameAge(@Param("name") String name, @Param("age") Integer age);
    
    // 指定された名前を持つ人の趣味、スキルを修正するSQL文
    static final String UPDATE_HOBBY_SKILL_SQL = """
        UPDATE createtb_db.name_hobby_list 
        SET
            hobby = :hobby, 
            skill = :skill 
        WHERE 
            name = :name;
        """;

    @Modifying // データの変更を行うことを示す
    @Transactional // トランザクションを行うことを示す
    // SQL文をUPDATE_HOBBY_SKILL_SQLとしたネイティブSQLクエリを行うメソッドであることを指定
    @Query(value = UPDATE_HOBBY_SKILL_SQL, nativeQuery = true)
    // 文字列型name、文字列型hobby、文字列型skillを引数として引数を用いて情報を修正し、変更した行数を返す関数
    // 変数name,hobby,skillがそれぞれSQL文の:name,:hobby,:skillに埋め込まれる
    int updateHobbySkill(@Param("name") String name, @Param("hobby") String hobby, @Param("skill") String skill);

    // 指定された名前を持つ人の情報を削除するSQL文
    static final String DELETE_SQL = """
        DELETE createtb_db.name_age_list2, 
        createtb_db.name_hobby_list 
        FROM 
            createtb_db.name_age_list2 
            INNER JOIN createtb_db.name_hobby_list 
                USING (name) 
        WHERE 
            name = :name;
        """;

    @Modifying // データの変更を行うことを示す
    @Transactional // トランザクションを行うことを示す
    // SQL文をDELETE_SQLとしたネイティブSQLクエリを行うメソッドであることを指定
    @Query(value = DELETE_SQL, nativeQuery = true)
    // 文字列型nameを引数として指定された名前を持つ情報を削除し、変更した行数を返す関数
    // 変数nameがSQL文の:nameに埋め込まれる
    int deleteByName(@Param("name") String name);

}
