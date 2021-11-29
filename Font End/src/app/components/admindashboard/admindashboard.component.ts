import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResourceLoader } from '@angular/compiler';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
 show:boolean;
uname:string;
  role:string;
  msg:string;
  constructor(public router:Router,public toastr: ToastrManager) {
  
    
   }

  ngOnInit() {
  this.uname=localStorage.getItem('username');
    
    
    this.role="";


            
    if(localStorage.getItem('role')=="1")
    {
     this.show=true;
     this.msg='Welcome '+this.uname;
     this.showSuccess(this.msg,'Admin');
    }

    else if(localStorage.getItem('role')=="2")
    {
      this.show=false;
     this.msg='Welcome '+this.uname;
     this.showSuccess(this.msg,'User');
    }
     else
     {
       this.router.navigateByUrl('loginuser');
     }


  }

  showSuccess(msg:string,role:string) {
    
    this.toastr.successToastr(msg, role,{toastTimeout:6000});
}

}
