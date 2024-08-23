package com.example.springtest.service;

import java.util.List;
import java.util.Map;

import com.example.springtest.model.NameAge2Model;

public interface NameAge2Service {

    public List<NameAge2Model> findAll();

    public List<NameAge2Model> getAllJoined();

    public Map<String, Object> getByName(String name);

    public Map<String, Object> saveNew(NameAge2Model nameAge);

    public Map<String, Object> update(NameAge2Model nameAge);

    public Map<String, Object> delete(NameAge2Model nameAge);
    
    public Map<String, Object> checkInputs(NameAge2Model nameAge, boolean expectsExsisting);

}
