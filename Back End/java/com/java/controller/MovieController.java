package com.java.controller;

import java.util.Collection;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.java.model.Movie;
import com.java.repo.CustomMovieRepository;

import com.java.repo.MovieRepository;
import com.java.service.MovieService;

@CrossOrigin (origins="http://localhost:4200",allowedHeaders="*")
@RestController
@RequestMapping("/api")
public class MovieController {
	
	@Autowired
	MovieRepository mr;
	
	@Autowired
	CustomMovieRepository customMovieRespository;
	
	@Autowired
	MovieService movieService;
	
	
	
//	public Page<Movie>getMovies(@RequestParam int page)
//	{
//		System.out.println("page number-"+page);
//		return mr.findAll(new PageRequest(page, 4));
//	}
	
	@GetMapping("/movies")
	public List<Movie>getMovies()
	{
	  List<Movie>list=mr.findAll();
		return list;
	}
	
	
	
	@PostMapping("/movies/add")
	public Movie addMovies(@RequestBody Movie movie)
	{
		return mr.save(movie);
		
	}
	
   @GetMapping("/movies/rating/{rating}")
    public List<Movie> getByRating(@PathVariable int rating)
    {
    	return mr.findByRating(rating);
    	
    	
    }
    
    @GetMapping("/movies/language/{language}")
    public List<Movie> getBylanguage(@PathVariable String language)
    {
    	return mr.findBylanguage(language);
    	
    	
    }
    
   
   @GetMapping("/movies/language/lr/{language}/{rating}")
   public List<Movie> getBylanguageRating(@PathVariable String language,@PathVariable int rating)
   {
	   
    	
	   return movieService.getAllMovies(language,rating);
    	
    }
    
    
	
	
}
