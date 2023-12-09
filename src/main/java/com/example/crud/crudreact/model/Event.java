package com.example.crud.crudreact.model;

import java.sql.Date;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;


@Entity
@Table(name = "events")
@Data
public class Event {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "event_title")
	private String eventTitle;

	@Column(name = "event_description")
	private String eventDescription;

	@Column(name = "event_date")
	@DateTimeFormat(pattern = "dd/MM/yyyy")
	private Date eventDate;

	private String category;
}
