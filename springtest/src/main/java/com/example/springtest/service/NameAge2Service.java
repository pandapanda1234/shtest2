package com.example.springtest.service;

import java.util.List;
import java.util.Map;

import com.example.springtest.model.NameAge2Model;

// 人物の情報の処理を行うクラスを定義する
public interface NameAge2Service {

    // 2つのテーブルをJOINした人物情報の一覧を取得して返す関数
    public List<NameAge2Model> getAllJoined();

    // 文字列型nameを受け取り、引数の名前をもつ人物情報を取得した結果を返す関数
    public Map<String, Object> getByName(String name);

    // 2つのテーブルの人物情報が格納された型nameAgeを受け取り、引数の情報を登録した結果を返す関数
    public Map<String, Object> saveNew(NameAge2Model nameAge);
    
    // 2つのテーブルの人物情報が格納された型nameAgeを受け取り、引数の情報で修正した結果を返す関数
    public Map<String, Object> update(NameAge2Model nameAge);
    
    // 2つのテーブルの人物情報が格納された型nameAgeを受け取り、引数の情報を削除した結果を返す関数
    public Map<String, Object> delete(NameAge2Model nameAge);
    
    // 2つのテーブルの人物情報が格納された型nameAgeと存在or非存在どちらのチェックを行うかを受け取り、引数が正しいかどうかを返す関数
    public Map<String, Object> checkInputs(NameAge2Model nameAge, boolean expectsExsisting);

}
