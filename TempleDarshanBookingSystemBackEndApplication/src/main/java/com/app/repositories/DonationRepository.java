package com.app.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Donation;
import com.app.entities.Epass;
import com.app.entities.Temple;
import com.app.entities.User;


public interface DonationRepository extends JpaRepository<Donation, Integer> {
	
	

}
