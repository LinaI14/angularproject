import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AboutusService {
  selectedProduct:any=[{}];
  data :any =[]
  constructor( private http:HttpClient,private router:Router) { }

  getAllAboutUs() {
    return this.http.get('https://localhost:44379/api/AboutUs'); 
  }
}
