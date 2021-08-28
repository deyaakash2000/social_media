import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from '../services/auth-service.service';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-friend-request',
  templateUrl: './friend-request.component.html',
  styleUrls: ['./friend-request.component.css']
})
export class FriendRequestComponent implements OnInit {

  friendRequests: any[] = [];

  constructor(
    private auth: AuthServiceService,
    private back: BackendService,
    private toastr: ToastrService

  ) {

  }

  ngOnInit(): void {
    this.getrequest()
  }

  getrequest() {
    const payload = {
      detailsid: this.auth.getprofilecontrol()
    }
    this.back.getrrequest(payload).subscribe((data: any) => {
      this.friendRequests = data.data
      // console.log(this.friendRequests);

    }, err => {
      console.log(err);
    })
  }

  manageFriendRequest(request:any, acceptance:any){
      const payload ={
        fromuserid : request.detailsid,
        touserid : this.auth.getprofilecontrol(),
        acceptance : acceptance
  }
  this.back.manageFriendRequest(payload).subscribe((data:any)=>{
      console.log(data);
      if (data.status == 'success') {
        this.toastr.success(data.status)
      this.getrequest()
      }
      else{
        this.toastr.error(data.status,'error')
      }
      this.getrequest()
  },err=>{
    console.log(err)
  })

}

}
