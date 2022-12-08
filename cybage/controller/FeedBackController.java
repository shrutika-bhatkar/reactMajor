package com.cybage.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cybage.model.FeedBack;
import com.cybage.service.FeedBackService;

@RestController
@RequestMapping("/feedback")
public class FeedBackController {
	@Autowired
	private FeedBackService feedbackservice;

	@PostMapping("/addfeedback")
	public ResponseEntity<String> addFeedBack(@RequestBody FeedBack feedback) {
		System.out.println(feedback);
		boolean isFeedBackAdded = feedbackservice.addFeedBack(feedback);
		if (isFeedBackAdded)
			return new ResponseEntity<String>("Feedback Registered.", HttpStatus.CREATED);
		else
			return new ResponseEntity<String>("Some error.", HttpStatus.BAD_REQUEST);

	}
	
	@GetMapping("/")
	public ResponseEntity<List<FeedBack>> getAllFeedBack() {
		List<FeedBack> allFeedBack = feedbackservice.getAllFeedBack();
		return new ResponseEntity<List<FeedBack>>(allFeedBack, HttpStatus.OK);
	}
}
