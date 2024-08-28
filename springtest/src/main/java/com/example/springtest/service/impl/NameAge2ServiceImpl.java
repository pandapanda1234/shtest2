package com.example.springtest.service.impl;

import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.NoSuchElementException;

import org.springframework.stereotype.Service;
import org.springframework.dao.OptimisticLockingFailureException;
import org.springframework.http.HttpStatus;

import com.example.springtest.model.NameAge2Model;
import com.example.springtest.repository.NameAge2Repository;
import com.example.springtest.service.NameAge2Service;

import lombok.RequiredArgsConstructor;

// 処理を行うサービスクラスであることを示す
@Service
// 必要なインスタンスを引数とするコンストラクタを生成する
@RequiredArgsConstructor
// 人物の情報の処理を実際に行うクラス
public class NameAge2ServiceImpl implements NameAge2Service {

    // 名前の上限文字数として整数型変数NAME_MAX_LENGTHに30を代入する。
    static final int NAME_MAX_LENGTH = 30;
    
    // 趣味の上限文字数として整数型変数HOBBY_MAX_LENGTHに255を代入する。
    static final int HOBBY_MAX_LENGTH = 255;
    
    // スキルの上限文字数として整数型変数SKILL_MAX_LENGTHに255を代入する。
    static final int SKILL_MAX_LENGTH = 255;

    // name_age_list2とname_hobby_listの操作を行うリポジトリクラスのインスタンスを宣言する。
    private final NameAge2Repository nameAge2Repository;

    // 2つのテーブルをJOINした人物情報の一覧を取得して返す関数
    @Override
    public List<NameAge2Model> getAllJoined() {
        // リポジトリインスタンスの、DBから情報を取得する処理の結果を返却する。
        return nameAge2Repository.getAllJoined();
    }
    
    // 文字列型nameを受け取り、引数の名前をもつ人物情報を取得した結果を返す関数
    @Override
    public Map<String, Object> getByName(String name) {
        
        try {
            // テーブル情報型リストresultListにリポジトリインスタンスの、DBから引数nameの名前を持つ人物の情報を取得する処理の結果を代入する。
            List<NameAge2Model> resultList = nameAge2Repository.getDetail(name);

            // resultListの要素の数が0なら
            if(resultList.size() == 0) {

                // 要素が存在しない例外を出す
                throw new NoSuchElementException();

            }

            // テーブル情報型resultにresultListの0番目（最初）の要素を代入する。
            NameAge2Model result = resultList.get(0);

            // 以下のメッセージによるマップ型を返却する。
            return Map.ofEntries(

                // キー"status"に対しHTTPステータスの OK をセットする。
                Map.entry("status", HttpStatus.OK),
                
                // キー"content"に対し変数resultをセットする。
                Map.entry("content", result)

            );

            // 引数不正の例外があった場合ここに移る
        } catch(IllegalArgumentException e) {
            
            // 以下のメッセージによるマップ型を返却する。
            return Map.ofEntries(

                // キー"status"に対しHTTPステータスの BAD_REQUEST をセットする。
                Map.entry("status", HttpStatus.BAD_REQUEST),

                // キー"message"に対しエラーメッセージをセットする。
                Map.entry("message", "Name is Illegal.")

            );

            // 要素が存在しない例外があった場合ここに移る
        } catch(NoSuchElementException e) {
            
            // 以下のメッセージによるマップ型を返却する。
            return Map.ofEntries(
                
                // キー"status"に対しHTTPステータスの NOT_FOUND をセットする。
                Map.entry("status", HttpStatus.NOT_FOUND),
                
                // キー"message"に対しエラーメッセージをセットする。
                Map.entry("message", "Not Found.")

            );

        }

    }
    
