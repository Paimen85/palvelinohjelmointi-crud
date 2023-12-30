package com.example.crud.crudreact.repository;

import com.example.crud.crudreact.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {


}
