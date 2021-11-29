import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './shared_service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userservice:UserService,public router:Router)
  {


  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
  
      if(localStorage.getItem('user'))
      {
        return true;

      }
      else
      {
        this.router.navigateByUrl('home');
return false;
      }


  }
}
