import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreateCustomerComponent } from '../create-customer/create-customer.component';
import { CustomerService } from '../service/customer.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private router: Router, public customerservice: CustomerService, private dialog: MatDialog) { }
  ngOnInit(): void {
    this.getAllCustomer();
  }
  getAllCustomer() {

    this.customerservice.getAllCustomer().subscribe((x: any) => { this.customerservice.data = x }, err => { ("customererror") })

  }

  //private dialog:MatDialog
  // CreateCustomer(){
  //   this.dialog.open(CreateCustomerComponent)
  //   }

  getCustomerById(e: any) {
    // id:number = parseInt
    debugger
    let id = parseInt(e.target.value)
    this.customerservice.getCustomerById(id);
  }

  ReportBuyCustomer(e: any) {
    // id:number = parseInt
    debugger
    let id = parseInt(e.target.value)
    this.customerservice.ReportBuyCustomer(id);
  }

  CreateCustomer() {
    this.dialog.open(CreateCustomerComponent)
  }

  createCustomer() {
    const dialogRef = this.dialog.open(CreateCustomerComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (!result.id && result) {
        this.customerservice.createCustomer(result);

      }

    });
  }

}
