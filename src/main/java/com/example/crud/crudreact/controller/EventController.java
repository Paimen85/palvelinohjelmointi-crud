package com.example.crud.crudreact.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.crud.crudreact.exception.EventNotFoundException;
import com.example.crud.crudreact.model.Event;
import com.example.crud.crudreact.repository.EventRepository;


@CrossOrigin(origins = "http://localhost:3000/")
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

    // create new event REST API
    @PostMapping("/events")
    public Event addNewEvent(@RequestBody Event event){
        return eventRepository.save(event);
    }

	// get event by id REST API
	@GetMapping("/events/{id}")
	public ResponseEntity<Event> getEventById(@PathVariable Long id) {
		Event event = eventRepository.findById(id).orElseThrow(() -> new EventNotFoundException("Event with this id: "  + id + " not found"));

		return ResponseEntity.ok(event);
	}


	// update event REST API
	@PutMapping("/events/{id}")
	public ResponseEntity<Event> updateEventbyId(@PathVariable Long id, @RequestBody Event e) {
		Event event = eventRepository.findById(id).orElseThrow(() -> new EventNotFoundException("Event with this id: "  + id + " not found"));
		event.setEventTitle(e.getEventTitle());
		event.setEventDescription(e.getEventDescription());
		event.setEventDate(e.getEventDate());
		event.setCategory(e.getCategory());
		
		Event updatedEvent = eventRepository.save(event);

		return ResponseEntity.ok(updatedEvent);
	}
}
