package com.cybage.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cybage.model.Doctor;



@Repository
public interface DoctorRepository extends JpaRepository<Doctor,Integer> {
	@Query(value="select * from Doctor where DoctorFirstName=:fname And DoctorLastname=:lname",nativeQuery=true)
	List<Doctor> findByDoctorfirstNameAndDoctorLastName(@Param("fname") String DoctorFirstName,@Param("lname")String DoctorLastName);

	@Query(value="Delete from doctor where Doctor_Id=:did",nativeQuery=true)
	List<Doctor>deleteByDoctorId(@Param("did")int Doctor_Id);
}

