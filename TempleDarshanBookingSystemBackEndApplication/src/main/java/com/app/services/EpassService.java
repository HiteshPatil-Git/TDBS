package com.app.services;



import java.util.List;

import com.app.entities.Epass;
import com.app.entities.User;


public interface EpassService {
	
	Epass addEPassDetails(Epass u, int slotId, int userId);
	
	List<Epass> getAllPasses();
	
	Epass deleteEpassDetails(int passId);

	List<Epass> getDetailsByUserId(int userId);

	//Epass getDetailsByPassId(int passId, String templeName);

	Epass authenticateEpass(int passId, String templeName);
}
