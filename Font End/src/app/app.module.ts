import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import  {RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components//home/home.component';
import { MovielistComponent } from './components/movielist/movielist.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { UserService } from './shared_service/user.service';
import {MovieService} from './shared_service/movie.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { CreatemovieComponent } from './components/createmovie/createmovie.component';
 import { FormsModule} from '@angular/forms';
import { RegisteruserComponent } from './components/registeruser/registeruser.component';
import { LoginuserComponent } from './components/loginuser/loginuser.component';
import { BrowseComponent } from './components/browse/browse.component';
import { LogoutComponent } from './components/logout/logout.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ng6-toastr-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovielistComponent,
    ErrorpageComponent,
    AdmindashboardComponent,
    CreatemovieComponent,
    RegisteruserComponent,
    LoginuserComponent,
    BrowseComponent,
    LogoutComponent,
    WatchlistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
