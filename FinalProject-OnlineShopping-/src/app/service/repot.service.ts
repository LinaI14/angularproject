import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  headers=["productName","productDesc","image","size","color","productNumber","status" ,"categoryName" ];



  data :any =[{}]

  constructor(private http:HttpClient,private router:Router,
    private spiner: NgxSpinnerService, private toastr: ToastrService) { }

    ReportSaleInfluencer() {
      return this.http.get('https://localhost:44379/api/Influencer/ReportSaleInfluencer'); 
    }
}
