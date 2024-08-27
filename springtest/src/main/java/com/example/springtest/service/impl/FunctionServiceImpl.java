package com.example.springtest.service.impl;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.springtest.service.FunctionService;

// 処理を行うサービスクラスであることを示す
@Service
// サーバーの機能の処理を実際に行うクラス
public class FunctionServiceImpl implements FunctionService {

    // 文字列型:Object型のマップを引数としてHTTPステータスコードを付加したレスポンスを返す関数
    @Override
    public ResponseEntity<Map<String, Object>> makeResponse(Map<String, Object> messageMap) {

        // HTTPステータス型のstatusに引数のmessageMapからstatusをキーとして取得した結果を代入する。
        HttpStatus status = (HttpStatus)messageMap.get("status");
        
        // HTTPステータスコードを付加したレスポンスの型resultに、変数statusをステータス、変数messageMapをボディにセットされたレスポンスを代入する。
        ResponseEntity<Map<String, Object>> result = ResponseEntity.status(status).body(messageMap);
        
        // 変数redsultを返却する。
        return result;

    }
    
}
