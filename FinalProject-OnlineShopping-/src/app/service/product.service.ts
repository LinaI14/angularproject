import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';
// import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  selectedProduct:any=[{}];
  data :any =[]

  constructor( private http:HttpClient,private router:Router) { }

  getAllProduct() {
    return this.http.get('https://localhost:44379/api/Product'); 
  }
}
