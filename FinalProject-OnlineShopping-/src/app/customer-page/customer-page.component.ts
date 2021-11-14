import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr/toastr/toastr.service';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {

  constructor(private router:Router, public CustomerService : CustomerService) { }
  ngOnInit(): void {
    this. getAllCustomer() ;
  }
  getAllCustomer() 

  {

this.CustomerService. getAllCustomer() .subscribe((x:any)=>{this.CustomerService.data=x},err=>{("CustomerError")})

  }



}
