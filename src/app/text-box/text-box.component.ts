import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
// import { setInterval } from 'timers';
import { AuthServiceService } from '../services/auth-service.service';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit {
  touserid :any = null
  messages :any = []
  sender : any=null
  receiver :any=null
  currentuser :any = null
  chats:FormGroup;

  constructor(
    private back:BackendService,
    private auth : AuthServiceService,
    private rout : ActivatedRoute,
    private fb :FormBuilder) { }

  ngOnInit(): void {
    this.chats =this.fb.group({
      text:['',Validators.required]
    })
    this.rout.params.subscribe(params=>{
      this.touserid= params.id
    },err=>{
      console.log(err)
    })
    setInterval(()=>{
     this.getchatMessages()
    },2000);

    this.currentuser =  this.auth.getprofilecontrol()
  }
  
  getchatMessages(){
    const payload ={
      fromuserid : this.auth.getprofilecontrol(),
      touserid : this.touserid

    }
    this.back.getchatMessages(payload).subscribe((data:any)=>{
      this.messages = data.message
      this.sender =data.sender
      this.receiver =data.recevier

    },err=>{
      console.log(err);
    });
  }
  chatsubmit(form :FormGroup){
    // console.log(from)
    const payload ={
      fromuserid:this.auth.getprofilecontrol(),
      touserid: this.touserid,
      // postid : this.posts.id,
      text: form.value.text
    }
    this.back.sendmessage(payload).subscribe(data=>{
      // console.log(data)
      form.reset()
      this.getchatMessages()
    },err=>{
      console.log(err);
    })
  }

}
