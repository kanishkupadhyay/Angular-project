import { Component, OnInit } from '@angular/core';
import { DesignService } from 'src/app/service/design.service';
import{ActivatedRoute}from '@angular/router'
@Component({
  selector: 'app-view-all-item-by-category',
  templateUrl: './view-all-item-by-category.component.html',
  styleUrls: ['./view-all-item-by-category.component.css']
})
export class ViewAllItemByCategoryComponent implements OnInit {

  constructor(private designService:DesignService, private route:ActivatedRoute) { }
  products:any;
  productId:any;
  ngOnInit(): void {
    
    this.designService.getPizzaName().subscribe(data=>{
      this.products=data
    })
    this.route.params.subscribe(data=>{
      this.productId=data
    })
  }

}
