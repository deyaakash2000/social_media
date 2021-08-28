import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from '../services/auth-service.service';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-users.component.html',
  styleUrls: ['./get-all-users.component.css']
})
export class GetAllUsersComponent implements OnInit {
  users:any=[]

  constructor(
    private back :BackendService,
    private auth :AuthServiceService,
    private tost : ToastrService
  ) { }

  ngOnInit(): void {
    this.getallusers2()
  }
  getallusers2(){
    const paylod= {
      detailsid : this.auth.getprofilecontrol()
    }
    this.back.getallusers(paylod).subscribe((data:any)=>{
      this.users=data.data
    },err=>{
      console.log(err);
    })
  }


  addfriend(detailsid:any){
    const paylod= {
      fromuserid : this.auth.getprofilecontrol(),
      touserid :detailsid
    }
    this.back.addfriend(paylod).subscribe((data:any)=>{
      console.log(data);
      if (data.status === 'success') {
        this.tost.success(data.message,'success')
      }else{
        this.tost.error(data.message,'success')
      }
    },err=>{
      console.log(err);
    })

  }

}
