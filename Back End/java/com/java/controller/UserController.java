package com.java.controller;


import java.util.ArrayList;


import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.java.model.User;
import com.java.repo.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class UserController {

	@Autowired
	UserRepository repository;

	@GetMapping("/users")
	public List<User> getAllUsers() {
		System.out.println("Get all Users...");
		
        return repository.findAll();
		
	}
	
	@GetMapping("users/username/{username}")
	public List<User> findByUsername(@PathVariable String username) {

		List<User> users = repository.findByUsername(username);
		
		return users;
	}
	
	
	

	@PostMapping("/users/create")
	public boolean postUser(@RequestBody User user) {

		List<User> userlist=repository.findByUsername(user.getUsername());
	
			System.out.println("user"+userlist.size());
			
			
//	------------Checking if the username is already exist--------------	
			
		if(userlist.size()!=0)
		{ 
			return false;
			
		}
		User _user = repository.save(new User(user.getUsername(), user.getPassword()));
		return true;
	}



}
