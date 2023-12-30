package com.example.crud.crudreact.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;


@Getter
@AllArgsConstructor
public class EventAPIException extends RuntimeException{
    private HttpStatus status;
    private String message;
}
