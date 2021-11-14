import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryService } from '../service/delivery.service';

@Component({
  selector: 'app-delivery-page',
  templateUrl: './delivery-page.component.html',
  styleUrls: ['./delivery-page.component.css']
})
export class DeliveryPageComponent implements OnInit {

  constructor(private router:Router, public DeliveryService : DeliveryService) { }
  ngOnInit(): void {
    this.GetAllDelivery() ;
  }
  GetAllDelivery()

  {

this.DeliveryService.GetAllDelivery().subscribe((x:any)=>{this.DeliveryService.data=x},err=>{("influencerError")})


  }

}


