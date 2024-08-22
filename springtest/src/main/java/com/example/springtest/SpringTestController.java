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

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class SpringTestController {
    private final NameAgeService nameAgeService;

    private final NameAge2Service nameAge2Service;
    
    private final FunctionService functionService;

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
    
    @PostMapping(value = "/name-age/check", consumes = MediaType.APPLICATION_JSON_VALUE)
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

    @GetMapping("/name-age2")
    public List<NameAge2Model> nameAge2List() {
        return nameAge2Service.getAllJoined();
    }

    @GetMapping("/name-age2/detail")
    public ResponseEntity<Map<String, Object>> nameAge2Detail(@RequestParam("name") String name) {

        Map<String, Object> messageMap = nameAge2Service.getByName(name);

        return functionService.makeResponse(messageMap);
        
    }

    @PostMapping(value = "/name-age2/check", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Map<String, Object>> createNameAge2Check(@RequestBody NameAge2Model nameAge) {
        
        Map<String, Object> messageMap = nameAge2Service.checkInputs(nameAge);
        
        return functionService.makeResponse(messageMap);
        
    }

    @PostMapping(value = "/name-age2/create", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Map<String, Object>> createNameAge2(@RequestBody NameAge2Model nameAge) {
        
        Map<String, Object> messageMap = nameAge2Service.saveNew(nameAge);
        
        return functionService.makeResponse(messageMap);
        
    }

    @PostMapping(value = "/name-age2/update", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Map<String, Object>> updateNameAge2(@RequestBody NameAge2Model nameAge) {
        
        Map<String, Object> messageMap = nameAge2Service.update(nameAge);
        
        return functionService.makeResponse(messageMap);
        
    }

    @PostMapping(value = "/name-age2/delete", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Map<String, Object>> deleteNameAge2(@RequestBody NameAge2Model nameAge) {
        
        Map<String, Object> messageMap = nameAge2Service.delete(nameAge);
        
        return functionService.makeResponse(messageMap);
        
    }

}