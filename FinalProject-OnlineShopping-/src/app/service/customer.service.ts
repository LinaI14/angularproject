import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  headers=["customerId","fullName","email","phone","address","image"];
  selectedCustomer:any=[{}];
  data :any =[{}]

  constructor( private http:HttpClient,private router:Router,
    private spiner: NgxSpinnerService, private toastr: ToastrService) { }

  getAllCustomer() {
    return this.http.get('https://localhost:44379/api/Customer'); 
  }

  DeletebyIDCustomer(id: number) {
    this.spiner.show();
    debugger
    this.http.delete('https://localhost:44379/api/Customer/DeleteCustomer/' + id)
      .subscribe((data: any) => {
        this.spiner.hide();
        this.toastr.success('Deleted ^_^');

      }, err => {
        this.spiner.hide();
        this.toastr.error(err.status);

      })


  }

  // CreateCustomer(data: any) {
  //   this.spiner.show();
  //   debugger
  //   this.http.post('https://localhost:44379/api/Customer', data).subscribe((res: any) => {
  //     this.toastr.success('Created ^_^');
  //     this.spiner.hide();

  //   }, err => {
  //     this.spiner.hide();
  //     this.toastr.error(' Not Created :(');

  //   })

  // }


  getCustomerById(id:number){
    debugger
    this.spiner.show();
    this.http.get('https://localhost:44379/api/Customer/SearchByCustomerId/'+id).subscribe((data:any)=>{
      // debugger
      this.selectedCustomer=data;
      console.log(this.selectedCustomer);
      this.data=this.selectedCustomer;
      // this.router.navigate(['app']);
      this.spiner.hide();

    },err=>{
      this.spiner.hide();
      this.toastr.error(err.status);
      this.router.navigate(['']);
    })
  }

  ReportBuyCustomer(id : number){
    debugger
    this.spiner.show();
    this.http.get('https://localhost:44379/api/Customer/ReportBuyCustomer/'+id).subscribe((data:any)=>{
      debugger
      this.selectedCustomer=data;
      console.log(this.selectedCustomer);
      this.data=this.selectedCustomer;
      // this.router.navigate(['app']);
      this.spiner.hide();

    },err=>{
      this.spiner.hide();
      this.toastr.error(err.status);
      this.router.navigate(['']);
    })
  }

  createCustomer(data: any) {
    this.spiner.show();
    this.http.post('https://localhost:44379/api/Customer', data).subscribe((res: any) => {
      this.spiner.show();
     if(res){
       this.toastr.success('Created ^_^');
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
