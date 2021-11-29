package com.java.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.java.model.Movie;

public interface MovieRepository extends MongoRepository<Movie, String> {

	List<Movie> findByRating(int rating);

	List<Movie> findBylanguage(String language);
	

}
