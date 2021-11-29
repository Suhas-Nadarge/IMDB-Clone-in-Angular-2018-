package com.java.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;


import com.java.model.Watchlist;

public interface WatchlistRepo extends MongoRepository<Watchlist, String> {

	List<Watchlist> findByUsername(String username);

	

}
