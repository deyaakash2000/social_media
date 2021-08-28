import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
update : FormGroup
status = false
  constructor(private fb : FormBuilder,
    private back :BackendService,
    private auth :AuthServiceService,
    private rout: Router) { }
  
  ngOnInit(): void {
    this.update = this.fb.group({
      contact :['',Validators.required]
    })
  }
  update_form(form : FormGroup){
    this.status = true
    console.log(form.value)
    this.back.updatePassword(form.value).subscribe((data:any)=>{
      // console.log(data);
      localStorage.setItem('authdatareset', JSON.stringify(data))
      this.rout.navigate(['update2'])
    },err=>{
      console.log(err)
    })
  }

}
