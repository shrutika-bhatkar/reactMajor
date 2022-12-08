package com.cybage.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cybage.model.Appointment;
import com.cybage.repository.ApppointmentRepository;

@Service
public class AppointmentService {

	
	
	@Autowired
	ApppointmentRepository appointmentRepository;
	
public Appointment addAppointment(Appointment appointment) {
		appointment.setAppointmentStatus("Pending");
		Appointment newlyAddedPatient=appointmentRepository.save(appointment);
		return newlyAddedPatient;
	}

public Appointment updateStatusToConmfirm(int id,Appointment appointment) {
	Appointment old=appointmentRepository.findById(id).get();
	old.setAppointmentStatus("Confirmed");
	Appointment updated = appointmentRepository.save(old);
	return updated;

}

public Appointment updateStatusToDecline(int id,Appointment appointment) {
	Appointment old=appointmentRepository.findById(id).get();
	old.setAppointmentStatus("Declined");
	Appointment updated = appointmentRepository.save(old);
	return updated;

}

public List<Appointment> getAllAppointments() {
	
	return appointmentRepository.findAll();
}

public void deleteappointmentById(int id) {
	appointmentRepository.deleteById(id);
	
}

}
