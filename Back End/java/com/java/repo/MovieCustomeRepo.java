package com.java.repo;

import java.util.List;

import com.java.model.Movie;


public interface MovieCustomeRepo {


		
		List<Movie> getMoviebyLanguague(String language, int rating);
	 
	
}
