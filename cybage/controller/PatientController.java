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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cybage.model.Patient;
import com.cybage.service.PatientService;



@RestController
@RequestMapping("/patient")
@CrossOrigin("*")
public class PatientController {
	@Autowired
	PatientService patientservice;
	
	@PostMapping("/")
	public ResponseEntity<String> addPatient(@RequestBody Patient patient) {
		System.out.println(patient);
		boolean isPatientAdded = patientservice.addPatient(patient);
		if (isPatientAdded)
			return new ResponseEntity<String>("Patient added successfully.", HttpStatus.CREATED);
		else
			return new ResponseEntity<String>("Some error.", HttpStatus.BAD_REQUEST);
	}
	
	@GetMapping("/")
	public ResponseEntity<List<Patient>> getAllPatients() {
		List<Patient> allPatients = patientservice.getAllPatients();
		return new ResponseEntity<List<Patient>>(allPatients, HttpStatus.OK);
	}
	
	@GetMapping("/getPatientByName/{fname}/{lname}")
	public ResponseEntity<List<Patient>> getPatientsByName(@PathVariable String fname, @PathVariable String lname) {
		MultiValueMap<String, String> headers = new LinkedMultiValueMap<String, String>();
		headers.add("headerkey1", "headerValue1");
		return new ResponseEntity<List<Patient>>(patientservice.getPatientByName(fname,lname), headers, HttpStatus.OK);
	}
	
	@GetMapping("/getbyid/{id}")
	public ResponseEntity<Optional<Patient>> getpatientById(@PathVariable int id)
	{
		Optional<Patient> patienttlist = patientservice.getpatientById(id);	
		return new ResponseEntity<Optional<Patient>>(patienttlist, HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deletepatientbyId(@PathVariable int id){
		patientservice.deletepatientById(id);
		return new ResponseEntity<String>("Record Deleted Succesfully",HttpStatus.OK);
		
	}
	
//	@PutMapping("/update")
//	public ResponseEntity<String> updatepatient(@RequestBody Patient patient)
//	{
//		patientservice.updatepatient(patient);
//	}
	
}
