package com.java.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "watchlist")
public class Watchlist {
@Id
	String id;
	String username;
	String title;
	String language;
	int rating;
	int year;
	String discription;
	
	
	public Watchlist()
	{
		System.out.println("Def of watchlist called");
	}
	
	public Watchlist(String username, String title, String language, int rating, int year,
			String discription) {
		super();
		
		this.username = username;
		this.title = title;
		this.language = language;
		this.rating = rating;
		this.year = year;
		this.discription = discription;
	}




	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
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
		return "Watchlist [username=" + username + ", title=" + title + ", language=" + language + ", rating=" + rating
				+ ", year=" + year + ", discription=" + discription + "]";
	}

	
	
	
	
	
}
