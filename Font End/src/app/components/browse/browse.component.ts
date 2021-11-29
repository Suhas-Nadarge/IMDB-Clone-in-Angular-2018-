import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../shared_service/movie.service';
import { Movie } from '../../models/movie';
import { NgForm } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';


@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  i: number;
  role: string;
  movies: any;
  mov: any;
  public langs: any[] = [];
  public languages: any[] = [];
  lang: any;
  rat: any;
  message: any;
  err: any;
  mvlist: any;
  movieByRL: any[] = [];
  private movie: Movie = new Movie();
  show: boolean = true;
  username:string;

  constructor(private movieservice: MovieService,public toastr:ToastrManager) { }

  ngOnInit() {
    this.i = 0;
this.username=localStorage.getItem('username');
    //  ---------------------------Getting all movies list------------------ 

    this.movieservice.getMovies().subscribe((movies) => {
      this.mov = movies;
      console.log("app--" + this.mov);
      localStorage.setItem('movies', JSON.stringify(this.movies));

      for (let i in this.mov) 
      {
        //<---------------------------pushing all languages for dropdown dynamically-----------------------------

        this.langs.push(this.mov[i].language);
        this.i = this.i + 1;

      }
      // --------------------------Removing duplicates record from array(languages are repeated)-------------

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

      //-------------------------Storing in local storage----------------------------------------------------

      console.log(this.langs);

      localStorage.setItem('languages', JSON.stringify(this.langs));

    }, (error) => {
      console.log(error);
    })

  }

  // ----------------------After submitting dropdown option-------------------------------------

  onSubmit(form: any): void {
    this.show = false;

    if (form.rating == "" && form.language == "") 
    {

      this.showError("Please select any options");
    }


    // --------------------Get Movies By Languages Only----------------------------------

    if (form.language != "" && form.rating == "") {


      this.err = "";
      this.message = "";
      this.lang = form.language;
      this.movieservice.getMoviesByLanguage(this.lang).subscribe((data) => {

        this.movies = data;
        if (this.movies.length == 0) 
        {
          this.showError("Sorry,No movies with selected language");
        }
        else 
        {
          this.showSuccess("");
        }

      },
        (error) => {
          console.log(error);
        });

    }

    // -----------------Get Movies By Rating Only---------------------------

    if (form.rating != "" && form.language == "") 
    {
     
      this.err = "";
      this.message = "";
      this.rat = form.rating;
      this.movieservice.getMoviesByRating(this.rat).subscribe((data) => {
        this.movies = data;
        if (this.movies.length == 0) {
          this.showError("Sorry,No movies with selected ratings");
        }
        else {
          this.showSuccess("");
        }
      },
        (error) => {
          console.log(error);
        });

    }

    // ------------------------Get Movies By Language && Get Movies ByRating--------------------


    if (form.rating != "" && form.language != "") 
    {
      
      this.i = 0;
      this.err = "";
      this.message = "";
      this.rat = form.rating;
      this.lang = form.language;

      this.movieservice.getMoviesByRatingLanguage(this.lang, this.rat).subscribe((data) => {
        this.movies = data;
        if (this.movies.length == 0) {
          this.showError("Sorry,No movies with selected ratings or language");
      }
        else {
          this.showSuccess("");
        }
      },
        (error) => {
          console.log(error);
        });
    }

    console.log('you submitted rating:', form.rating);
    console.log('you submitted language:', form.language);
}

// --------------------Adding To WatchList--------------------------------------------------------------

AddWatchlist(movie)
{
  var body={
  username:this.username,
  title:movie.title,
  language: movie.language,
  rating:movie.rating,
  year: movie.year,
  discription: movie.discription
  };


  this.movieservice.AddWatchlist(body)
  .subscribe(data => console.log(data), error => console.log(error));

}
// 
// -----------------------------Toaster--------------------------------------------------------------------


showSuccess(err) {
  this.toastr.successToastr(err, 'Result....',{toastTimeout:6000});
}

showError(err) {
  this.toastr.errorToastr(err, 'Oops!',{toastTimeout:6000});
}






}
