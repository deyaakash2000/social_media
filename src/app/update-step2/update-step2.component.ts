import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from '../services/auth-service.service';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-update-step2',
  templateUrl: './update-step2.component.html',
  styleUrls: ['./update-step2.component.css']
})
export class UpdateStep2Component implements OnInit {
  update2 : FormGroup
  constructor(
    private auth: AuthServiceService,
    private back: BackendService,
    private toastr: ToastrService,
    private fb :FormBuilder) { }
  
  ngOnInit(): void {
    this.update2 = this.fb.group({
      password:['',Validators.required]
    })
  }
  update_form2(form :FormGroup){
    console.log(form.value)
    const payload ={
      id : this.auth.updatecheacking(),
      password :form.value.password
    }

    this.back.updatePassword2(payload).subscribe((data:any)=>{
      console.log(data)
      this.toastr.success("Update","Success !")
      form.reset()
    },err=>{
      console.log(err)
    })
  }

}
