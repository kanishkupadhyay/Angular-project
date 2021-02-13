import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DesignService } from 'src/app/service/design.service';


@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
   kk:any=
    {
      id:1,
      val:''
    }
  
  commentSection:boolean=false
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
    })
    this.designService.comment.subscribe(data=>{
      this.commentSection=data
    })
    this.designService.username.subscribe(data=>{
      this.user=data
    })
    this.designService.viewComments().subscribe(data=>{
      this.comments=data
    })
  }
onClick(uname:any){

  this.kk=
    {
      val:uname.value
    }
  
  if(uname.value==''){
    alert('please write something')
  }
  else{
    this.comments.push(uname.value)
    this.designService.getComments(this.kk).subscribe(data=>{
      this.kk=data
    })
    
  }
 
}
}