    // 2つのテーブルの人物情報が格納された型nameAgeを受け取り、引数の情報を登録した結果を返す関数
    @Override
    public Map<String, Object> saveNew(NameAge2Model nameAge) {

        // 文字列型nameに引数nameAgeの名前を取得した結果を代入する。
        String name = nameAge.getName();
        
        // 整数型ageに引数nameAgeの年齢を取得した結果を代入する。
        int age = nameAge.getAge();
        
        // 文字列型remarksとしてダミー文字列を代入する。
        String remarks = "XYZ";
        
        // 文字列型hobbyに引数nameAgeの趣味を取得した結果を代入する。
        String hobby = nameAge.getHobby();
        
        // 文字列型skillに引数nameAgeのスキルを取得した結果を代入する。
        String skill = nameAge.getSkill();

        try {

            // 整数型resultNameAgeにリポジトリインスタンスの引数で与えられた名前、年齢、備考を登録する処理を行い、結果を代入する。
            int resultNameAge = nameAge2Repository.saveNewNameAge(name, age, remarks);
            
            // 整数型resultHobbySkillにリポジトリインスタンスの引数で与えられた名前、趣味、スキルを登録する処理を行い、結果を代入する。
            int resultHobbySkill = nameAge2Repository.saveNewHobbySkill(name, hobby, skill);

            // 以下のメッセージによるマップ型を返却する。
            return Map.ofEntries(

                // キー"status"に対しHTTPステータスの OK をセットする。
                Map.entry("status", HttpStatus.OK),

                // キー"result_nameAge"に対し変数resultNameAgeをセットする。
                Map.entry("result_nameAge", resultNameAge),

                // キー"result_hobbyskill"に対し変数resultHobbySkillをセットする。
                Map.entry("result_hobbySkill", resultHobbySkill)

            );

            // 引数が不正、または更新競合時に書き込みが失敗した場合ここに移る
        } catch(IllegalArgumentException | OptimisticLockingFailureException e) {

            // 以下のメッセージによるマップ型を返却する。
            return Map.ofEntries(

                // キー"status"に対しHTTPステータスの BAD_REQUEST をセットする。
                Map.entry("status", HttpStatus.BAD_REQUEST),

                // キー"message"に対しエラーメッセージをセットする。
                Map.entry("message", "Create failed.")

            );

        }

    }
    
    // 2つのテーブルの人物情報が格納された型nameAgeを受け取り、引数の情報で修正した結果を返す関数
    @Override
    public Map<String, Object> update(NameAge2Model nameAge) {

        // 文字列型nameに引数nameAgeの名前を取得した結果を代入する。
        String name = nameAge.getName();
        
        // 整数型ageに引数nameAgeの年齢を取得した結果を代入する。
        int age = nameAge.getAge();

        // 文字列型hobbyに引数nameAgeの趣味を取得した結果を代入する。
        String hobby = nameAge.getHobby();

        // 文字列型skillに引数nameAgeのスキルを取得した結果を代入する。
        String skill = nameAge.getSkill();

        try {

            // 整数型resultNameAgeにリポジトリインスタンスの引数で与えられた名前の人物の年齢を修正する処理を行い、結果を代入する。
            int resultNameAge = nameAge2Repository.updateNameAge(name, age);
            
            // 整数型resultHobbySkillにリポジトリインスタンスの引数で与えられた名前の人物の趣味、スキルを修正する処理を行い、結果を代入する。
            int resultHobbySkill = nameAge2Repository.updateHobbySkill(name, hobby, skill);

            // 以下のメッセージによるマップ型を返却する。
            return Map.ofEntries(

                // キー"status"に対しHTTPステータスの OK をセットする。
                Map.entry("status", HttpStatus.OK),

                // キー"result_nameAge"に対し変数resultNameAgeをセットする。
                Map.entry("result_nameAge", resultNameAge),
                
                // キー"result_hobbySkill"に対し変数resultHobbySkillをセットする。
                Map.entry("result_hobbySkill", resultHobbySkill)

            );

            // 引数が不正、または更新競合時に書き込みが失敗した場合ここに移る
        } catch(IllegalArgumentException | OptimisticLockingFailureException e) {

            // 以下のメッセージによるマップ型を返却する。
            return Map.ofEntries(

                // キー"status"に対しHTTPステータスの BAD_REQUEST をセットする。
                Map.entry("status", HttpStatus.BAD_REQUEST),

                // キー"message"に対しエラーメッセージをセットする。
                Map.entry("message", "Update failed.")

            );
            
        }

    }

    // 2つのテーブルの人物情報が格納された型nameAgeを受け取り、引数の情報を削除した結果を返す関数
    @Override
    public Map<String, Object> delete(NameAge2Model nameAge) {

        // 文字列型nameに引数nameAgeの名前を取得した結果を代入する。
        String name = nameAge.getName();

        try {

            // 整数型resultにリポジトリインスタンスの引数で与えられた名前の人物情報を削除する処理を行い、結果を代入する。
            int result = nameAge2Repository.deleteByName(name);
            
            // 以下のメッセージによるマップ型を返却する。
            return Map.ofEntries(

                // キー"status"に対しHTTPステータスの OK をセットする。
                Map.entry("status", HttpStatus.OK),

                // キー"result"に対し変数resultをセットする。
                Map.entry("result", result)
            );

            // 引数が不正、または更新競合時に書き込みが失敗した場合ここに移る
        } catch(IllegalArgumentException | OptimisticLockingFailureException e) {

            // 以下のメッセージによるマップ型を返却する。
            return Map.ofEntries(

                // キー"status"に対しHTTPステータスの BAD_REQUEST をセットする。
                Map.entry("status", HttpStatus.BAD_REQUEST),

                // キー"message"に対しエラーメッセージをセットする。
                Map.entry("message", "Delete failed.")
            );
            
        }

    }

