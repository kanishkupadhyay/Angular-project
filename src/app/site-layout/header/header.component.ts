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
  constructor(private design:DesignService,private router:Router) { 
    this.design.getCartItem().subscribe(data=>{
      let n:any=[]
      n=data
      this.val=n.length
     })
     
  }
val:any=0;
userName:string='';
navSection:boolean=false
loginSection:boolean=true
  ngOnInit(): void {
    // this.design.cart.subscribe(data=>{
    //   this.val=data
    // })

 this.design.val.subscribe(data=>{
   this.val=data
 })
  }
 
}
