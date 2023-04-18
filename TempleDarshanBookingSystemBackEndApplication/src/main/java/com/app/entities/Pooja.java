package com.app.entities;

import java.time.LocalDate;
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

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "pooja")
@NoArgsConstructor
@Getter
@Setter
public class Pooja {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer poojaId;
	
	@Column(length = 20,name = "pooja_price")
	private double poojaPrice;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate pDate;
	
	@Column(length = 20,name = "pooja_slot")
	private String poojaSlot;
	
	
	/*@ManyToOne
	@JoinColumn(name = "u_id")
	private User poojaOwner;*/
	private int userId;
	
	/*@ManyToOne
	@JoinColumn(name = "temple_id")
	private Temple temple;*/
	
	private int templeId;

}
