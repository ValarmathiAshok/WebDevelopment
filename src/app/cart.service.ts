import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items=[];
  constructor(private http:HttpClient) { }
  addItemToCart(product)
  {
    this.items.push(product);
  }
  getAllItems()  {
    return this.items;
  }
  clearItems()
  {
    this.items=[];
    return this.items;
  }
  getShippingPrices()
  {
   // window.alert("ind");
   //window.alert(this.http.get('/assets/shipping.json'));
   this.items=this.http.get('/assets/shipping.json');
    for(var item of this.items)
    {
      window.alert(item.type);
    }
    return this.http.get('/assets/shipping.json');
  }
}