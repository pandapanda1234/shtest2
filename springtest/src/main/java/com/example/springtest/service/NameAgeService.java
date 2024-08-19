package com.example.springtest.service;

import java.util.List;
import java.util.Map;

import com.example.springtest.model.NameAgeModel;

public interface NameAgeService {

    public List<NameAgeModel> findAll();

    public Map<String, Object> getById(int id);

    public Map<String, Object> saveNew(NameAgeModel nameAge);

    public Map<String, Object> update(NameAgeModel nameAge);

    public Map<String, Object> delete(NameAgeModel nameAge);
    
    public Map<String, Object> checkNameAge(NameAgeModel nameAge);

}
