package com.app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_excp.UserNotFoundExc;
import com.app.entities.Epass;
import com.app.entities.Role;
import com.app.entities.User;
import com.app.repositories.UserRepository;
@Service
@Transactional
public class UserImpl implements UserService {

	@Autowired
	private UserRepository UserRepo;
	


	@Override
	public User addUserDetails(User u) {
		/*String s=String.format("%s",u.getRole()); 
		if( s == "Devotee") {
			u.setRole(Role.Devotee);
		}
		else {
			u.setRole(Role.TempleAdmin);
		}*/
		return UserRepo.save(u);
	}



	@Override
	public List<User> getAllUsers() {
		
		return UserRepo.findAll();
	}


	@Override
	public User authenticateUser(String email, String password) {
		System.out.println("In Authenticate Method");
		
		return UserRepo.findByEmailAndPassword(email, password);
	}



	@Override
	public User getDetailsByUserId(int userId) {
		Optional<User> user=UserRepo.findById(userId);
		User userd=user.orElseThrow(()-> new UserNotFoundExc("id not found"));
		return userd;
	
	}

	/*@Override
	public List<User> getUsersByRole(Role role) {
		
		List<User> users=UserRepo.findByRole(role);
		if(users.isEmpty()) {
			return null;
			
		}else {
			return users;			
		}
		
	}*/

}
