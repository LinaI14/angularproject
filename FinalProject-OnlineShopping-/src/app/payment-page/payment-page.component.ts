import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from '../service/payment.service';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {

  constructor(private router:Router,public PaymentService : PaymentService) { }
  ngOnInit(): void {
    this.getAllPayment();
  }
  getAllPayment()

  {

this.PaymentService.getAllPayment().subscribe((x:any)=>{this.PaymentService.data=x},err=>{("attendenceError")})




  }
}
