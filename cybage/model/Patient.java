package com.cybage.model;


import org.springframework.data.relational.core.mapping.Table;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Size;



@Entity
@Table(name="patients")
public class Patient {
	
	@jakarta.persistence.Id
	@GeneratedValue
	private int PatientId;

	public Patient(String patientFirstName, String patientLastName, String email,
			@Size(min = 6, message = "Password not long enough") String password, @Max(10) String contact,
			String gender, String accountStatus, String loginAttempts) {
		super();
		PatientFirstName = patientFirstName;
		PatientLastName = patientLastName;
		Email = email;
		Password = password;
		Contact = contact;
		Gender = gender;
		AccountStatus = accountStatus;
		LoginAttempts = loginAttempts;
	}

	public Patient() {
		// TODO Auto-generated constructor stub
	}

	public int getPatientId() {
		return PatientId;
	}

	public void setPatientId(int patientId) {
		PatientId = patientId;
	}

	public String getPatientFirstName() {
		return PatientFirstName;
	}

	public void setPatientFirstName(String patientFirstName) {
		PatientFirstName = patientFirstName;
	}

	public String getPatientLastName() {
		return PatientLastName;
	}

	public void setPatientLastName(String patientLastName) {
		PatientLastName = patientLastName;
	}

	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}

	public String getPassword() {
		return Password;
	}

	public void setPassword(String password) {
		Password = password;
	}

	public String getContact() {
		return Contact;
	}

	public void setContact(String contact) {
		Contact = contact;
	}

	public String getGender() {
		return Gender;
	}

	public void setGender(String gender) {
		Gender = gender;
	}

	public String getAccountStatus() {
		return AccountStatus;
	}

	public void setAccountStatus(String accountStatus) {
		AccountStatus = accountStatus;
	}

	public String getLoginAttempts() {
		return LoginAttempts;
	}

	public void setLoginAttempts(String loginAttempts) {
		LoginAttempts = loginAttempts;
	}

	
	private String PatientFirstName;

	private String PatientLastName;

	private String Email;

	//@Size(min = 6, message = "Password not long enough")
	private String Password;

	//@Max(value = 10)
	private String Contact;

	private String Gender;

	private String AccountStatus;

	private String LoginAttempts;
}
