package com.app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_excp.UserNotFoundExc;
import com.app.entities.Epass;
import com.app.entities.TimeSlot;
import com.app.entities.User;
import com.app.repositories.EpassRepository;
import com.app.repositories.TimeSlotRepository;

@Service
@Transactional

public class EpassImpl implements EpassService{
	@Autowired
	private EpassRepository EpassRepo;
	
	
	@Autowired
	private TimeSlotRepository timeSlotRepo;

	@Override
	public Epass addEPassDetails(Epass u, int slotId, int userId) {
		
		TimeSlot selectedSlot = timeSlotRepo.findBySlotId(slotId);
		if (u.getPeoples()<selectedSlot.getAvailableSlot()) {
			
			Epass u1 = new Epass();
			u1.setPassDate(u.getPassDate());
			u1.setPeoples(u.getPeoples());
			u1.setUserId(userId);
			u1.setSlot(u.getSlot());
			u1.setTempleName(u.getTempleName());
			
			Epass bookedEpass = EpassRepo.save(u1);
			System.out.println("Epass saved");
			selectedSlot.setAvailableSlot((selectedSlot.getAvailableSlot()-u.getPeoples()));
			System.out.println(selectedSlot.getAvailableSlot());
			
			//timeSlotRepo.save(selectedSlot);
			timeSlotRepo.save(selectedSlot);	
			
			return bookedEpass;			
		}
		System.out.println("required less no.");
		return null;		
	}


	@Override
	public List<Epass> getAllPasses() {
		
		return EpassRepo.findAll();
	}


	@Override
	public Epass deleteEpassDetails(int passId) {
	
		Epass epass=(Epass) EpassRepo.findByPassId(passId);
		//Epass epass=optionalEpass.orElseThrow(()->new UserNotFoundExc("Invalid Product ID "));
		EpassRepo.deleteById(passId);
		return epass;
	}


	@Override
	public List<Epass> getDetailsByUserId(int userId) {
	List<Epass> epass =EpassRepo.findByUserId(userId);
	//List<Epass> epass=pass.orElseThrow(()-> new UserNotFoundExc("id not found"));
	return epass;
	
	}


	/*@Override
	public Epass getDetailsByPassId(int passId, String templeName) {
		Epass epass = EpassRepo.findByPassIdAndTempleName(passId, templeName);
		return epass;
	}*/


	@Override
	public Epass authenticateEpass(int passId, String templeName) {
System.out.println("In Authenticate Method");
		
		return EpassRepo.findByPassIdAndTempleName(passId, templeName);
		
	}

}
