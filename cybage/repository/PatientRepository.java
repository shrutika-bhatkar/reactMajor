package com.cybage.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cybage.model.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient,Integer>{
	//List<Patient> findByPatientName(String PatientFirstName);
	@Query(value="select * from patient where Patientfirstname=:fname And PatientLastname=:lname" ,nativeQuery=true)
	List<Patient> findByPatientfirstNameAndPatientLastName(@Param("fname") String PatientFirstName,@Param("lname")String PatientLastName);
	
	@Query(value="Delete from patient where Patient_Id=:pid",nativeQuery=true)
	List<Patient>deleteByPatientId(@Param("pid")int Patient_Id);

}

