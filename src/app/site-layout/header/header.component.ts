import { Component, OnInit } from '@angular/core';
import { DesignService } from 'src/app/service/design.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  value:boolean=true
  constructor(private design:DesignService) { }
val:any='';
  ngOnInit(): void {
    this.design.cart.subscribe(data=>{
      this.val=data
    })
  
  }

}
