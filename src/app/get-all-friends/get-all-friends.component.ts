import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-get-all-friends',
  templateUrl: './get-all-friends.component.html',
  styleUrls: ['./get-all-friends.component.css']
})
export class GetAllFriendsComponent implements OnInit {
friends :any=[]
  constructor(
    private back : BackendService,
    private auth :AuthServiceService
  ) { }

  ngOnInit(): void {
    this.friendlist()
  }
  friendlist(){
    const payload={
      detailsid : this.auth.getprofilecontrol()
    }
    this.back.getallfiend(payload).subscribe((data:any)=>{
      // console.log(data.data);
      this.friends = data.data
      console.log(this.friends)
    },err=>{
      console.log(err)
    })
  }

}
