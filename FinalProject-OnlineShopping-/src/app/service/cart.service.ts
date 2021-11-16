import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  selectedCart:any=[{}];
  data :any =[]
  constructor( private http:HttpClient,private router:Router,
    private spiner: NgxSpinnerService, private toastr: ToastrService) { }

  getAllCart() {
    return this.http.get('https://localhost:44379/api/Cart'); 
  }
  
  DeletebyIDCart(id: number) {
    this.spiner.show();
    debugger
    this.http.delete('https://localhost:44379/api/Cart/DeleteCart/' + id)
      .subscribe((data: any) => {
        this.spiner.hide();
        this.toastr.success('Deleted ^_^');

      }, err => {
        this.spiner.hide();
        this.toastr.error(err.status);

      })


  }
  CreateCart(data: any) {
    this.spiner.show();
    this.http.post('https://localhost:44379/api/Cart', data).subscribe((res: any) => {
      this.spiner.show();
     if(res){
       this.toastr.success('Created !!');
       window.location.reload();
     }else {
       this.toastr.error('Could not create the item');
     }
     this.spiner.hide();

    }, err => {
      this.spiner.hide();
      this.toastr.error(' Not Created :(');
      console.log(err);

    })
  }


}
