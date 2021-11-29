package com.java.service;
//
//
//import java.util.ArrayList;
//import java.util.List;
//
//import org.springframework.data.mongodb.core.MongoTemplate;
//import org.springframework.data.mongodb.core.query.Criteria;
//import org.springframework.data.mongodb.core.query.MongoRegexCreator;
//import org.springframework.data.mongodb.core.query.Query;
//
//import com.java.model.Movie;
//
//public class MongoApp  implements MovieCustomeRepo{
//	private final MongoTemplate mongoTemplate;
//	@Override
//	public List<Movie> query(Movie movie) {
//		final Query query = new Query();
//		final List<Criteria> criteria = new ArrayList<>();
//		
//		if(movie.getLanguage() != null) {
//			criteria.add(Criteria.where("language").regex(MongoRegexCreator.INSTANCE.toRegularExpression(
//					movie.getLanguage(),Part.Type.CONTAINING
//			), "i"));
//		}
//		
//		
//		if(movie.getRating () != null) {
//			criteria.add(Criteria.where("rating").regex(MongoRegexCreator.INSTANCE.toRegularExpression(
//					movie.getRating(),Part.Type.CONTAINING
//			), "i"));
//		}
//		
//		
//		
//		
//		return mongoTemplate.find(query, Movie.class);
//
//	}

 
  


