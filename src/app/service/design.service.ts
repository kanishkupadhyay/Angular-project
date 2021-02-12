import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DesignService {

  constructor(private httpClient:HttpClient) { }
  
data=new BehaviorSubject({
  name:'',
  price:0
})
navBar=new BehaviorSubject(false)
totalPrice=new BehaviorSubject(0)
cart=new BehaviorSubject(0)
empCart=new BehaviorSubject(true)
wishList=new BehaviorSubject(false)
username=new BehaviorSubject('')
login=new BehaviorSubject(true)
  getPizza(){
    const url="http://localhost:3000/pizza"
    return this.httpClient.get(url)
  }
  viewProduct(categoryId:any){
    const baseurl="http://localhost:3000/pizza/"+categoryId
    return this.httpClient.get(baseurl)
  }
  getPizzaName(){
    const linkUrl="http://localhost:3000/product";
    return this.httpClient.get(linkUrl)
  }
}
