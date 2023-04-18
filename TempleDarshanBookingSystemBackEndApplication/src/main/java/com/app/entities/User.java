package com.app.entities;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.Length;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "user")
@NoArgsConstructor
@Getter
@Setter
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer userId;
	@Column(length = 30)

	private String name;

	@Column(unique = true)
	private String email;
	
	@Column( nullable = false)
	private String password;

	private long mobNo;
	
	@Column(unique = true)
	private  long adharNo;

	@NotBlank(message = "Please Enter Your Address")
	private String address;
	@Column(length = 30)
	@Enumerated(EnumType.STRING)
	private Role role;

	/*@OneToMany(mappedBy = "user",cascade = CascadeType.ALL,fetch = FetchType.LAZY)
	private List<Epass> userPasses=new ArrayList<>();


	@OneToMany(mappedBy ="donationOwner" ,cascade = CascadeType.ALL,fetch = FetchType.LAZY)
	private List<Donation> userDonations=new ArrayList<>();

	@OneToMany(mappedBy = "poojaOwner",cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<Pooja> userPoojas=new ArrayList<>();
	*/
	
	
	
	
}
