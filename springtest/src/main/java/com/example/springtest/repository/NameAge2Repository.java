package com.example.springtest.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.springtest.model.NameAge2Model;

@Repository
public interface NameAge2Repository extends JpaRepository<NameAge2Model, Integer> {

    static final String GET_LIST_SQL = 
                "SELECT " +
                "    createtb_db.name_age_list2.id, " +
                "    createtb_db.name_age_list2.name, " +
                "    createtb_db.name_age_list2.age, " +
                "    createtb_db.name_age_list2.remarks, " +
                "    createtb_db.name_hobby_list.hobby, " +
                "    createtb_db.name_hobby_list.skill " +
                "FROM " +
                "    createtb_db.name_age_list2 " +
                "    INNER JOIN createtb_db.name_hobby_list " +
                "        ON createtb_db.name_age_list2.name = createtb_db.name_hobby_list.name;";

    @Query(value = GET_LIST_SQL, nativeQuery = true)
    List<NameAge2Model> getAllJoined();

    static final String GET_DETAIL_SQL = 
                "SELECT " +
                "    createtb_db.name_age_list2.id, " +
                "    createtb_db.name_age_list2.name, " +
                "    createtb_db.name_age_list2.age, " +
                "    createtb_db.name_age_list2.remarks, " +
                "    createtb_db.name_hobby_list.hobby, " +
                "    createtb_db.name_hobby_list.skill " +
                "FROM " +
                "    createtb_db.name_age_list2 " +
                "    INNER JOIN createtb_db.name_hobby_list " +
                "        ON createtb_db.name_age_list2.name = createtb_db.name_hobby_list.name " +
                "WHERE" + 
                "    createtb_db.name_age_list2.name = :name;";

    @Query(value = GET_DETAIL_SQL, nativeQuery = true)
    List<NameAge2Model> getDetail(@Param("name") String name);

    static final String CREATE_NAME_AGE_SQL = 
                "INSERT " +
                "INTO createtb_db.name_age_list2(name, age, remarks) " +
                "VALUES (:name, :age, :remarks); ";

    @Modifying
    @Transactional
    @Query(value = CREATE_NAME_AGE_SQL, nativeQuery = true)
    int saveNewNameAge(@Param("name") String name, @Param("age") Integer age, @Param("remarks") String remarks);

    static final String CREATE_HOBBY_SKILL_SQL = 
                "INSERT " +
                "INTO createtb_db.name_hobby_list(name, hobby, skill) " +
                "VALUES (:name, :hobby, :skill);";

    @Modifying
    @Transactional
    @Query(value = CREATE_HOBBY_SKILL_SQL, nativeQuery = true)
    int saveNewHobbySkill(@Param("name") String name, @Param("hobby") String hobby, @Param("skill") String skill);

    static final String UPDATE_NAME_AGE_SQL = 
                "UPDATE createtb_db.name_age_list2 " +
                "SET" +
                "    age = :age " +
                "WHERE" +
                "    name = :name; ";

    @Modifying
    @Transactional
    @Query(value = UPDATE_NAME_AGE_SQL, nativeQuery = true)
    int updateNameAge(@Param("name") String name, @Param("age") Integer age);

    static final String UPDATE_HOBBY_SKILL_SQL = 
                "UPDATE createtb_db.name_hobby_list " +
                "SET" +
                "    hobby = :hobby, " +
                "    skill = :skill " +
                "WHERE" +
                "    name = :name;";

    @Modifying
    @Transactional
    @Query(value = UPDATE_HOBBY_SKILL_SQL, nativeQuery = true)
    int updateHobbySkill(@Param("name") String name, @Param("hobby") String hobby, @Param("skill") String skill);

}
