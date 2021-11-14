import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryService } from '../service/delivery.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  @Input () deliveryId:number|undefined;
  @Input () deliveryName:string|undefined;
  @Input () email:string|undefined;
  @Input () phone:string|undefined;
  @Input () address:string|undefined;
  @Input () image:string|undefined;

  @Input () salary:string|undefined;
  @Input () attendence:string|undefined;
  @Input () login:string|undefined;
  @Input () orderProduct:string|undefined;
  constructor(private router:Router, public DeliveryService : DeliveryService) { }

  ngOnInit(): void {
  }

}
