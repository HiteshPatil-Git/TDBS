package com.app.repositories;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Epass;
import com.app.entities.Role;
import com.app.entities.Temple;
import com.app.entities.TimeSlot;
import com.app.entities.User;

public interface TimeSlotRepository extends JpaRepository<TimeSlot, Integer>  {

	
	List<TimeSlot> findBySlotDateAndTempleNameAndSlot(LocalDate slotDate, String templeName, String slot);

	TimeSlot findBySlotId(int slotId);

	List<TimeSlot> findByTempleName(String templeName);

	TimeSlot findBySlotDateAndTempleName(LocalDate slotDate, String templeName);

	
	
	
}
