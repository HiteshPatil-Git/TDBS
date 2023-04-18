package com.app.services;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.app.entities.Epass;
import com.app.entities.TimeSlot;

public interface TimeSlotService {

	List<TimeSlot> getAllTimeSlot();

	List<TimeSlot> addTimeSlotDetails(TimeSlot slotDetails, String slot1, int maxPersonPerSlot1, String slot2, int maxPersonPerSlot2,
			String slot3, int maxPersonPerSlot3, String slot4, int maxPersonPerSlot4, String templeName);

	TimeSlot getDetailsById(int slotid);

	TimeSlot deleteTimeSlotDetails(int slotId);

	List<TimeSlot> getAllAvailableTimeSlot();

	/*List<TimeSlot> getAllByTempleId(int templeId);*/

	List<TimeSlot> getAllByTempleName(String templeName);

	//List<TimeSlot> getByDateTempleIDSlot(TimeSlot slotDetails, Integer templeId);


}
