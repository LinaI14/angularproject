import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AccountantComponent } from 'src/app/accountant/accountant.component';
import { CustomerComponent } from 'src/app/customer/customer.component';
import { DeliveryComponent } from 'src/app/delivery/delivery.component';
import { InfluencerComponent } from 'src/app/influencer/influencer.component';
import { AccountantService } from 'src/app/service/accountant.service';
import { CustomerService } from 'src/app/service/customer.service';
import { DeliveryService } from 'src/app/service/delivery.service';
import { InfluencerService } from 'src/app/service/influencer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

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
