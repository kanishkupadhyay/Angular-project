import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DesignService } from 'src/app/service/design.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  value:boolean=true
  constructor(private design:DesignService,private router:Router) { }
val:any='';
userName:string='';
navSection:boolean=false
loginSection:boolean=true
  ngOnInit(): void {
    this.design.cart.subscribe(data=>{
      this.val=data
    })
  this.design.navBar.subscribe(data=>{
    this.navSection=data
  })
  this.design.username.subscribe(data=>{
    this.userName=data
  })
  this.design.login.subscribe(data=>{
    this.loginSection=data
  })
  }
  onLogout(){
  this.design.login.next(true)
  this.design.navBar.next(false)
    this.router.navigate(['view-all-item'])
    this.design.comment.next(false)
  }
  
}
