package com.example.springtest.service.impl;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.springtest.service.FunctionService;

@Service
public class FunctionServiceImpl implements FunctionService {

    @Override
    public ResponseEntity<Map<String, Object>> makeResponse(Map<String, Object> messageMap) {

        HttpStatus status = (HttpStatus)messageMap.get("status");
        
        ResponseEntity<Map<String, Object>> result = ResponseEntity.status(status).body(messageMap);
        
        return result;

    }
    
}
