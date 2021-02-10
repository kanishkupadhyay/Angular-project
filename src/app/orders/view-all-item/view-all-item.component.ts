import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { DesignService } from 'src/app/service/design.service';

@Component({
  selector: 'app-view-all-item',
  templateUrl: './view-all-item.component.html',
  styleUrls: ['./view-all-item.component.css']
})
export class ViewAllItemComponent implements OnInit {
num:number=0
  constructor(private designService:DesignService) { }
  pizzas:any;
  
  ngOnInit(): void {

this.designService.getPizza().subscribe(data=>{
 this.pizzas=data
})
this.designService.data.next(this.arr)



  }
  arr:any=[]
  onClick(name:any,price:any,img:any){
    this.num++
    this.designService.cart.next(this.num)
    this.designService.empCart.next(false)
    this.designService.wishList.next(true)
    // console.log(img.src)
    // console.log(name.innerText)
    // console.log(price.innerText)
    this.arr.push({
      name:name.innerText,
      price:price.innerText,
      img:img.src
    })
  }

}
