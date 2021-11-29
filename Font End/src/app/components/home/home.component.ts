import { Component, OnInit } from '@angular/core';

import { ToastrManager } from 'ng6-toastr-notifications';
import { makeAnimationEvent } from '@angular/animations/browser/src/render/shared';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  constructor(public toastr: ToastrManager) { }

  ngOnInit() {
    if(localStorage.getItem('role')=="")
    {
      this.showSuccess("Logged out");
    }
  }

  showSuccess(err) {
    this.toastr.successToastr(err,'Please log in',{toastTimeout:6000});
}






}




