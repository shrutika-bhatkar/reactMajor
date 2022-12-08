package com.cybage.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "Doctor")
public class Doctor {
	@Id
    @GeneratedValue
    @Column(name="DoctorId")
    private int DoctorId;
   
    @Column(name="DoctorFirstName")
    private String DoctorFirstName;

    @Column(name="DoctorLastName")
    private String DoctorLastName;

    @Column(name="Email")
    private String Email;

    public Doctor() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Doctor(String doctorFirstName, String doctorLastName, String email, String password, String contact,
			String gender, String accountStatus, String loginAttempts, String specialization) {
		super();
		DoctorFirstName = doctorFirstName;
		DoctorLastName = doctorLastName;
		Email = email;
		Password = password;
		Contact = contact;
		Gender = gender;
		AccountStatus = accountStatus;
		LoginAttempts = loginAttempts;
		Specialization = specialization;
	}


	public int getDoctorId() {
		return DoctorId;
	}


	public void setDoctorId(int doctorId) {
		DoctorId = doctorId;
	}


	public String getDoctorFirstName() {
		return DoctorFirstName;
	}


	public void setDoctorFirstName(String doctorFirstName) {
		DoctorFirstName = doctorFirstName;
	}


	public String getDoctorLastName() {
		return DoctorLastName;
	}


	public void setDoctorLastName(String doctorLastName) {
		DoctorLastName = doctorLastName;
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


	public String getSpecialization() {
		return Specialization;
	}


	public void setSpecialization(String specialization) {
		Specialization = specialization;
	}


	@Size(min=6,max=13,message="Password not long enough")
    @Column(name="Password")
    private String Password;
   
    @Max(value = 10)
    @Column(name="Contact")
    private String Contact;


    @Column(name="Gender")
    private String Gender;

    @Column(name="AccountStatus")
	private String AccountStatus;


    @Column(name="LoginAttempts")
    private String LoginAttempts;


    @Column(name="Specialization")
    private String Specialization;
}
