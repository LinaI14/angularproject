import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfluencerService } from '../service/influencer.service';
import {MatDialog} from '@angular/material/dialog';
import { InfluencerComponent } from '../influencer/influencer.component';
import { AccountantService } from '../service/accountant.service';
import { AccountantComponent } from '../accountant/accountant.component';
import { DeliveryComponent } from '../delivery/delivery.component';
import { DeliveryService } from '../service/delivery.service';
import { CustomerComponent } from '../customer/customer.component';
import { CustomerService } from '../service/customer.service';


@Component({
  selector: 'app-sanaa',
  templateUrl: './sanaa.component.html',
  styleUrls: ['./sanaa.component.css']
})
export class SanaaComponent implements OnInit {


  NUMBEROFINFLUENCERS = ``;


  constructor(private router:Router, public influencerService : InfluencerService ,public dialog: MatDialog ,public AccountantService : AccountantService,public DeliveryService : DeliveryService,public CustomerService : CustomerService) { }
  ngOnInit(): void {
    this.getAllInfluencer();
    this.getallAccountant();
    this.GetAllDelivery();
    this.getAllCustomer();
  }
  getAllInfluencer()
  {

this.influencerService.getAllInfluencer().subscribe((x:any)=>{this.influencerService.data=x},err=>{("influencerError")})

  }

  openDialog() {
    this.dialog.open(InfluencerComponent);
  }

  openaccount() {
    this.dialog.open(AccountantComponent);
  }

getallAccountant(){
  this.AccountantService.getAllAccountant().subscribe((x:any)=>{this.AccountantService.data=x},err=>{("iAccountantError")})
}



openDilev() {
  this.dialog.open(DeliveryComponent);
}

GetAllDelivery(){
  this.DeliveryService. GetAllDelivery().subscribe((x:any)=>{this.DeliveryService.data=x},err=>{("DeliveryError")})
}


openCustomer()
{
  this.dialog.open(CustomerComponent);
}

getAllCustomer(){
  this.CustomerService. getAllCustomer().subscribe((x:any)=>{this.CustomerService.data=x},err=>{("CustomerError")})
}






}









