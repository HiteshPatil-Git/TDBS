package com.app.services;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_excp.UserNotFoundExc;
import com.app.entities.Epass;
import com.app.entities.Temple;
import com.app.entities.TimeSlot;
import com.app.entities.User;
import com.app.repositories.EpassRepository;
import com.app.repositories.TimeSlotRepository;

@Service
@Transactional
public class TimeSlotImpl implements TimeSlotService{
	@Autowired
	private TimeSlotRepository timeSlotRepo;


	@Autowired
	private TempleService templeService;

	@Override
	public List<TimeSlot> addTimeSlotDetails(TimeSlot slotDetails, 
			String slot1, int maxPersonPerSlot1, String slot2, int maxPersonPerSlot2, 
			String slot3, int maxPersonPerSlot3, String slot4, int maxPersonPerSlot4, String templeName) {
		System.out.println("in impl");
		LocalDate slotDate = slotDetails.getSlotDate();
		TimeSlot present = timeSlotRepo.findBySlotDateAndTempleName(slotDate, templeName);
		System.out.println("ater find by date & templeID");

		if(present == null) {
			System.out.println("in if loop");		

			List<TimeSlot> timeslots = new ArrayList<>();

			for (int i = 0; i<4 ; i++) {
				TimeSlot slotDetails1 = new TimeSlot();
				slotDetails1.setSlotDate(slotDate);
				slotDetails1.setTempleName(templeName);
				
				System.out.println(templeName);
				if(i==0) {
					slotDetails1.setSlot(slot1);
					slotDetails1.setMaxPersonPerSlot(maxPersonPerSlot1);
					slotDetails1.setAvailableSlot(maxPersonPerSlot1);
				}else if(i==1) {
					slotDetails1.setSlot(slot2);
					slotDetails1.setMaxPersonPerSlot(maxPersonPerSlot2);
					slotDetails1.setAvailableSlot(maxPersonPerSlot2);
				}else if(i==2) {
					slotDetails1.setSlot(slot3);
					slotDetails1.setMaxPersonPerSlot(maxPersonPerSlot3);
					slotDetails1.setAvailableSlot(maxPersonPerSlot3);
				}else if(i==3) {
					slotDetails1.setSlot(slot4);
					slotDetails1.setMaxPersonPerSlot(maxPersonPerSlot4);
					slotDetails1.setAvailableSlot(maxPersonPerSlot4);
				}

				TimeSlot addedSlot = timeSlotRepo.save(slotDetails1);			
				timeslots.add(addedSlot);

			}

			return timeslots;
		}
		else {
			return null;

		}
	}

	@Override
	public List<TimeSlot> getAllTimeSlot() {
		// TODO Auto-generated method stub
		return timeSlotRepo.findAll();
	}


	@Override
	public TimeSlot deleteTimeSlotDetails(int slotId) {

		Optional<TimeSlot> optionalTimeSlot=timeSlotRepo.findById(slotId);
		TimeSlot timeSlot=optionalTimeSlot.orElseThrow(()->new UserNotFoundExc("Invalid Product ID "));
		timeSlotRepo.deleteById(slotId);
		return timeSlot;
	}


	@Override
	public TimeSlot getDetailsById(int slotId) {
		Optional<TimeSlot> slot=timeSlotRepo.findById(slotId);
		TimeSlot timeSlot=slot.orElseThrow(()-> new UserNotFoundExc("id not found"));
		return timeSlot;

	}


	@Override
	public List<TimeSlot> getAllAvailableTimeSlot() {

		return null;
	}


	/*@Override
	public List<TimeSlot> getAllByTempleId(int templeId) {
		System.out.println("in IMPL before query");
		List<TimeSlot> timeSlotList = timeSlotRepo.findByTempleId(templeId);
		System.out.println("in IMPL after query");
		return timeSlotList;
	}*/

	@Override
	public List<TimeSlot> getAllByTempleName(String templeName) {
		System.out.println("in getby templeNAme");
		List<TimeSlot> timeSlotList = timeSlotRepo.findByTempleName(templeName);
		
		return timeSlotList;
	}

	/*@Override
	public List<TimeSlot> getByDateTempleIDSlot(TimeSlot slotDetails, Integer templeId) {
		System.out.println("in IMPL");
		LocalDate slotDate = slotDetails.getSlotDate();
		System.out.println("before query");

		String slot1 =  "6AM-8AM";
		List<TimeSlot> present2 = timeSlotRepo.findBySlotDateAndTempleIdAndSlot1(slotDate, templeId, slot1);
		System.out.println("after query");

		return present2;
	}*/

}
