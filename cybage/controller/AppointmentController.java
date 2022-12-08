package com.cybage.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cybage.model.Appointment;
import com.cybage.model.Patient;
import com.cybage.service.AppointmentService;

@RestController
@RequestMapping("/Appointment")
@CrossOrigin
public class AppointmentController {
	@Autowired
	AppointmentService appointmentservice;
	
	@PostMapping("/addAppointment")
	public ResponseEntity<Appointment> addAppointment(@RequestBody Appointment appointment){
		Appointment isappointmentAdded=appointmentservice.addAppointment(appointment);
		return new ResponseEntity<Appointment>(isappointmentAdded,HttpStatus.CREATED);
		
	}
	
	@PutMapping("/confirm/{id}")
	public ResponseEntity<Appointment> updateAppointmentStatus(@PathVariable int id, @RequestBody Appointment appointment){
		Appointment updatedAppointment =appointmentservice.updateStatusToConmfirm(id, appointment);
		return new ResponseEntity<Appointment>(updatedAppointment,HttpStatus.OK);
	}
	
	@PutMapping("/decline/{id}")
	public ResponseEntity<Appointment> updateAppointmentStatusdecline(@PathVariable int id, @RequestBody Appointment appointment){
		Appointment updatedAppointment =appointmentservice.updateStatusToDecline(id, appointment);
		return new ResponseEntity<Appointment>(updatedAppointment,HttpStatus.OK);
	}
	
	@GetMapping("/")
	public ResponseEntity<List<Appointment>> getAllAppointments() {
		List<Appointment> allAppointments = appointmentservice.getAllAppointments();
		return new ResponseEntity<List<Appointment>>(allAppointments, HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteappointmentbyId(@PathVariable int id){
		appointmentservice.deleteappointmentById(id);
		return new ResponseEntity<String>("Appointment Deleted!!",HttpStatus.OK);
		
	}
	
}
