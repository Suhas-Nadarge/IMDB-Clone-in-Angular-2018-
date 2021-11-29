import { Movie } from '../models/movie';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
 import { HttpModule } from '@angular/http';
import { map } from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class MovieService {
uname:string;



private baseUrl = 'http://localhost:8778/api';

  constructor(private _http: HttpClient) {
    
   }



getMovies() {
 return this._http.get(this.baseUrl + '/movies');
}



addMovies(movie: Movie) {
  return this._http.post(this.baseUrl + '/movies/add', movie);
}



 getMoviesByRating( rating: number) {
  return this._http.get(this.baseUrl + '/movies/rating/' + rating);
 }



getMoviesByLanguage( language: string) {
  return this._http.get(this.baseUrl + '/movies/language/' + language);
 }



 getMoviesByRatingLanguage(language:string,rating:number)
 {
  return this._http.get(this.baseUrl + '/movies/language/lr/'+language+'/'+rating);
 }

// --------------------------------------------------------------------------------------


UserWatchList(username:string)
{
  return this._http.get(this.baseUrl + '/wlist/'+username);
}


Remove(id:any)
{

  return this._http.delete(this.baseUrl + '/wlist/delete/'+id);
}


AddWatchlist(body)
{
  
  return this._http.post(this.baseUrl+'/wlist/add',body);
}



 
 errorHandler( error: Response ) {
  return Observable.throw(error || 'Server Error');
 
  }

}

