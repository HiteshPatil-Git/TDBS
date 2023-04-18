package com.app.entities;


import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Length;
import org.springframework.data.mapping.AccessOptions.GetOptions.GetNulls;
import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Entity
@Table(name = "timeslot")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TimeSlot {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer slotId;
	
	@Column(length = 20)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate slotDate;
	
	//Slot Timing
	@Column(length = 20)
	private String slot;
	
	
	//Max. Person Allowed for particular slot timing
	private int maxPersonPerSlot;
	
	
	//Available to book
	private int availableSlot;
	
	/*@ManyToOne
	@JoinColumn(name = "temple_id")
	private Temple temple;*/
	private String templeName;
}
