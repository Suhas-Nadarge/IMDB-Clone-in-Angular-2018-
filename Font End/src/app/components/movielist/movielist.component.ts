import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../shared_service/movie.service';
import { Movie } from '../../models/movie';

import { ToastrManager } from 'ng6-toastr-notifications';


@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

public show:boolean = true;
 movies: any;
 public langs:any []=[];
 public languages:any[]=[];
 i:number;
 username:string;
 ms:string;


  constructor(private _movieservice: MovieService,public toastr: ToastrManager) { 
    
    }

  ngOnInit() { 
   
    this.username=localStorage.getItem('username');
  
    this.getMovies();
   
  }

  getMovies()
{
  this._movieservice.getMovies().subscribe((movies) =>
  {
   this.movies = movies;
   console.log("List of movies"+movies);  
  }, ( error) => {
    console.log(error);
  })
}



  AddWatchlist(movie)
  {
    this.showSuccess();
    
    var body={
    username:this.username,
    title:movie.title,
    language: movie.language,
    rating:movie.rating,
    year: movie.year,
    discription: movie.discription
    };

 console.log("adding all"+body.username+"?");
    this._movieservice.AddWatchlist(body)
    .subscribe(data => console.log(data), error => console.log(error));


  }

  showSuccess() {
    
    this.toastr.successToastr('Added to watchlist.', 'Success!',{toastTimeout:6000});
}









}

