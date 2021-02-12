import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DesignService } from 'src/app/service/design.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private design:DesignService) { }

  ngOnInit(): void {
    
  }
  onSubmit(myForm:NgForm,uname:any){
    this.design.navBar.next(true)
    this.design.username.next(uname.value)
    let username=myForm.controls.username.value
    let password=myForm.controls.password.value
    console.log(`Username: ${username},Password: ${password}`)
  }
  onClick(uname:any){
    this.design.navBar.next(true)
    this.design.username.next(uname.value)
    this.design.login.next(false)
  }
}