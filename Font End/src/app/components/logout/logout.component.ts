import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
role:string;

  constructor(public router:Router) { }

  ngOnInit() {
    
    localStorage.setItem('role',"");
    this.router.navigateByUrl('home');

  }

}
