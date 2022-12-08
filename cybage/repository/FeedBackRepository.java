package com.cybage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cybage.model.FeedBack;

@Repository
public interface FeedBackRepository extends JpaRepository<FeedBack,Integer>{

}
