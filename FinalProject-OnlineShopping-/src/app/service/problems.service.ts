import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProblemsService {

  selectedProblems:any=[{}];
  data :any =[{}]

  constructor( private http:HttpClient,private router:Router) { }

  getAllProblems() {
    return this.http.get('https://localhost:44379/api/Problems'); 
  }
}
