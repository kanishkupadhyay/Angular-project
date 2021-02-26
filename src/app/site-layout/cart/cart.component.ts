import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DesignService } from 'src/app/service/design.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  emptyCart:boolean=true
  
  wish:boolean=false
  
  
  constructor(private design:DesignService,private _snackBar:MatSnackBar) { 
  
  }
  datas:any=[]
  total:number=0;
  num:number=0
  ngOnInit(): void {
    

    let d:any=0
   this.design.getCartItem().subscribe(data=>{
    let kk:any=[]
    kk=data
    d=kk.length
    this.design.val.next(d)
   })

   this.design.getCartItem().subscribe(data=>{
     this.datas=data
     if(this.datas.length==0){
       this.emptyCart=true
     }
     else{
       this.emptyCart=false
     }
     console.log(data)
   })
    this.design.empCart.subscribe(data=>{
      this.emptyCart=data
    })
    this.design.wishList.subscribe(data=>{
      this.wish=data
    })
    this.design.cart.subscribe(data=>{
      this.num=data
    })
   
    this.design.totalPrice.subscribe(price=>{
      this.total=price
      console.log(price)
    })
  }
  onClick(id:any,message:any,action:any){
    this.design.getCartItem().subscribe(data=>{
      this.datas=data
    })
    let d:any=0
   this.design.getCartItem().subscribe(data=>{
    let kk:any=[]
    kk=data
    d=kk.length
    this.design.val.next(d)
   })
    if(this.datas.length==0){
      this.emptyCart=true
    }
    else{
      this.emptyCart=false
    }
    
    // this.datas.splice(this.datas.length-1)
    // if(this.datas.length==0){
    //   this.emptyCart=true
    // }
  
    // this.design.cart.next(this.num=this.num-1)

    this.design.deleteCartItem(id).subscribe(data=>{
      console.log(data)
    })
    this.design.getCartItem().subscribe(data=>{
      this.datas=data
      console.log(data)
    })
    this._snackBar.open(message, action, {
      duration: 2000,
    });
   
  }
  

}
