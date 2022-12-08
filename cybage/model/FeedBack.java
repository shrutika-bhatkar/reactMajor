package com.cybage.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Feedback")
public class FeedBack {

	@Id
	@GeneratedValue
	@Column(name="FeedbackId")
	private int FeedbackId;
	
	@Column(name="Message")
	private String Message;

	public int getFeedbackId() {
		return FeedbackId;
	}

	public void setFeedbackId(int feedbackId) {
		FeedbackId = feedbackId;
	}

	public String getMessage() {  
		return Message;
	}

	public FeedBack() {
		super();
		// TODO Auto-generated constructor stub
	}

	public FeedBack(String message) {
		super();
		Message = message;
	}

	public void setMessage(String message) {
		Message = message;
	}
}
