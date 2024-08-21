package com.example.springtest.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.example.springtest.model.NameAge2Model;
import com.example.springtest.repository.NameAge2Repository;
import com.example.springtest.service.NameAge2Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class NameAge2ServiceImpl implements NameAge2Service {

    private final NameAge2Repository nameAge2Repository;

    @Override
    public List<NameAge2Model> findAll() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAll'");
    }

    @Override
    public List<NameAge2Model> getAllJoined() {
        return nameAge2Repository.getAllJoined();
    }

    @Override
    public Map<String, Object> getById(int id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getById'");
    }

    @Override
    public Map<String, Object> saveNew(NameAge2Model nameAge) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'saveNew'");
    }

    @Override
    public Map<String, Object> update(NameAge2Model nameAge) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'update'");
    }

    @Override
    public Map<String, Object> delete(NameAge2Model nameAge) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'delete'");
    }

    @Override
    public Map<String, Object> checkInputs(NameAge2Model nameAge) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'checkInputs'");
    }
    
}
