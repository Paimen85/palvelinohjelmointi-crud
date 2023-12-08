package com.example.crud.crudreact.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.crud.crudreact.model.Event;
import com.example.crud.crudreact.repository.EventRepository;



@RestController
@RequestMapping("/api/v1/")
public class EventController {
	@Autowired
	private EventRepository eventRepository;

	//get all events REST API
	@GetMapping("/events")
	public List<Event> getAllEvents(){
		return eventRepository.findAll();
	}
}
