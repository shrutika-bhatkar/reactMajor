package com.cybage.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cybage.model.Patient;
import com.cybage.repository.PatientRepository;


@Service
public class PatientService {
	@Autowired
	PatientRepository patientRepository;
	public boolean addPatient(Patient patient) {
	patientRepository.save(patient);
		if(patient!=null)
		return true;
	else
		return false;
	}
	
	
	public List<Patient> getAllPatients() {
	return patientRepository.findAll();
	}


	public List<Patient> getPatientByName(String fname,String lname) {
		return patientRepository.findByPatientfirstNameAndPatientLastName(fname,lname);
	}


	public Optional<Patient> getpatientById(int id) {
		return patientRepository.findById(id);	
		}


	public void deletepatientById(int id) {
		patientRepository.deleteById(id);
		
	}


//	public void updatepatient(int Patient_Id,Patient patient) {
//		
//			Patient patient1 = patientRepository.findById(Patient_Id).get();
//			patient1.setPatientFirstName(patient.getPatientFirstName());
//			patient1.setPatientLastName(patient.getPatientLastName());
//			patientRepository.save(patient1); 
//		
//		
//	}
	
}
