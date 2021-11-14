import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../service/category.service';
import { SharedModule } from '../shared/shared.module';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


data : any = [];
  constructor( private router:Router , public categoryservice : CategoryService) {
   
   }

   ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory(){
    this.categoryservice.getAllCategory().subscribe((x:any)=>{this.categoryservice.data=x},err=>{('error message')});
  }
  goToShop(){
    this.router.navigate(['shop']);
}
goToDetails(){
  this.router.navigate(['product-details']);
}
goToCart()
{
  this.router.navigate(['cart']);
}
goToCheckout()
{
  this.router.navigate(['checkout']);
}
  
}
