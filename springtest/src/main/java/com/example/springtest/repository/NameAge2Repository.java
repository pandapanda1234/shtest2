package com.example.springtest.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.springtest.model.NameAge2Model;

@Repository
public interface NameAge2Repository extends JpaRepository<NameAge2Model, Integer> {

    static String GET_LIST_SQL = 
                "SELECT" +
                "    createtb_db.name_age_list2.id" +
                "    , createtb_db.name_age_list2.name" +
                "    , createtb_db.name_age_list2.age" +
                "    , createtb_db.name_age_list2.remarks" +
                "    , createtb_db.name_hobby_list.hobby" +
                "    , createtb_db.name_hobby_list.skill " +
                "FROM" +
                "    createtb_db.name_age_list2" +
                "    INNER JOIN createtb_db.name_hobby_list" +
                "        ON createtb_db.name_age_list2.id = createtb_db.name_hobby_list.id;";

    @Query(value = GET_LIST_SQL, nativeQuery = true)
    List<NameAge2Model> getAllJoined();
    
}
