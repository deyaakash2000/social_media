import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from '../services/auth-service.service';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 posts:any=[]
 postform: FormGroup;
  constructor(
    private back :BackendService,
    private rout :Router,
    private auth : AuthServiceService,
    private fb : FormBuilder,
    private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.postform = this.fb.group({
      textarea:['',Validators.required]
    })

    this.getprofile()
    this.getallposts()
  }
  logout(){
    localStorage.setItem('authData',null || '{}')
    this.rout.navigate([''])

  }

  getprofile(){
    this.back.profile().subscribe(data=>{
      // console.log(data)
    },ree=>{
      console.log(ree)

    })

  }

  getallposts(){
    this.back.getallposts().subscribe((data:any)=>{
      // console.log(data)
      this.posts =data.data
      // console.log(this.posts)
      // this.getallposts()
    },err=>{
      console.log(err)
    });

  }
  loginsubmit(form : FormGroup){
    console.log(form.value)

    const payload ={
      detailsid: this.auth.getprofilecontrol(),
      contents: form.value.textarea    
      
      //its called request payload
    }
    this.back.creatpost(payload).subscribe(data=>{
      console.log(data)
      this.toastr.success('post success','success');
      this.getallposts()
      form.reset()

    },err=>{
      console.log(err)
    })

  

    
  }

}
