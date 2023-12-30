package com.example.crud.crudreact.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
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


@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/")
public class EventController {
	@Autowired
	private EventRepository eventRepository;

	//get all events REST API
	@PreAuthorize("hasAnyRole('ADMIN','USER')")
	@GetMapping("/events")
	public List<Event> getAllEvents(){
		return eventRepository.findAll();
	}

    // create new event REST API
	@PreAuthorize("hasAnyRole('ADMIN','USER')")
    @PostMapping("/events")
    public Event addNewEvent(@RequestBody Event event){
        return eventRepository.save(event);
    }

	// get event by id REST API
	@PreAuthorize("hasAnyRole('ADMIN','USER')")
	@GetMapping("/events/{id}")
	public ResponseEntity<Event> getEventById(@PathVariable Long id) {
		Event event = eventRepository.findById(id).orElseThrow(() -> new EventNotFoundException("Event with this id: "  + id + " not found"));

		return ResponseEntity.ok(event);
	}


	// update event REST API
	@PreAuthorize("hasRole('ADMIN')")
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

	// delete event REST API

	@PreAuthorize("hasRole('ADMIN')")
	@DeleteMapping("/events/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEventbyId(@PathVariable Long id) {
		Event event = eventRepository.findById(id).orElseThrow(() -> new EventNotFoundException("Event with this id: "  + id + " not found"));

		eventRepository.delete(event);

		Map<String, Boolean> result = new HashMap<>();
		result.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(result);
	}
}
