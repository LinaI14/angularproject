import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  headers=["deliveryId","deliveryName","email","phone","address","image","salary"];
  selectedDelivery:any=[{}];
  data :any =[{}]

  constructor(private http:HttpClient,private router:Router,
    private spiner: NgxSpinnerService, private toastr: ToastrService) { }

  GetAllDelivery() {
    return this.http.get('https://localhost:44379/api/Delivery'); 
  }

  DeletebyIDelivery(id: number) {
    this.spiner.show();
    debugger
    this.http.delete('https://localhost:44379/api/Delivery/DeleteDelivery' + id)
      .subscribe((data: any) => {
        this.spiner.hide();
        this.toastr.success('Deleted ^_^');

      }, err => {
        this.spiner.hide();
        this.toastr.error(err.status);

      })


  }

  getDeliveryById(id:number){
    debugger
    this.spiner.show();
    this.http.get('https://localhost:44379/api/Delivery/SearchByDeliveryId/'+id).subscribe((data:any)=>{
      // debugger
      this.selectedDelivery=data;
      console.log(this.selectedDelivery);
      this.data=this.selectedDelivery;
      // this.router.navigate(['app']);
      this.spiner.hide();

    },err=>{
      this.spiner.hide();
      this.toastr.error(err.status);
      this.router.navigate(['']);
    })
  }

  createDelivery(data: any) {
    this.spiner.show();
    this.http.post('https://localhost:44379/api/Delivery', data).subscribe((res: any) => {
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

