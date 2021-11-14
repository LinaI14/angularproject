import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from '../service/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @Input () cardId:number|undefined;
  @Input () ccv:number|undefined;
  @Input () nameOnCard:string|undefined;
  @Input () date:string|undefined;
  @Input () cartId:number|undefined;
  @Input () balance:number|undefined;
  // @Input () cart:string|undefined;
 
  constructor(private router:Router, public PaymentService : PaymentService) { }

  ngOnInit(): void {
  }

}
