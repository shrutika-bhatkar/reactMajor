package com.cybage.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cybage.model.Doctor;

import com.cybage.service.DoctorService;

@RestController
@RequestMapping("/Doctor")
@CrossOrigin("*")
public class DoctorController {
	@Autowired
	DoctorService doctorservice;
	
	 @PostMapping("/addDoctor")
		public ResponseEntity<String> addDoctor(@RequestBody Doctor doctor) {
			boolean wasDoctorRegistered = doctorservice.addDoctor(doctor);
			if (wasDoctorRegistered)
				return new ResponseEntity<String>("Doctor was registered successfully...........", HttpStatus.CREATED);
			else
				return new ResponseEntity<String>("Doctor was not registered.........", HttpStatus.BAD_REQUEST);

		}
	 
	 @GetMapping("/")
		public ResponseEntity<List<Doctor>> getAllDoctors() {
			List<Doctor> allDoctors = doctorservice.getAllDoctors();
			return new ResponseEntity<List<Doctor>>(allDoctors, HttpStatus.OK);
		}
		
		@GetMapping("/getDoctorByName/{fname}/{lname}")
		public ResponseEntity<List<Doctor>> getDoctorsByName(@PathVariable String fname, @PathVariable String lname) {
			MultiValueMap<String, String> headers = new LinkedMultiValueMap<String, String>();
			headers.add("headerkey1", "headerValue1");
			return new ResponseEntity<List<Doctor>>(doctorservice.getDoctorByName(fname,lname), headers, HttpStatus.OK);
		}
		
		@GetMapping("/getbyid/{id}")
		public ResponseEntity<Optional<Doctor>> getdoctorById(@PathVariable int id)
		{
			Optional<Doctor> doctorlist = doctorservice.getdoctorById(id);	
			return new ResponseEntity<Optional<Doctor>>(doctorlist, HttpStatus.OK);
		}
		
		@DeleteMapping("/{id}")
		public ResponseEntity<String> deletepatientbyId(@PathVariable int id){
			doctorservice.deletedoctorById(id);
			return new ResponseEntity<String>("Record Deleted Succesfully",HttpStatus.OK);
			
		}
		
}
