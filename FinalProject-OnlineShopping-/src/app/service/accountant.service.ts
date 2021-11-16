import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AccountantService {

  selectedAccountant:any=[{}];
  data :any =[{}]

  constructor( private http:HttpClient,private router:Router,
    private spiner: NgxSpinnerService, private toastr: ToastrService) { }

  getAllAccountant() {
    return this.http.get('https://localhost:44379/api/Accountant'); 
  }

  DeletebyIDAccountant(id: number) {
    this.spiner.show();
    debugger
    this.http.delete('https://localhost:44379/api/Accountant/DeleteAccountant' + id)
      .subscribe((data: any) => {
        this.spiner.hide();
        this.toastr.success('Deleted ^_^');

      }, err => {
        this.spiner.hide();
        this.toastr.error(err.status);

      })


  }
  CreateAccountant(data2: any) {
    this.spiner.show();
    debugger
    this.http.post('https://localhost:44379/api/Accountant/', data2).subscribe((res: any) => {
      this.toastr.success('Created ^_^');
      this.spiner.hide();

    }, err => {
      this.spiner.hide();
      this.toastr.error(' Not Created :(');

    })

  }

  
  getAccountantById(id:number){
    debugger
    this.spiner.show();
    this.http.get('https://localhost:44379/api/Accountant/SearchByAccountantId/'+id).subscribe((data:any)=>{
      // debugger
      this.selectedAccountant=data;
      console.log(this.selectedAccountant);
      this.data=this.selectedAccountant;
      // this.router.navigate(['app']);
      this.spiner.hide();

    },err=>{
      this.spiner.hide();
      this.toastr.error(err.status);
      this.router.navigate(['']);
    })
  }

  createAccountant(data: any) {
    this.spiner.show();
    this.http.post('https://localhost:44379/api/Accountant', data).subscribe((res: any) => {
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
