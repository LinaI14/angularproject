import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';
import { InfluencerService } from '../service/influencer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {


  @Input () customerId:number|undefined;
  @Input () fullName:string|undefined;
  @Input () email:string|undefined;
  @Input () phone:string|undefined;
  @Input () address:string|undefined;
  @Input () image:string|undefined;

  @Input () problems:string|undefined;
  @Input () login:string|undefined;
  @Input () cart:string|undefined;
  
  constructor(private router:Router, public CustomerService : CustomerService) { }

  ngOnInit(): void {
  }

//   constructor(private router:Router,public customerservice:CustomerService) { }
//   ngOnInit(): void {
//     this.getAllCustomer();
//   }
//   getAllCustomer()

//   {

// this.customerservice.getAllCustomer().subscribe((x:any)=>{this.customerservice.data=x},err=>{("customererror")})




//   }
}
