package com.example.springtest;

import java.util.List;
import java.util.Map;

// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.springtest.model.NameAgeModel;
import com.example.springtest.service.NameAgeService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class SpringTestController {
    private final NameAgeService nameAgeService;

    // private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @GetMapping("/name-age")
    public List<NameAgeModel> nameAgeList() {
        return nameAgeService.findAll();
    }
    
    @GetMapping("/name-age/{id}")
    public ResponseEntity<Map<String, Object>> nameAgeDetail(@PathVariable("id") int id) {

        Map<String, Object> messageMap = nameAgeService.getById(id);

        if(messageMap.get("status") == HttpStatus.OK) {
            return ResponseEntity.ok(messageMap);
        } else {
            return ResponseEntity.notFound().build();
        }

    }

    @PostMapping(value = "/name-age/check", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Map<String, Object>> createNameAgeCheck(@RequestBody NameAgeModel nameAge) {

        Map<String, Object> messageMap = nameAgeService.checkNameAge(nameAge);

        if(messageMap.get("status") == HttpStatus.OK) {
            return ResponseEntity.ok(messageMap);
        } else {
            return ResponseEntity.badRequest().body(messageMap);
        }
        
    }
    
    @PostMapping(value = "/name-age/create", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Map<String, Object>> createName(@RequestBody NameAgeModel nameAge) {

        Map<String, Object> messageMap = nameAgeService.saveNew(nameAge);

        if(messageMap.get("status") == HttpStatus.OK) {
            return ResponseEntity.ok(messageMap);
        } else {
            return ResponseEntity.badRequest().body(messageMap);
        }

    }

    @PostMapping(value = "/name-age/update", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Map<String, Object>> updateName(@RequestBody NameAgeModel nameAge) {

        Map<String, Object> messageMap = nameAgeService.update(nameAge);

        if(messageMap.get("status") == HttpStatus.OK) {
            return ResponseEntity.ok(messageMap);
        } else {
            return ResponseEntity.badRequest().body(messageMap);
        }

    }

    @PostMapping(value = "/name-age/delete", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Map<String, Object>> deleteName(@RequestBody NameAgeModel nameAge) {

        Map<String, Object> messageMap = nameAgeService.delete(nameAge);

        if(messageMap.get("status") == HttpStatus.OK) {
            return ResponseEntity.ok(messageMap);
        } else {
            return ResponseEntity.badRequest().body(messageMap);
        }

    }

}