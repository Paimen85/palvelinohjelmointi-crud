package com.example.crud.crudreact.controller;

import com.example.crud.crudreact.dto.LoginDto;
import com.example.crud.crudreact.service.AuthService;
import com.example.crud.crudreact.dto.SingUpDto;
import lombok.AllArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/auth")
@AllArgsConstructor
public class AuthController {

    private AuthService authService;

    //create sign up REST API
    @PostMapping("/sign-up")
    public ResponseEntity<String> signUp(@RequestBody SingUpDto singUpDto) {
        String response = authService.signUp(singUpDto);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    //create log in REST API
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginDto loginDto) {
        String response = authService.login(loginDto);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
