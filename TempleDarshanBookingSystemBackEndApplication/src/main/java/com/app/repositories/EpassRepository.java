package com.app.repositories;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Epass;
import com.app.entities.Temple;
import com.app.entities.User;


public interface EpassRepository extends JpaRepository<Epass, Integer> {

	Epass findByPassId(int passId);

	List<Epass> findByUserId(int userId);

	Epass findByPassIdAndTempleName(int passId,  String templeName);
	
	
}
