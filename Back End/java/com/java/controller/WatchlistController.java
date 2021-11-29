package com.java.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.java.model.Movie;
import com.java.model.Watchlist;
import com.java.repo.WatchlistRepo;

@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class WatchlistController {

	@Autowired
	WatchlistRepo wr;

	@GetMapping("/wlist/{username}")
	public List<Watchlist> getByUsername(@PathVariable String username) {
		System.out.println("ssss" + wr.findByUsername(username));
		return wr.findByUsername(username);

	}

	@PostMapping("/wlist/add")
	public Watchlist AddWatchlist(@RequestBody Watchlist watchlist) {
		System.out.println("added" + wr.save(watchlist));
		return wr.save(watchlist);

	}

	@DeleteMapping("/wlist/delete/{id}")
	public void Remove(@PathVariable String id) {
		wr.deleteById(id);

	}

}
