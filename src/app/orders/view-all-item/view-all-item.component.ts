import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { DesignService } from 'src/app/service/design.service';
import{MatSnackBar, MatSnackBarModule}from '@angular/material/snack-bar'
@Component({
  selector: 'app-view-all-item',
  templateUrl: './view-all-item.component.html',
  styleUrls: ['./view-all-item.component.css']
})
export class ViewAllItemComponent implements OnInit {
num:number=0
sendVal:number=0
total:number=0;
addBtn:boolean=false
spinner:boolean=true
  constructor(private designService:DesignService,private _snackBar: MatSnackBar) { 
   let d:any=0
   this.designService.getCartItem().subscribe(data=>{
    let kk:any=[]
    kk=data
    d=kk.length
    this.designService.val.next(d)
   })
   
   console.log(d)
  }
  pizzas:any;

  ngOnInit(): void {
  
    

this.designService.getPizza().subscribe(data=>{
 this.pizzas=data
 this.spinner=false
})
this.designService.data.next(this.arr)

  }
  arr:any=[]
  onClick(name:any,price:any,img:any,message: string, action: string){
  
    let d:any=0
   this.designService.getCartItem().subscribe(data=>{
    let kk:any=[]
    kk=data
    d=kk.length
    this.designService.val.next(d)
   })


    this.num++
    this.designService.cart.next(this.num)
    this.designService.empCart.next(false)
    this.designService.wishList.next(true)
    this._snackBar.open(message, action, {
      duration: 2000,
    });
    // console.log(img.src)
    // console.log(name.innerText)
    // console.log(price.innerText)
    this.arr={
      name:name.innerText,
      price:price.innerText,
      img:img.src
    }
    this.designService.createCartItem(this.arr).subscribe(data=>{
      this.arr=data
      console.log(data)
    })

 let newArr=this.arr.forEach((element:any) => {
      console.log(this.total=Number(element.price)+this.total)
    });
    console.log(this.sendVal)
    this.sendVal=newArr;
    this.designService.totalPrice.next(this.sendVal) 
  }
  
  
}
