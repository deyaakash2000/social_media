import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact:FormGroup;
  submit=false;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.contact=this.fb.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]]
    })
  }
  add(form:FormGroup){
    this.submit=true;
    console.log(form)
  }

}
