import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  selectedInfluencer:any=[{}];

  headers=["deliveryId","deliveryName","email","phone","address","image","salary"];

  data :any =[{}]

  constructor( private http:HttpClient,private router:Router) { }

  GetAllDelivery() {
    return this.http.get('https://localhost:44379/api/Delivery'); 
  }

}

