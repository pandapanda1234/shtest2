package com.example.springtest.model;

import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Getter // getterメソッドを生成する
@Setter // setterメソッドを生成する
@Entity // Repositoryで使用できるデータを表すEntityクラスと認識させる
// name_age_list2とname_hobby_listテーブルの情報を格納するクラス
public class NameAge2Model {
    
    @Id // 主キーであることを示す
    // 主キーをデータベースのID列から生成することを指定する
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    // name_age_list2テーブルのidカラム
    private Integer id;

    // name_age_list2テーブルのnameカラム
    private String name;

    // name_age_list2テーブルのageカラム
    private int age;

    // name_age_list2テーブルのremarksカラム
    private String remarks;

    // name_hobby_listテーブルのhobbyカラム
    private String hobby;

    // name_hobby_listテーブルのskillカラム
    private String skill;
    
}
