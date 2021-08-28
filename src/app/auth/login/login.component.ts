import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // [x: string]: any;
  loginform: FormGroup;
  submit = false;
  constructor(
    private fb: FormBuilder,
    private back: BackendService,
    private toastr: ToastrService,
    private rout: Router,
  ) { }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }
  loginsubmit(form: FormGroup) {
    this.submit = true;
    // this.toastr.success('register','success')
    // console.log(form.value)
    this.back.login(form.value).subscribe(data => {
      // console.log(data)
      this.toastr.success('Successfully', 'login')
      //setting the login info to the localstorage
      localStorage.setItem('authData', JSON.stringify(data))
      this.rout.navigate(['home'])
    }, err => {
      console.log(err)
    })


  }

}
