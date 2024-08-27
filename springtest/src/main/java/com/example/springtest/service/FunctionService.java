package com.example.springtest.service;

import java.util.Map;

import org.springframework.http.ResponseEntity;

// サーバーの機能の処理を行うクラスを定義する
public interface FunctionService {

    // 文字列型:Object型のマップを引数としてHTTPステータスコードを付加したレスポンスを返す関数
    public ResponseEntity<Map<String, Object>> makeResponse(Map<String, Object> messageMap);

}
