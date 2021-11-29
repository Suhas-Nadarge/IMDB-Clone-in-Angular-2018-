package com.java.repo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import com.java.model.Movie;

@Repository
public class CustomMovieRepository {

	
	@Autowired
	MongoTemplate mongoTemplate;
	
	
	public List<Movie> getAllMovies(String language,int rating){
		
		Query query=new Query();
		
		 query.addCriteria(Criteria.where("language").is(language).and("rating").is(rating));
		 List<Movie> movies= mongoTemplate.find(query, Movie.class);
		
		return movies;
		
		
	}
	
}
