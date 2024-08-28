package com.example.springtest;

import java.util.List;
import java.util.Map;

// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.springtest.model.NameAgeModel;
import com.example.springtest.model.NameAge2Model;
import com.example.springtest.service.FunctionService;
import com.example.springtest.service.NameAgeService;
import com.example.springtest.service.NameAge2Service;

import lombok.RequiredArgsConstructor;

// 必要なインスタンスを引数とするコンストラクタを生成する
@RequiredArgsConstructor
// メソッドの返り値をそのままレスポンスとする、アプリケーション全体の司令塔となるコントローラークラスであることを示す
@RestController
// http://localhost:3000 からの通信においてデータ通信を許可する
@CrossOrigin(origins = "http://localhost:3000")
// ブラウザからの通信を受け取り、サービスを処理した結果をブラウザに返すクラス
public class SpringTestController {

    // 人物情報に関する処理を行うサービスクラスのインスタンスを宣言する。
    private final NameAgeService nameAgeService;
    
    // 人物情報に関する処理を行うサービスクラス（新）のインスタンスを宣言する。
    private final NameAge2Service nameAge2Service;
    
    // サーバーの機能の処理を行うサービスクラスのインスタンスを宣言する。
    private final FunctionService functionService;

    // サーバーコンソールへのロガーを取得し、ロガー型loggerに代入する。
    // private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @GetMapping("/name-age")
    public List<NameAgeModel> nameAgeList() {
        return nameAgeService.findAll();
    }
    
    @GetMapping("/name-age/{id}")
    public ResponseEntity<Map<String, Object>> nameAgeDetail(@PathVariable("id") int id) {

        Map<String, Object> messageMap = nameAgeService.getById(id);

        return functionService.makeResponse(messageMap);
        
    }
    
