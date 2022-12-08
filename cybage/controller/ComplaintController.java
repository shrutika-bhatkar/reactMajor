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

import com.cybage.model.Complaint;

import com.cybage.service.ComplaintService;

@RestController
@RequestMapping("/complaint")
public class ComplaintController {
		@Autowired
		private ComplaintService complaintservice;

		@PostMapping("/addcomplaints")
		public ResponseEntity<String> addComplaint(@RequestBody Complaint complaint) {
			System.out.println(complaint);
			boolean isComplaintAdded = complaintservice.addComplaint(complaint);
			if (isComplaintAdded)
				return new ResponseEntity<String>("Complaint Registered.", HttpStatus.CREATED);
			else
				return new ResponseEntity<String>("Some error.", HttpStatus.BAD_REQUEST);

		}
		
		@GetMapping("/")
		public ResponseEntity<List<Complaint>> getAllComplaints() {
			List<Complaint> allComplaints = complaintservice.getAllComplaints();
			return new ResponseEntity<List<Complaint>>(allComplaints, HttpStatus.OK);
		}
}
