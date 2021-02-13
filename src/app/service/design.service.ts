import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
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
comment=new BehaviorSubject(false)
baseUrl = 'https://one-pizza-away-api.herokuapp.com';
  getPizza(){
    const url=`${this.baseUrl}/pizza`
    return this.httpClient.get(url)
  }
  viewProduct(categoryId:any){
    const baseurl= `${this.baseUrl}/${categoryId}`
    return this.httpClient.get(baseurl)
  }
  getPizzaName(){
    const linkUrl=`${this.baseUrl}/product`;
    return this.httpClient.get(linkUrl)
  }
  viewComments(){
    const vUrl="http://localhost:3000/comments";
    return this.httpClient.get(vUrl)
  }

  createUser(data:any){
    const cUrl="http://localhost:3000/users";
    return this.httpClient.post(cUrl,data)
  }
  getUser(){
    const cUrl="http://localhost:3000/users";
    return this.httpClient.get(cUrl)
  }

}
