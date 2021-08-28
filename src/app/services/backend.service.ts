import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  // getprofilecontrol() {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private http: HttpClient,
    private auth: AuthServiceService
  ) { }
  // getdata(){
  //   let data=[
  //     {
  //       id:1,
  //       name:"aakash"
  //     }
  //   ]
  //   return data
  // }

  // getapis(){
  //   // return this.http.get('https://jsonplaceholder.typicode.com/posts');
  //   // return this.http.get('http://localhost/php/data1.php');

  // }
  register(payload: any) {
    return this.http.post('http://localhost/php-test/api/register.php', payload);
  }
  login(payload: any) {
    return this.http.post('http://localhost/php-test/api/login.php', payload);
  }
  profile() {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearar ' + this.auth.gettoken())
    };
    const body = {
      id: this.auth.getprofilecontrol()
    };
    return this.http.post('http://localhost/php-test/api/profile.php', body, header)

  }

  getallposts() {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearar ' + this.auth.gettoken())
    }
    return this.http.get('http://localhost/php-test/api/get-all-posts.php', header)
  }

  creatpost(payload: any) {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearar ' + this.auth.gettoken())

    }
    return this.http.post('http://localhost/php-test/api/create-posts.php', payload, header)

  }


  getpostdetails(payload: any) {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearar ' + this.auth.gettoken())

    }
    return this.http.post('http://localhost/php-test/api/get-post-details.php', payload, header)

  }

  getpostcomments(payload: any) {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearar ' + this.auth.gettoken())

    }
    return this.http.post('http://localhost/php-test/api/get-post-under-comments.php', payload, header)

  }

  createcomments(payload: any) {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearar ' + this.auth.gettoken())
    }
    return this.http.post('http://localhost/php-test/api/creat-commend.php', payload, header)
  }



  getpostlikes(payload: any) {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearar ' + this.auth.gettoken())
    }
    return this.http.post('http://localhost/php-test/api/get-posts-like.php', payload, header)

  }





  addremovelikes(payload: any) {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearar ' + this.auth.gettoken())

    }
    return this.http.post('http://localhost/php-test/api/add-remove-like.php', payload, header)


  }


  getallusers(payload: any) {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearar ' + this.auth.gettoken())

    }
    return this.http.post('http://localhost/php-test/api/get-all-user.php', payload, header)


  }

  getchatMessages(payload: any) {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearar ' + this.auth.gettoken())

    }
    return this.http.post('http://localhost/php-test/api/get-chats-messages.php', payload, header)


  }




  sendmessage(payload: any) {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearar ' + this.auth.gettoken())

    }
    return this.http.post('http://localhost/php-test/api/send-chate-message.php', payload, header)


  }
  addfriend(payload: any) {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearar ' + this.auth.gettoken())

    }
    return this.http.post('http://localhost/php-test/api/add-request.php', payload, header)


  }

  getrrequest(payload :any){
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearar ' + this.auth.gettoken())

    }
    return this.http.post('http://localhost/php-test/api/get-request.php', payload, header)

  }

  manageFriendRequest(payload :any){
    const header = {
    headers: new HttpHeaders()
    .set('Authorization', 'Bearar ' + this.auth.gettoken())

    }
    return this.http.post('http://localhost/php-test/api/manage-likes.php', payload, header)

  }
  updatePassword(payload:any){
    // const header ={
    //   headers : new HttpHeaders()
    //   .set('Authorization', 'Bearar ' + this.auth.gettoken())
    // };
    return this.http.post('http://localhost/php-test/api/update_password_part-1.php',payload)
  }
  updatePassword2(payload:any){
    const header ={
      headers : new HttpHeaders()
      .set('Authorization' , 'Bearar ' + this.auth.updatetoken())
    }
    return this.http.post('http://localhost/php-test/api/update_passwordfinal.php',payload,header)
  }

  getallfiend(payload :any){
    const header ={
      headers : new HttpHeaders()
      .set('Authorization' , 'Bearar ' + this.auth.gettoken())
    }
    
    return this.http.post('http://localhost/php-test/api/get_friend_request.php',payload,header)
  }


}