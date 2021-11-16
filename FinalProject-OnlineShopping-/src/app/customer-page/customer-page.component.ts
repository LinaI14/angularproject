import { Component, OnInit,Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {

  @Input () customerId:number|undefined;
  @Input () fullName:string|undefined;
  @Input () email:string|undefined;
  @Input () phone:string|undefined;
  @Input () address:string|undefined;
  @Input () image:string|undefined;
  @Input () problems:string|undefined;
  @Input () login:string|undefined;
  @Input () cart:string|undefined;
 
    constructor(public CustomerPage:CustomerService,
      private toast:ToastrService ,
    private spiner: NgxSpinnerService,
    private router:Router) { }

   

  ngOnInit(): void {
  }

  DeleteItemcustomer() {
    if (this.customerId) {
      debugger
      this.CustomerPage.DeletebyIDCustomer(this.customerId);
      this.toast.success('Deleted Item ^_^');
    }
    else {
      this.toast.warning('This item cannot be deleted :(')
    }
    window.location.reload();
  }

  // GetCustomerById(e:any){
  //   this.CustomerPage.getCustomerById(e.target.value);
  // }

  goToPrpfile(){
    this.router.navigate(['customerId']);
  }

}
