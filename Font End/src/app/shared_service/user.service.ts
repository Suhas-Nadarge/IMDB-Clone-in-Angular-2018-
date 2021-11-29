import { Movie } from '../models/movie';
import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
 import { HttpModule } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private baseUrl = 'http://localhost:8778/api';
uname:string;
constructor(private _http: HttpClient) { }

// ------------------------------------------------------------------------------------------

getAll()
{
   return this._http.get(this.baseUrl+'/users');
}



  getByUsername(username:string)
{
   return this._http.get(this.baseUrl+'/users/username/' +username);
}





Register(username:string,password:string)
{
  
  var body={
username:username,
password:password
  };

return this._http.post(this.baseUrl + '/users/create', body);

}

// --------------To check NavBar option(LOGIN OR LOGOUT)---------------------------
  isLoggedIn()
{

  if(localStorage.getItem('role')=="2" || localStorage.getItem('role')=="1" )
  {
   return true;
  }
 else
 {
  return false;
 }

}


isAdminLoggedIn(){
  if(localStorage.getItem('role')=="1")
  {
    
   return true;
  }
else
{
  return false;
}

}
 username()
 {
   return localStorage.getItem('username');
 }



// --------AuthGurad for Unauthorize access-----------------------------

Auth()
{
  alert("auth called")
  return !!localStorage.getItem('user');
}



}

