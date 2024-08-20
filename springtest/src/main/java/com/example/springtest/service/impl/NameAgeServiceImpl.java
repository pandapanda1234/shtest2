package com.example.springtest.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.example.springtest.model.NameAgeModel;
import com.example.springtest.repository.NameAgeRepository;
import com.example.springtest.service.NameAgeService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class NameAgeServiceImpl implements NameAgeService {
    
    static final int MAX_LENGTH = 30;
    
    private final NameAgeRepository nameAgeRepository;

    @Override
    public List<NameAgeModel> findAll() {
        return nameAgeRepository.findAll();
    }

    @Override
    public Map<String, Object> getById(int id) {

        Map<String, Object> messageMap = new HashMap<>();

        try {
            NameAgeModel result = nameAgeRepository.findById(id).get();

            messageMap.put("status", HttpStatus.OK);

            messageMap.put("content", result);

        } catch(NoSuchElementException e) {
            messageMap.put("status", HttpStatus.NOT_FOUND);

            messageMap.put("message", "Not Found.");

        }

        return messageMap;
    }

    @Override
    public Map<String, Object> saveNew(NameAgeModel nameAge) {

        Map<String, Object> messageMap = new HashMap<>();

        try {
            NameAgeModel result = nameAgeRepository.save(nameAge);
            
            messageMap.put("status", HttpStatus.OK);

            messageMap.put("content", result);

        } catch(Exception e) {
            messageMap.put("status", HttpStatus.BAD_REQUEST);

            messageMap.put("message", "Create failed.");
            
        }

        return messageMap;
    }
    
    @Override
    public Map<String, Object> update(NameAgeModel nameAge) {

        Map<String, Object> messageMap = new HashMap<>();

        try {
            NameAgeModel result = nameAgeRepository.save(nameAge);
            
            messageMap.put("status", HttpStatus.OK);

            messageMap.put("content", result);

        } catch(Exception e) {
            messageMap.put("status", HttpStatus.BAD_REQUEST);

            messageMap.put("message", "Update failed.");
            
        }

        return messageMap;

    }
    
    @Override
    public Map<String, Object> delete(NameAgeModel nameAge) {

        Map<String, Object> messageMap = new HashMap<>();

        try {
            nameAgeRepository.delete(nameAge);
            
            messageMap.put("status", HttpStatus.OK);

        } catch(Exception e) {
            messageMap.put("status", HttpStatus.BAD_REQUEST);

            messageMap.put("message", "Update failed.");
            
        }

        return messageMap;

    }
    
    @Override
    public Map<String, Object> checkNameAge(NameAgeModel nameAge) {
        
        String name = nameAge.getName();
        
        int age = nameAge.getAge();
        
        Map<String, Object> messageMap = new HashMap<>();
        
        StringBuilder errorMessage = new StringBuilder();
        
        boolean succeeded = true;
        
        if(name == null || name.isEmpty()) {
            errorMessage.append("Name is empty.\n");

            succeeded = false;

        } else if(name.length() > MAX_LENGTH) {
            errorMessage.append("Name is too long.\n");
            
            succeeded = false;
        }
        
        if(age < 0) {
            errorMessage.append("Age is negative.\n");
            
            succeeded = false;
            
        }
        
        if(succeeded) {
            messageMap.put("status", HttpStatus.OK);
            
        } else {
            messageMap.put("status", HttpStatus.BAD_REQUEST);
            
            messageMap.put("message", errorMessage.toString());
    
        }

        return messageMap;
        
    }

}
