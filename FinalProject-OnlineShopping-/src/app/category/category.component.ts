import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr/toastr/toastr.service';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
@Input () categoryId : number | undefined
@Input () categoryName : string | undefined
@Input () influencerId : number | undefined
@Input () influencer : string | undefined
@Input () product : string | undefined


  constructor(public categoryService:CategoryService , private router:Router ) { }

  ngOnInit(): void {
   // this.getAllCategory();
  }

  // getAllCategory(){
  //   this.categoryService.getAllCategory().subscribe((x:any)=>{this.categoryService.data=x},err=>{('error message')});
  // }

}
