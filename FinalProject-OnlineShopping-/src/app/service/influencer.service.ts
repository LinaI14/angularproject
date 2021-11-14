import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InfluencerService {

  selectedInfluencer:any=[{}];

  headers=["influencerId","fullName","email","phone","address","image"];

  data :any =[{}]

  constructor( private http:HttpClient,private router:Router) { }

  getAllInfluencer() {
    return this.http.get('https://localhost:44379/api/Influencer'); 
  }

}
