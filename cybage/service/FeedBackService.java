package com.cybage.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cybage.model.FeedBack;
import com.cybage.repository.FeedBackRepository;

@Service
public class FeedBackService {
	@Autowired
	FeedBackRepository feedbackRepository;
	public boolean addFeedBack(FeedBack feedback) {
			feedbackRepository.save(feedback);
			if(feedback!=null)
			return true;
		else
		return false;
	}

	public List<FeedBack> getAllFeedBack() {
	
		return feedbackRepository.findAll();
	}

}
