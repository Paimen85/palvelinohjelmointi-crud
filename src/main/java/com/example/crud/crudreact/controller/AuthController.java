package com.example.crud.crudreact.controller;

import com.example.crud.crudreact.service.AuthService;
import com.example.crud.crudreact.dto.SingUpDto;
import lombok.AllArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
