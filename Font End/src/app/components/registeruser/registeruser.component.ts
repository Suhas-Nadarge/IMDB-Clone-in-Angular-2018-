import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared_service/user.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
// import { timeout } from 'rxjs/operators';




@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})


export class RegisteruserComponent implements OnInit {

  uname: string;
  user: any;
  u: number;
  count: number = 0;
  data: any;
  link: boolean = true;
  submitted = false;
  UserForm: FormGroup;
  nameIsForbidden: boolean = false;
  username: string[] = [];
  i: number;
  usname: any;
  toast:any;
  constructor(private userservice: UserService, public router: Router, public toastr: ToastrManager) { }





  ngOnInit() {

    this.UserForm = new FormGroup({
      username: new FormControl(null, this.DontRepeat.bind(this)),
      password: new FormControl(null, Validators.required),


    });

    this.i = 0;

    this.userservice.getAll().subscribe((data) => {
      this.usname = data;
      console.log("all" + this.usname);


      for (let i in this.usname) {
        //<---------------------------pushing all username -----------------------------

        this.username.push(this.usname[i].username);
        this.i = this.i + 1;

      }

    });


  }


  onSubmit() {
    this.submitted = true;
    this.userservice.Register(this.UserForm.value.username, this.UserForm.value.password)
      .subscribe(data => console.log(+data), error => console.log(error));
    this.link = !this.link;
    this.showSuccess('Registered Successfully,please log in..')
    this.router.navigateByUrl('registeruser');
  }

  DontRepeat(control: FormControl): { [s: string]: boolean } {
    this.nameIsForbidden = false;
    if (this.username.indexOf(control.value) != -1) {

      this.UserForm.invalid;
      this.nameIsForbidden = true;
      this.showError('Username already Exists');
      return { 'nameIsForbidden': true }
    }



  }

  
//  ----------------------------Toasters------------------------------------------------

  showError(err) {
    this.toastr.warningToastr(err, 'Alert!',{toastTimeout:6000});
  
  }
  showSuccess(err) {
    this.toastr.successToastr(err, '',{toastTimeout:6000});
  }
  
}
















