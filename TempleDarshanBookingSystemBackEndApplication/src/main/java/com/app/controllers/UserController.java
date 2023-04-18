package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.custom_excp.TempleNotFoundExc;
import com.app.custom_excp.UserNotFoundExc;
import com.app.entities.Donation;
import com.app.entities.Epass;
import com.app.entities.Role;
import com.app.entities.Temple;
import com.app.entities.User;
import com.app.services.DonationService;
import com.app.services.TempleService;
import com.app.services.UserService;
//@CrossOrigin(origins = "http://localhost:3000")
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired
	private UserService UserService;

	@Autowired
	private TempleService templeService;

	@Autowired
	private DonationService DonationService;

	public UserController() {
		System.out.println("in cnstr of"+getClass().getName());
	}

	//@PostMapping("/add")
	@PostMapping("/")
	public ResponseEntity<?> addNewUser(@RequestBody User userDetails){
		System.out.println("in add new user"+userDetails);
		
		try {
			return new ResponseEntity<>(UserService.addUserDetails(userDetails),HttpStatus.CREATED);

		}catch (RuntimeException e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);	
		}
	}

	@GetMapping("/")
	public ResponseEntity<List<User>> getAllUsers()
	{
		List<User> plist = UserService.getAllUsers();
		return ResponseEntity.ok(plist);
	}


	/*@GetMapping
	public List<User> getAllUsers()
	{
		return UserService.getAllUsers();
	}*/


	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody User user)
	{
		String email=user.getEmail();
		String password=user.getPassword();
		System.out.println("In Login");
		User authenticateUser= UserService.authenticateUser(email, password);
		System.out.println("Ater authenticate");
		if(authenticateUser==null) {

			Temple authenticateTemple = templeService.authenticateTemple(email, password);
			if(authenticateTemple != null)
				return ResponseEntity.ok(authenticateTemple);
			else
				throw new UserNotFoundExc("user not found");	
		}

		return ResponseEntity.ok(authenticateUser);		
	}


	@PutMapping("/{userId}")
	public ResponseEntity<?> updateUser(@PathVariable Integer userId, @RequestBody User userDetails){
		User user=UserService.getDetailsByUserId(userId);

		user.setAddress(userDetails.getAddress());
		user.setAdharNo(userDetails.getAdharNo());
		user.setEmail(userDetails.getEmail());
		user.setMobNo(userDetails.getMobNo());
		user.setName(userDetails.getName());
		user.setPassword(userDetails.getPassword());

		User updatedUser=UserService.addUserDetails(user);
		return ResponseEntity.ok(updatedUser);
	}

	@PostMapping("/donate")
	public ResponseEntity<?> addDonation(@RequestBody Donation donationDetails){
		System.out.println("in add new user"+donationDetails);
		try {
			return new ResponseEntity<>(DonationService.makePayment(donationDetails),HttpStatus.CREATED);

		}catch (RuntimeException e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);	
		}
	}

	

	/*@GetMapping("/{role}")
	public List<User> getUsersByRole(@PathVariable Role role) {
		return UserService.getUsersByRole(role);

	}*/


}