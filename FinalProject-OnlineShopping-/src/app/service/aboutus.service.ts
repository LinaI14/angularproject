import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AboutusService {
  selectedProduct:any=[{}];
  data :any =[]
  constructor( private http:HttpClient,private router:Router,
    private spiner: NgxSpinnerService, private toastr: ToastrService) { }

  getAllAboutUs() {
    return this.http.get('https://localhost:44379/api/AboutUs'); 
  }

  DeletebyIDAboutus(id: number) {
    this.spiner.show();
    debugger
    this.http.delete('https://localhost:44379/api/AboutUs/DeleteAboutUs/' + id)
      .subscribe((data: any) => {
        this.spiner.hide();
        this.toastr.success('Deleted ^_^');

      }, err => {
        this.spiner.hide();
        this.toastr.error(err.status);

      })


  }

  
  CreateAboutUs(data2: any) {
    this.spiner.show();
    debugger
    this.http.post('https://localhost:44379/api/AboutUs', data2).subscribe((res: any) => {
      this.toastr.success('Created ^_^');
      this.spiner.hide();

    }, err => {
      this.spiner.hide();
      this.toastr.error(' Not Created :(');

    })

  }
}
