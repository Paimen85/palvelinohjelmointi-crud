package com.example.crud.crudreact.service.impl;

import com.example.crud.crudreact.dto.SingUpDto;
import com.example.crud.crudreact.exception.EventAPIException;
import com.example.crud.crudreact.model.Role;
import com.example.crud.crudreact.model.User;
import com.example.crud.crudreact.repository.RoleRepository;
import com.example.crud.crudreact.repository.UserRepository;
import com.example.crud.crudreact.service.AuthService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
@AllArgsConstructor
public class AuthServiceImpl implements AuthService {

    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;

    @Override
    public String signUp(SingUpDto singUpDto) {

        if (userRepository.existsByUsername(singUpDto.getUsername())) {
            throw new EventAPIException(HttpStatus.BAD_REQUEST, "Username already exists");
        }

        if (userRepository.existsByEmail(singUpDto.getEmail())) {
            throw new EventAPIException(HttpStatus.BAD_REQUEST, "Email already exists");
        }

        User user = new User();

        user.setName(singUpDto.getName());
        user.setUsername(singUpDto.getUsername());
        user.setEmail(singUpDto.getEmail());
        user.setPassword(passwordEncoder.encode(singUpDto.getPassword()));

        Set<Role> roles = new HashSet<>();
        Role role = roleRepository.findByName("ROLE_USER");
        roles.add(role);
        user.setRoles(roles);

        userRepository.save(user);
        return "User signed up successfully";
    }
}
