package com.cybage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cybage.model.Appointment;

@Repository
public interface ApppointmentRepository extends JpaRepository<Appointment,Integer> {

}
