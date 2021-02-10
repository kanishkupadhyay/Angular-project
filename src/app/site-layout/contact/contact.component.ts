import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  onSubmit(myForm:any){
    let fname=myForm.controls.firstName.value
    let lname=myForm.controls.secondName.value
    let email=myForm.controls.email.value
    let message=myForm.controls.message.value
    let phone=myForm.controls.phone.value
    console.log(`firstName: ${fname}, secondName: ${lname}, Email: ${email}, Mobile: ${phone},Message: ${message}`)
    alert(`firstName: ${fname}, secondName: ${lname}, Email: ${email}, Mobile: ${phone},Message: ${message}`)
  }

}
