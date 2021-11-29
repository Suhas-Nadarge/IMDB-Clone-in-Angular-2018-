package com.java.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import com.java.model.Movie;
import com.java.repo.CustomMovieRepository;

@Service
public class MovieService {

	
	@Autowired
	MongoTemplate mongoTemplate;
	
	@Autowired
	CustomMovieRepository customMovieRepository;
	
	
	public List<Movie> getAllMovies(String language, int rating){
		
		List<Movie> movies = customMovieRepository.getAllMovies(language,rating);
	
		return movies;
		
		
	}


//	public List<Movie> getAllMovies(String language, int rating) {
//		// TODO Auto-generated method stub
//		return null;
//	}
}
