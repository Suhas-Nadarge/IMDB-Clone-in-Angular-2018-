package com.java.model;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.web.bind.annotation.CrossOrigin;

@Document(collection= "Movie")
public class Movie {

	
	String title;
	String language;
	int rating;
	int year;
	String discription;
	
	
	public Movie()
	{
		System.out.println("Default constructor called");
	}
	

	public Movie(String title, String language, int rating, int year, String discription) {
		super();
		this.title = title;
		this.language = language;
		this.rating = rating;
		this.year = year;
		this.discription = discription;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public String getLanguage() {
		return language;
	}


	public void setLanguage(String language) {
		this.language = language;
	}


	public int getRating() {
		return rating;
	}


	public void setRating(int rating) {
		this.rating = rating;
	}


	public int getYear() {
		return year;
	}


	public void setYear(int year) {
		this.year = year;
	}


	public String getDiscription() {
		return discription;
	}


	public void setDiscription(String discription) {
		this.discription = discription;
	}


	@Override
	public String toString() {
		return "Movie [title=" + title + ", language=" + language + ", rating=" + rating + ", year=" + year
				+ ", discription=" + discription + "]";
	}
	
	
	
	
	
	
}
