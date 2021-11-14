import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  selectedCustomer:any=[{}];

  headers=["customerId","fullName","email","phone","address","image"];

  data :any =[{}]

  constructor( private http:HttpClient,private router:Router) { }

  getAllCustomer() {
    return this.http.get('https://localhost:44379/api/Customer'); 
  }

}
