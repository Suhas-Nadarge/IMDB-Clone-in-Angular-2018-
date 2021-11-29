import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared_service/user.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';


@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {
err:any;
msg:any;
user:any;
logged:false;
public role:string;
rol:string;
i:number;
count:number=0;
toast:any;


  constructor(private userservice:UserService,public router: Router,public toastr: ToastrManager ) { }

  ngOnInit() {


  }

Validate(username:string,password:string)
{
 
 
  console.log(username);

 this.userservice.getByUsername(username).subscribe((user) =>
    {
      this.i=0;
      this.user = user;
      console.log(this.user);
      if(this.user.length==0)
      {
        this.showWarning("Username not exists");
        return false;
      }

      console.log("Password submitted-"+password);
      console.log("huuu"+this.user);
      
      
      
     for (let i in user)
{
     if(this.user[i].password==password)
    {
      localStorage.setItem('user',JSON.stringify(user));
     
      localStorage.setItem('username',username);

    //---------------role=1 for Admin && role=2 for user-----------------------
    
         if(this.user[i].roleid==2)
       {
         this.count=this.count+1;
        localStorage.setItem('role',this.user[i].roleid); 
       
        this.router.navigateByUrl('admindashboard');
       }
        else if(this.user[i].roleid==1)
       {
        this.count=this.count+1;
        localStorage.setItem('role',this.user[i].roleid);
     
       this.router.navigateByUrl('admindashboard');
       }
     
    }
    
   
    this.i=this.i+1;
}

if(this.count==0)
{
  this.showError("Incorrect Username or Password");
   this.router.navigateByUrl('loginuser');
}
else{
  this.toastr.dismissToastr(this.toast);

}

},
 (error) => {
      console.log(error);
    });
  }

// ---------------------------Toasters--------------------------------------------------------------------


  showWarning(err) {
    this.toastr.warningToastr(err, 'Alert!',{toastTimeout:6000});
}


showError(err) {
  this.toastr.errorToastr(err, 'Oops!',{toastTimeout:6000});
}












}