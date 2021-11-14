import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountantService } from '../service/accountant.service';

@Component({
  selector: 'app-accountant-page',
  templateUrl: './accountant-page.component.html',
  styleUrls: ['./accountant-page.component.css']
})
export class AccountantPageComponent implements OnInit {

  constructor(private router:Router, public AccountantService : AccountantService) { }
  ngOnInit(): void {
    this.getAllAccountant();
  }
  getAllAccountant()

  {

this.AccountantService.getAllAccountant().subscribe((x:any)=>{this.AccountantService.data=x},err=>{("AccountantError")})




  }

}
