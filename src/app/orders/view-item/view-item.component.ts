import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DesignService } from 'src/app/service/design.service';


@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {

  comments:any=[]
  user:string=''
  constructor(private route:ActivatedRoute, private designService:DesignService) { 
   
  }
productId:any;
productData:any;
  ngOnInit(): void {
    this.route.params.subscribe(data=>{
      this.productId=data.id
    })
    this.designService.viewProduct(this.productId).subscribe(data=>{
      this.productData=data
      console.log(this.productData)
    })
  
    this.designService.username.subscribe(data=>{
      this.user=data
    })
    this.designService.getCommentSection().subscribe(data=>{
      this.comments=data
    })
    
  }
onClick(uname:any){

 
 
}
}