    @PostMapping(value = "/name-age/check-create", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Map<String, Object>> createNameAgeCheck(@RequestBody NameAgeModel nameAge) {
        
        Map<String, Object> messageMap = nameAgeService.checkNameAge(nameAge);
        
        return functionService.makeResponse(messageMap);
        
    }
    
    @PostMapping(value = "/name-age/create", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Map<String, Object>> createName(@RequestBody NameAgeModel nameAge) {
        
        Map<String, Object> messageMap = nameAgeService.saveNew(nameAge);
        
        return functionService.makeResponse(messageMap);
        
    }
    
    @PostMapping(value = "/name-age/update", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Map<String, Object>> updateName(@RequestBody NameAgeModel nameAge) {
        
        Map<String, Object> messageMap = nameAgeService.update(nameAge);
        
        return functionService.makeResponse(messageMap);
        
    }
    
    @PostMapping(value = "/name-age/delete", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Map<String, Object>> deleteName(@RequestBody NameAgeModel nameAge) {
        
        Map<String, Object> messageMap = nameAgeService.delete(nameAge);
        
        return functionService.makeResponse(messageMap);

    }

    // --------

    // "/name-age2" へGETメソッドで通信を行ったときに処理される
    @GetMapping("/name-age2")
    // 人物情報の一覧を取得する処理
    public List<NameAge2Model> nameAge2List() {
        
        // サービスインスタンスの、2つのテーブルをJOINした人物情報の一覧を取得して返す
        return nameAge2Service.getAllJoined();
        
    }
    
    // "/name-age2/detail" へGETメソッドで通信を行ったときに処理される
    @GetMapping("/name-age2/detail")
    // リクエストパラメータnameで与えられた人物情報を取得する処理
    public ResponseEntity<Map<String, Object>> nameAge2Detail(@RequestParam("name") String name) {

        // レスポンス用のマップmessageMapに、人物情報サービスインスタンスの引数nameの名前をもつ人物情報を取得した結果を代入する。
        Map<String, Object> messageMap = nameAge2Service.getByName(name);

        // 機能サービスの、messageMapにHTTPステータスコードを付加したレスポンスを生成した結果を返却する。
        return functionService.makeResponse(messageMap);
        
    }

    // "/name-age2/check-create" へPOSTメソッドで通信を行ったときに処理され、リクエストボディとしてJSON形式を受け取ることを示す
    @PostMapping(value = "/name-age2/check-create", consumes = MediaType.APPLICATION_JSON_VALUE)
    // リクエストボディnameAgeで与えられた人物情報が登録時の情報として正しいか判定する処理
    public ResponseEntity<Map<String, Object>> createNameAge2Check(@RequestBody NameAge2Model nameAge) {
        
        // レスポンス用のマップmessageMapに、人物情報サービスインスタンスの引数nameAgeの人物情報が正しく、名前がDBに存在しないことを確認した結果を代入する。
        Map<String, Object> messageMap = nameAge2Service.checkInputs(nameAge, false);
        
        // 機能サービスの、messageMapにHTTPステータスコードを付加したレスポンスを生成した結果を返却する。
        return functionService.makeResponse(messageMap);
        
    }

    // "/name-age2/check-update" へPOSTメソッドで通信を行ったときに処理され、リクエストボディとしてJSON形式を受け取ることを示す
    @PostMapping(value = "/name-age2/check-update", consumes = MediaType.APPLICATION_JSON_VALUE)
    // リクエストボディnameAgeで与えられた人物情報が修正時の情報として正しいか判定する処理
    public ResponseEntity<Map<String, Object>> updateNameAge2Check(@RequestBody NameAge2Model nameAge) {
        
        // レスポンス用のマップmessageMapに、人物情報サービスインスタンスの引数nameAgeの人物情報が正しく、名前がDBに存在することを確認した結果を代入する。
        Map<String, Object> messageMap = nameAge2Service.checkInputs(nameAge, true);
        
        // 機能サービスの、messageMapにHTTPステータスコードを付加したレスポンスを生成した結果を返却する。
        return functionService.makeResponse(messageMap);
        
    }
    
    // "/name-age2/create" へPOSTメソッドで通信を行ったときに処理され、リクエストボディとしてJSON形式を受け取ることを示す
    @PostMapping(value = "/name-age2/create", consumes = MediaType.APPLICATION_JSON_VALUE)
    // リクエストボディnameAgeで与えられた人物情報を登録して結果を返す処理
    public ResponseEntity<Map<String, Object>> createNameAge2(@RequestBody NameAge2Model nameAge) {
        
        // レスポンス用のマップmessageMapに、人物情報サービスインスタンスの引数nameAgeの人物情報を登録した結果を代入する。
        Map<String, Object> messageMap = nameAge2Service.saveNew(nameAge);
        
        // 機能サービスの、messageMapにHTTPステータスコードを付加したレスポンスを生成した結果を返却する。
        return functionService.makeResponse(messageMap);
        
    }
    
    // "/name-age2/update" へPOSTメソッドで通信を行ったときに処理され、リクエストボディとしてJSON形式を受け取ることを示す
    @PostMapping(value = "/name-age2/update", consumes = MediaType.APPLICATION_JSON_VALUE)
    // リクエストボディnameAgeで与えられた人物情報を修正して結果を返す処理
    public ResponseEntity<Map<String, Object>> updateNameAge2(@RequestBody NameAge2Model nameAge) {
        
        // レスポンス用のマップmessageMapに、人物情報サービスインスタンスの引数nameAgeの人物情報を修正した結果を代入する。
        Map<String, Object> messageMap = nameAge2Service.update(nameAge);
        
        // 機能サービスの、messageMapにHTTPステータスコードを付加したレスポンスを生成した結果を返却する。
        return functionService.makeResponse(messageMap);
        
    }
    
    // "/name-age2/delete" へPOSTメソッドで通信を行ったときに処理され、リクエストボディとしてJSON形式を受け取ることを示す
    @PostMapping(value = "/name-age2/delete", consumes = MediaType.APPLICATION_JSON_VALUE)
    // リクエストボディnameAgeで与えられた人物情報を削除して結果を返す処理
    public ResponseEntity<Map<String, Object>> deleteNameAge2(@RequestBody NameAge2Model nameAge) {
        
        // レスポンス用のマップmessageMapに、人物情報サービスインスタンスの引数nameAgeの人物情報を削除した結果を代入する。
        Map<String, Object> messageMap = nameAge2Service.delete(nameAge);
        
        // 機能サービスの、messageMapにHTTPステータスコードを付加したレスポンスを生成した結果を返却する。
        return functionService.makeResponse(messageMap);
        
    }

}