package com.klef.exam.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.klef.exam.model.Visitor;

@Repository
public interface VisitorRepository extends JpaRepository<Visitor, Integer>{

}
