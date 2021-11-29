import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components//home/home.component';
import { MovielistComponent } from './components/movielist/movielist.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import {AdmindashboardComponent} from './components/admindashboard/admindashboard.component';
import {CreatemovieComponent} from './components/createmovie/createmovie.component';
import {RegisteruserComponent} from './components/registeruser/registeruser.component';
import {LoginuserComponent} from './components/loginuser/loginuser.component';
import {BrowseComponent} from './components/browse/browse.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGuard } from './auth.guard';
import { WatchlistComponent } from './components/watchlist/watchlist.component';


const routes: Routes = [
 {path: '' , redirectTo: 'home', pathMatch: 'full'},
{path: 'home', component: HomeComponent },
{path: 'movielist', component: MovielistComponent,canActivate:[AuthGuard]},
{path: 'admindashboard', component: AdmindashboardComponent,canActivate:[AuthGuard] },
{path: 'createmovie', component: CreatemovieComponent,canActivate:[AuthGuard] },
{path: 'loginuser', component:LoginuserComponent},
{path: 'registeruser', component: RegisteruserComponent},
{path: 'browse', component: BrowseComponent,canActivate:[AuthGuard]},
{path: 'logout', component: LogoutComponent},
{path:'errorpage',component:ErrorpageComponent},
{path: 'watchlist', component: WatchlistComponent },
{path: '**', component: ErrorpageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
