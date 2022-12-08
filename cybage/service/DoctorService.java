package com.cybage.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cybage.model.Doctor;
import com.cybage.repository.DoctorRepository;

@Service
public class DoctorService {
	@Autowired
	DoctorRepository doctorRepository;

	public boolean addDoctor(Doctor doctor) {

		doctorRepository.save(doctor);
		if (doctor != null)
			return true;
		else
			return false;

	}

	public List<Doctor> getAllDoctors() {
		return doctorRepository.findAll() ;
	}

	public List<Doctor> getDoctorByName(String fname, String lname) {
		return doctorRepository.findByDoctorfirstNameAndDoctorLastName(fname,lname);
	}

	public Optional<Doctor> getdoctorById(int id) {
		
		return doctorRepository.findById(id);
	}

	public void deletedoctorById(int id) {
	doctorRepository.deleteById(id);
		
	}

}
