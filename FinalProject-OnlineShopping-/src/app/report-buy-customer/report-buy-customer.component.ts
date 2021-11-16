import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-report-buy-customer',
  templateUrl: './report-buy-customer.component.html',
  styleUrls: ['./report-buy-customer.component.css']
})
export class ReportBuyCustomerComponent implements OnInit {

  
  @Input () customerName:string|undefined;
  @Input () productName:string|undefined;
  @Input () price:number|undefined;
  @Input () qty:string|undefined;
  @Input () totalPrice:number|undefined;

 
  constructor() { }

  ngOnInit(): void {
  }

}
