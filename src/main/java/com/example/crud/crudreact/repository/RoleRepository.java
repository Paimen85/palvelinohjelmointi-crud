package com.example.crud.crudreact.repository;

import com.example.crud.crudreact.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
}
