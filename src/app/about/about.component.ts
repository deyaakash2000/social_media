import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BackendService } from '../services/backend.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 aff:any=null;
 //  users :any =[];
   datas:any=[]
  constructor(
    private rout:ActivatedRoute,
    private back:BackendService
    
    ) { }

  ngOnInit(): void {
    this.rout.params.subscribe(paa=>{
      console.log(paa.id);

    })
    // this.getcall()
    // this.getapicall()
    

  }
// getcall(){
//   let r=console.log(this.back.getdata());
//   // this.aff=r;
  
// }
// getapicall(){
//   this.back.getapis().subscribe((pre:any)=>{
//      this.datas=pre.users
//      console.log(this.datas)
    
//   },ree=>{
//     console.log(ree);
//   })
// }
}
