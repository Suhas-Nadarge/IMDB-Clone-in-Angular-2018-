import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared_service/movie.service';

import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  username:string;
  movies:any;
  constructor(private movieservice:MovieService,public toastr:ToastrManager) { }

  ngOnInit() {
    this.username=localStorage.getItem('username');
 
    this.movieservice.UserWatchList(this.username).subscribe((movies) =>
    {
     
     this.movies = movies;
       
    }, ( error) => {
      console.log(error);
    })
   
  }

    Remove(id:any)
    {
      
  
  
      this.movieservice.Remove(id).subscribe((movies) =>
      {
        this.showSuccess();
       this.reload();
        
      }, ( error) => {
        console.log(error);
      }) 
    }

    reload(){
      this.movieservice.UserWatchList(this.username).subscribe((movies) =>
      {
        this.movies=movies;
      }
      );
    }

    showSuccess() {
      this.toastr.successToastr('Removed from watchlist', 'Success!',{toastTimeout:6000});
      }




}