    // 2つのテーブルの人物情報が格納された型nameAgeと存在or非存在どちらのチェックを行うかを受け取り、引数が正しいかどうかを返す関数
    @Override
    public Map<String, Object> checkInputs(NameAge2Model nameAge, boolean expectsExsisting) {
        
        // 文字列型nameに引数nameAgeの名前を取得した結果を代入する。
        String name = nameAge.getName();
        
        // 整数型ageに引数nameAgeの年齢を取得した結果を代入する。
        int age = nameAge.getAge();

        // 文字列型hobbyに引数nameAgeの趣味を取得した結果を代入する。
        String hobby = nameAge.getHobby();

        // 文字列型skillに引数nameAgeのスキルを取得した結果を代入する。
        String skill = nameAge.getSkill();
        
        // 文字列型リストerrorMessageにArrayList型を初期化して代入する。
        List<String> errorMessage = new ArrayList<>();

        // 真偽値型existsにリポジトリインスタンスの引数で与えられた名前の人物情報の数を取得した結果が0を超える（存在する）かを代入する。
        boolean exists = nameAge2Repository.getCount(name) > 0;
        
        // 真偽値型succeededにtrueを代入する。
        boolean succeeded = true;
        
        // nameがnullまたは空文字列なら
        if(name == null || name.isEmpty()) {

            // errorMessageにエラーコードを追加する。
            errorMessage.add("name-empty");

            // succeededにfalseを代入する。
            succeeded = false;

        // そうでなく、nameの長さが名前の長さの最大値を超えたら
        } else if(name.length() > NAME_MAX_LENGTH) {

            // errorMessageにエラーコードを追加する。
            errorMessage.add("name-long");
            
            // succeededにfalseを代入する。
            succeeded = false;

        }
        
        // ageが0未満なら
        if(age < 0) {

            // errorMessageにエラーコードを追加する。
            errorMessage.add("age-negative");
            
            // succeededにfalseを代入する。
            succeeded = false;
            
        }

        // hobbyがnullまたは空文字列なら
        if(hobby == null || hobby.isEmpty()) {

            // errorMessageにエラーコードを追加する。
            errorMessage.add("hobby-empty");

            // succeededにfalseを代入する。
            succeeded = false;

        // そうでなく、hobbyの長さが趣味の長さの最大値を超えたら
        } else if(hobby.length() > HOBBY_MAX_LENGTH) {

            // errorMessageにエラーコードを追加する。
            errorMessage.add("hobby-long");
            
            // succeededにfalseを代入する。
            succeeded = false;

        }

        // skillがnullまたは空文字列なら
        if(skill == null || skill.isEmpty()) {
            errorMessage.add("skill-empty");

            // succeededにfalseを代入する。
            succeeded = false;
            
        // そうでなく、skillの長さがスキルの長さの最大値を超えたら
        } else if(skill.length() > SKILL_MAX_LENGTH) {

            // errorMessageにエラーコードを追加する。
            errorMessage.add("skill-long");
            
            // succeededにfalseを代入する。
            succeeded = false;
        }

        // nameを名前に持つ要素が存在することを期待する場合（編集・削除）
        if(expectsExsisting) {

            // nameを名前に持つ要素が存在しない場合
            if(!exists) {

                // errorMessageにエラーコードを追加する。
                errorMessage.add("name-not-exists");
            
                // succeededにfalseを代入する。
                succeeded = false;
            }

        // nameを名前に持つ要素が存在しないことを期待する場合（削除）
        } else {

            // nameを名前に持つ要素が存在する場合
            if(exists) {

                // errorMessageにエラーコードを追加する。
                errorMessage.add("name-exists");
            
                // succeededにfalseを代入する。
                succeeded = false;
            }

        }
        
        // 変数succeededがtrueなら（チェックが成功したなら）
        if(succeeded) {

            // 以下のメッセージによるマップ型を返却する。
            return Map.ofEntries(

                // キー"status"に対しHTTPステータスの OK をセットする。
                Map.entry("status", HttpStatus.OK)

            );
            
        } else {

            // 以下のメッセージによるマップ型を返却する。
            return Map.ofEntries(

                // キー"status"に対しHTTPステータスの BAD_REQUEST をセットする。
                Map.entry("status", HttpStatus.BAD_REQUEST),

                // errorMessageにエラーコードを追加する。
                Map.entry("message", errorMessage)
                
            );
    
        }
        
    }
    
}
