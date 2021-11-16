import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreateAccountantComponent } from '../create-accountant/create-accountant.component';
import { AccountantService } from '../service/accountant.service';

@Component({
  selector: 'app-accountant',
  templateUrl: './accountant.component.html',
  styleUrls: ['./accountant.component.css']
})
export class AccountantComponent implements OnInit {

  constructor(private dialog: MatDialog, private router: Router, public AccountantService: AccountantService) { }

  ngOnInit(): void {
    this.getAllAccountant();
  }

  getAllAccountant() {
    this.AccountantService.getAllAccountant().subscribe((x: any) => { this.AccountantService.data = x }, err => { ("customererror") })
  }


  
  createAccountant(){
    this.dialog.open(CreateAccountantComponent)
  }

  getAccountantById(e:any){
    // id:number = parseInt
    debugger
    let  id =  parseInt (e.target.value)
    this.AccountantService.getAccountantById(id);
  }

  

  CreateAccountant(){
    this.dialog.open(CreateAccountantComponent)
    }

    createaccountant(){
      const dialogRef = this.dialog.open(CreateAccountantComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        if (!result.id && result){
          this.AccountantService.createAccountant(result);
  
        }
        
      });
    }

}
