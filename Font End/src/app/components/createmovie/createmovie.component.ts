
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../shared_service/movie.service';
import { Movie } from '../../models/movie';
import { Router } from '@angular/router';
//import { Form } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';

import { ToastrManager } from 'ng6-toastr-notifications';


@Component({
  selector: 'app-createmovie',
  templateUrl: './createmovie.component.html',
  styleUrls: ['./createmovie.component.css']
})
export class CreatemovieComponent implements OnInit {
  role: string = "";
  movie: Movie = new Movie();
  submitted = false;
  MovieForm:FormGroup;
  nameIsForbidden:boolean=false;
  Lang:string[]=['Arabic','Bengali','Bhojpuri','Chinese','English','French' ,'German' ,'Gujrati' ,'Hariyanvi', 'Hindi' ,'Indonesian' ,'Kannada' ,'Korean' ,'Malayalam', 'Marathi', 'Punjabi', 'Russian' ,'Spanish' ,'Tamil' ,'Telugu' ,'Urdu'];
mov:any;
i:number;
title:any[]=[];
yr:number[]=[];
j:number;

  // fm: Form;
  constructor(private movieService: MovieService, public router: Router,public toastr:ToastrManager) {
    for(this.j=1888;this.j<=2021;this.j++)
    {
     this.yr.push(this.j);
    }
   }

  ngOnInit() {
    
  

    this.i=0;
    this.movieService.getMovies().subscribe((movies) => {
      this.mov = movies;
      console.log("all" + this.mov);
      

      for (let i in this.mov) 
      {
        //<---------------------------pushing all title -----------------------------

        this.title.push(this.mov[i].title);
        this.i = this.i + 1;

      }
     
      //-------------------------Storing in local storage----------------------------------------------------

      console.log("all names"+this.title);

     

    }, (error) => {
      console.log(error);
    })

// ----------------------------------Reactiveform----------------------------------------------------------------
    
      this.MovieForm = new FormGroup({
        title: new FormControl(null,this.DontRepeat.bind(this)),
        language: new FormControl(null),
        rating: new FormControl(null),
        year: new FormControl(null),
        discription: new FormControl(null,Validators.required),

      });
      




    this.role = localStorage.getItem('role');
    if (this.role == "") 
    {
      this.router.navigateByUrl('loginuser');
    }
  }




  onSubmit() {
    this.submitted = true;
       this.movieService.addMovies(this.MovieForm.value)
      .subscribe(data => console.log(+data), error => console.log(error));
    this.router.navigateByUrl('createmovie');
}

  DontRepeat(control:FormControl):{[s:string]: boolean}{
this.nameIsForbidden=false;
 if(this.title.indexOf(control.value)!=-1)
 {
 
  this.MovieForm.invalid;
  this.nameIsForbidden=true;
  this.showError();
   return {'nameIsForbidden':true}
}

return null;

    }


    showError() {
      this.toastr.errorToastr('This movie is already exist in your database', 'Oops!',{toastTimeout:6000});
    }


}

