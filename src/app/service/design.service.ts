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
commentsUrl="http://localhost:3000/comments/"
totalPrice=new BehaviorSubject(0)
cart=new BehaviorSubject(0)
empCart=new BehaviorSubject(true)
wishList=new BehaviorSubject(false)
username=new BehaviorSubject('')

val=new BehaviorSubject(0)


baseUrl = 'https://one-pizza-away-api.herokuapp.com';
  getPizza(){
    const url=`${this.baseUrl}/pizza`
    return this.httpClient.get(url)
  }
  viewProduct(categoryId:any){
    const baseurl= `http://localhost:3000/pizza/${categoryId}`
    return this.httpClient.get(baseurl)
  }
  getPizzaName(){
    const linkUrl=`${this.baseUrl}/product`;
    return this.httpClient.get(linkUrl)
  }


  createCartItem(item:any){
    const url="http://localhost:3000/cartItem";
    return this.httpClient.post(url,item)
  }

  getCartItem(){
    const url="http://localhost:3000/cartItem";
    return this.httpClient.get(url)
  }

  deleteCartItem(id:any){
    const url="http://localhost:3000/cartItem"+"/"+id;
    return this.httpClient.delete(url,id)
  }



getCommentSection(){
  return this.httpClient.get(this.commentsUrl)
}




}
