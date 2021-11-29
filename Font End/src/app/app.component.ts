import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MovieService } from '././shared_service/movie.service';

import { Observable } from 'rxjs';
import { UserService } from './shared_service/user.service';
import { Movie } from './models/movie';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  i:number;
  role:string;
  title = 'MovieSearch';
  movies: any;
  lr:boolean=false;
 public langs:any []=[];
 public languages:any[]=[];


constructor(private _movieservice: MovieService,private userservice:UserService) { }


  ngOnInit() {
    
    this.role="";
    this.role=localStorage.getItem('role');
    
    


    {
      this.i=0;
      
      this._movieservice.getMovies().subscribe((movies) =>
      {
        //
  
        this.movies = movies;
        console.log("app--"+this.movies);
        localStorage.setItem('movies',JSON.stringify(this.movies));
     
         for(let i in this.movies)
         {
    
//<---------------------------Getting all languages-----------------------------
 
          this.langs.push(this.movies[i].language);        
                   this.i=this.i+1;
          
         }
  // -------------------------------Removing duplicates record from array-------------
         
   this.langs = Array.from(new Set(this.langs.map(x => {
          let obj;
          try {
            obj = JSON.stringify(x);
          } catch (e) {
            obj = x;
          }
          return obj;
        }))).map(x => {
          let obj;
          try {
            obj = JSON.parse(x);
          } catch (e) {
            obj = x;
          }
          return obj;
        });
  
  // -----------------------------------------------------------------------------
         console.log(this.langs);
  
         localStorage.setItem('languages',JSON.stringify(this.langs)); //---------------->>>Storing in local storage
       
      }, ( error) => {
        console.log(error);
      })
     
    }
  
  }
}
  

