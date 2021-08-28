import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regsform:FormGroup;
  submit=false;
  constructor(
    
    private fb:FormBuilder, //dependency Injection
    private backend :BackendService,   //dependency Injection
    private rout :Router, //dependency Injection
    private toastr: ToastrService//dependency Injection
    ) { }

  ngOnInit(): void {
    this.regsform=this.fb.group({
     
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password : ['',Validators.required],
      contact :['',Validators.required]
    })
  }

  final(form:FormGroup){
    this.submit=true
    // console.log(form.value)
    this.backend.register(form.value).subscribe(data=>{
      // console.log(data)
      this.toastr.success('register','success')
      this.rout.navigate([''])
    },err=>{
      console.log(err)
    });

  }

}
