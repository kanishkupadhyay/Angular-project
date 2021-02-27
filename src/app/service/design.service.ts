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
cartItemUrl="https://angular-pizza-database.herokuapp.com/cartItem"
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
    
    return this.httpClient.post(this.cartItemUrl,item)
  }

  getCartItem(){
    
    return this.httpClient.get(this.cartItemUrl)
  }

  deleteCartItem(id:any){
    const url=this.cartItemUrl+"/"+id;
    return this.httpClient.delete(url,id)
  }



getCommentSection(){
  return this.httpClient.get(this.commentsUrl)
}




}
