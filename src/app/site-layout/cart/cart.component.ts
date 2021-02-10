import { Component, OnInit } from '@angular/core';
import { DesignService } from 'src/app/service/design.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  emptyCart:boolean=true
  wish:boolean=false
  constructor(private design:DesignService) { 
   console.log(this.data.price)
  }
  data:any=[]
  
  num:number=0
  ngOnInit(): void {
    this.design.data.subscribe(data=>{
      this.data=data
    })
    this.design.empCart.subscribe(data=>[
      this.emptyCart=data
    ])
    this.design.wishList.subscribe(data=>{
      this.wish=data
    })
    this.design.cart.subscribe(data=>{
      this.num=data
    })
  }
  onClick(){
    this.data.splice(this.data.length-1)
    if(this.data.length==0){
      this.emptyCart=true
    }
    console.log(this.num)
    this.design.cart.next(this.num=this.num-1)
  }
  

}
