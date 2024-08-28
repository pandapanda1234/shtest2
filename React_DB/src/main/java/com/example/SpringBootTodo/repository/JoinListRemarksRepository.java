package com.example.SpringBootTodo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.SpringBootTodo.model.JoinListRemarks;

import jakarta.transaction.Transactional;

//<JoinListRemarks(Entity�̃N���X��),integer(Entity�̎�L�[�̌^)>��ݒ肵��JpaRepository���p�����Ainterface JoinListRemarksRepository���쐬����
public interface JoinListRemarksRepository extends JpaRepository<JoinListRemarks,Integer>{
	
	//@Query��insert,update,delete���s���Ƃ��ɕK�v�ȃA�m�e�[�V���������ꂪ�Ȃ�������select�N�G���ƌ��Ȃ���ăG���[���o��
	@Modifying
	
	//�g�����U�N�V�����Ǘ�������A�m�e�[�V������@Modifying�ƃZ�b�g�Ŏg��
	@Transactional
	
	//@Query����createtb_db.name_age_list2��name,age,remarks�ɁA�ϐ�:name,:age,:remarks��ǉ�����N�G��������
	//��nativeQuery = true ���w�肷�邱�ƂŁAJPQL �ł͂Ȃ�SQL�ɂ��₢���킹���ł���
	@Query(value="INSERT INTO createtb_db.name_age_list2(name,age,remarks) "
			+ "VALUES(:name,:age,:remarks)",nativeQuery=true)
	
	//����name,age,remarks�����߂�l�����̃��\�b�hJoinListInsert_name_age_list2���쐬����
	//��@Param��@Query����:name,:age,:remarks�Ƀ}�b�s���O���Ă���
	void JoinListInsert_name_age_list2(@Param("name") String name,@Param("age") int age,@Param("remarks") String remarks);

	
	//@Query��insert,update,delete���s���Ƃ��ɕK�v�ȃA�m�e�[�V���������ꂪ�Ȃ�������select�N�G���ƌ��Ȃ���ăG���[���o��
	@Modifying
	
	//�g�����U�N�V�����Ǘ�������A�m�e�[�V������@Modifying�ƃZ�b�g�Ŏg��
	@Transactional
	
	//@Query����createtb_db.name_hobby_list��name,hobby,skill�ɁA�ϐ�:name,:hobby,:skill��ǉ�����N�G��������
	//��nativeQuery = true ���w�肷�邱�ƂŁAJPQL �ł͂Ȃ�SQL�ɂ��₢���킹���ł���
	@Query(value="INSERT INTO createtb_db.name_hobby_list(name,hobby,skill) "
			+ "VALUES(:name,:hobby,:skill)",nativeQuery=true)
	
	//����name,hobby,skill�����߂�l�����̃��\�b�hJoinListInsert_name_hobby_list���쐬����
	//��@Param��@Query����:name,:hobby,:skill�Ƀ}�b�s���O���Ă���
	void JoinListInsert_name_hobby_list(@Param("name") String name,@Param("hobby") String hobby,@Param("skill") String skill);

}
