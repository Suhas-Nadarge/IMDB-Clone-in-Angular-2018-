package com.java.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.java.model.User;

public interface UserRepository extends MongoRepository<User, String>{

	List<User> findByUsername(String username);


	
}
