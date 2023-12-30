package com.example.crud.crudreact.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SingUpDto {
    private String name;
    private String username;
    private String email;
    private String password;
}
