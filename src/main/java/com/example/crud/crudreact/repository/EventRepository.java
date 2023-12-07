package com.example.crud.crudreact.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.crud.crudreact.model.Event;

@Repository
public interface EventRepository extends JpaRepository<Event, Long>{
    
}
