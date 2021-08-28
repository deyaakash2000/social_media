import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
 posts:any =null
 comments:any=[]
 likes:any=[]
 likecount:any = 0;
 liketest="like"
 commendform : FormGroup
  toastr: any;
  constructor( private rout:ActivatedRoute,
    private back:BackendService,
    private fb : FormBuilder,
    private auth : AuthServiceService
  ) { }

  ngOnInit(): void {
    this.commendform=this.fb.group({
      textarea :['',Validators.required]
    })

    this.rout.params.subscribe(params=>{
      // console.log(params.id);
      this.getpostdetails(params.id)
      this.getpostcomments(params.id)
      this.getpostlikes(params.id)
      
    },err=>{
      console.log(err)
    })
  }
  getpostdetails(postid: any){
    const payload = {
      postid : postid
    }
    this.back.getpostdetails(payload).subscribe((data:any)=>{
      this.posts = data.data
      // console.log(this.posts)
    },err=>{
      console.log(err);
      

    })

    }
    getpostcomments(postid: any){
      const payload = {
        postid : postid
      }
      this.back.getpostcomments(payload).subscribe((data:any)=>{
        // this.posts = data.data
        this.comments =data.data
        // console.log(this.comments)
      },err=>{
        console.log(err);
        
      })
  
      }




      commendsubmit(form: FormGroup){
        // console.log(form);

        const payload ={
          detailsid:this.auth.getprofilecontrol(),
          postid : this.posts.postid,
          // postid : this.posts.id,
          contents: form.value.textarea 
        }
        this.back.createcomments(payload).subscribe(data=>{
          // console.log(data)
          form.reset()
          this.getpostcomments(this.posts.postid)
          this.toastr.success('comment success','success');
        })
        
      }





      getpostlikes(postid: any){
        const payload = {
          postid : postid
        }
        this.back.getpostlikes(payload).subscribe((data:any)=>{
          this.likes = data.data
          this.likecount =this.likes.length
          // console.log(this.posts)

          //cheacking for like status of a user
          let likestare = this.likes.filter((like :any)=>like.users.id === this.auth.getprofilecontrol());
          // console.log(likestare);
          if (likestare.length === 0) {
            this.liketest = 'like'
          }else{
            this.liketest = 'unlike'
          }
        },err=>{
          console.log(err);
          
    
        })
    
        }

        addremovelikes(postid :any){
          const payload = {
            detailsid:this.auth.getprofilecontrol(),
            postid : postid
          }
          this.back.addremovelikes(payload).subscribe((data:any)=>{
            console.log(data);
            if (data.message==="like add") {
              ++this.likecount;
              this.liketest = 'like'
            }else if (data.message === "remove like") {
              --this.likecount ;
              this.liketest = 'unlike'
            }
              
            
            // this.likes = data.data
            // this.likecount =this.likes.length
            // console.log(this.posts)
          },err=>{
            console.log(err);
            
      
          })

        }

  }


