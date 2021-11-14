import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountantService } from '../service/accountant.service';

@Component({
  selector: 'app-accountant',
  templateUrl: './accountant.component.html',
  styleUrls: ['./accountant.component.css']
})
export class AccountantComponent implements OnInit {
  @Input () accountantId:number|undefined;
  @Input () accountantName:string|undefined;
  @Input () email:string|undefined;
  @Input () phone:string|undefined;
  @Input () address:string|undefined;
  @Input () image:string|undefined;

  @Input () salary:number|undefined;
  @Input () login:string|undefined;
  @Input () problems:string|undefined;
  @Input () attendence:string|undefined;
  constructor(private router:Router, public AccountantService : AccountantService) { }

  
  ngOnInit(): void {
  }

}
