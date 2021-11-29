package com.java.model;

import javax.annotation.Generated;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "user")
public class User {
	

	
	
	private String username;
	
	private String password;
	private  int roleid=2;

	
	public User() {
		
		
	}


	public User(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}







	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getRoleid() {
		return roleid;
	}

	public void setRoleid(int roleid) {
		this.roleid = roleid;
	}


	@Override
	public String toString() {
		return "Customer [ username=" + username + ", password=" + password + ", roleid=" + roleid + "]";
	}







}

