package com.app.services;

import java.util.List;

import com.app.entities.Epass;
import com.app.entities.Role;
import com.app.entities.User;

public interface UserService {

	
	User addUserDetails(User u);
	
	List<User> getAllUsers();
	
	User authenticateUser(String email,String password);
	
	User getDetailsByUserId(int userId);

	//List<User> getUsersByRole(Role role);
	
}
