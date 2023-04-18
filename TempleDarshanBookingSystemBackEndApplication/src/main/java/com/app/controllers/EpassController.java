package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.custom_excp.UserNotFoundExc;
import com.app.entities.Epass;
import com.app.entities.Temple;
import com.app.entities.User;
import com.app.services.EpassService;
//@CrossOrigin(origins = "http://localhost:3000")
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/epass")
public class EpassController {
	
	@Autowired	
	private EpassService  epassService;
	public EpassController() {
		System.out.println("in cnst of"+getClass().getName());
	}
	
	@GetMapping
	public List<Epass> getAllPasses()
	{
		return epassService.getAllPasses();
	}
	
	@PostMapping("/devotee/{userId}")
	public ResponseEntity<?> addNewPass(@RequestBody Epass passDetails,@RequestParam(name = "slotId") int slotId, 
			@PathVariable int userId){
		
		try {
			
			return new ResponseEntity<>(epassService.addEPassDetails(passDetails, slotId, userId),HttpStatus.CREATED);
			
		}catch (RuntimeException e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);	
		}
	}
		
		@GetMapping("/userId/")
		public List<Epass> getPassByUserId(@RequestParam(name = "userId") int userId) {
			System.out.println("in pass by id method");
			return epassService.getDetailsByUserId(userId);
		}
		/*@GetMapping("/{userId}")
		public List<Epass> getPassByUserId(@PathVariable int userId) {
			System.out.println("in pass by id method");
			return epassService.getDetailsByUserId(userId);
		}*/
		
		/*@GetMapping("/passId/")
		public Epass getPassByPassId(@RequestParam(name = "passId") int passId, @RequestParam(name = "templeName") String templeName) {
			
			System.out.println("in pass by passid method");
			return epassService.getDetailsByPassId(passId, templeName);
		}*/
		
		
		@PostMapping("/passverification")
		public ResponseEntity<?> loginEpass(@RequestBody Epass passv)
		{
			int passId=passv.getPassId();
			
			String templeName=passv.getTempleName();
			System.out.println("In pass verification");
			Epass authenticateEpass= epassService.authenticateEpass(passId, templeName);
			System.out.println("Ater authenticate");
			if(authenticateEpass==null) {
					throw new UserNotFoundExc("user not found");	
			}

			return ResponseEntity.ok(authenticateEpass);		
		}
		
	
	@DeleteMapping("/{passId}")
	public ResponseEntity<?>  deleteProductDetails(@PathVariable int passId)
	{try {
		return new ResponseEntity<>(epassService.deleteEpassDetails(passId), HttpStatus.OK);
	} catch (RuntimeException e) {
		return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	}	

	}

}
