package com.cybage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cybage.model.Complaint;

@Repository
public interface ComplaintRepository extends JpaRepository<Complaint,Integer>{
	
}
