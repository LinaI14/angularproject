import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AttendenceService {

  selectedAttendence:any=[{}];
  data :any =[{}]

  constructor( private http:HttpClient,private router:Router) { }

  getAllAttendence() {
    return this.http.get('https://localhost:44379/api/Attendence'); 
  }

}
