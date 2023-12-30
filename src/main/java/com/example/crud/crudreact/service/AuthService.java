package com.example.crud.crudreact.service;

import com.example.crud.crudreact.dto.LoginDto;
import com.example.crud.crudreact.dto.SingUpDto;

public interface AuthService {
    String signUp(SingUpDto singUpDto);
    String login(LoginDto loginDto);
}
