package com.cybage.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cybage.model.Complaint;
import com.cybage.repository.ComplaintRepository;

@Service
public class ComplaintService {
	@Autowired
	ComplaintRepository complaintRepository;
	public boolean addComplaint(Complaint complaint) {
		complaintRepository.save(complaint);
		if(complaint!=null)
		return true;
	else
		return false;
		
	}

	public List<Complaint> getAllComplaints() {
		
		return complaintRepository.findAll();
	}

}
