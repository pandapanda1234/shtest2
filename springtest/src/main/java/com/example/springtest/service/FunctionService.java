package com.example.springtest.service;

import java.util.Map;

import org.springframework.http.ResponseEntity;

public interface FunctionService {

    public ResponseEntity<Map<String, Object>> makeResponse(Map<String, Object> messageMap);

}
