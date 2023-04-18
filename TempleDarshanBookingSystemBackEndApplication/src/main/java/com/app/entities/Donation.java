package com.app.entities;

import java.time.LocalDate;
import java.time.LocalDate.*;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.type.LocalDateType;
import org.hibernate.validator.constraints.Currency;
import org.hibernate.validator.constraints.Length;
import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "donation")
@NoArgsConstructor
@Getter
@Setter
public class Donation {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer donationId;

	private long donationAmount;

	private long cardNo;
	
	private String expDate;
	
	private int cvCode;
	
	private String cardOwner;
	private String donationtype;
	
	
	/*@OneToOne
	@JoinColumn(name = "u_id")
	private User donationOwner;*/
	
	/*@ManyToOne
	@JoinColumn(name = "u_id")
	private User donationOwner;*/
	private int userId;
	
	/*@ManyToOne
	@JoinColumn(name = "temple_id")
	private Temple temple;*/
	
	private int templeId;
	
}
