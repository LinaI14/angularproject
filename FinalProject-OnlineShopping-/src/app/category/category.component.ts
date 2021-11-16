import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CreatecategoryComponent } from '../createcategory/createcategory.component';

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
@Input () image : string| undefined
@Input () influencer : string | undefined
@Input () product : string | undefined


  constructor(public categoryService:CategoryService , private router:Router ,
    private toast:ToastrService ,
    private spiner: NgxSpinnerService ,
    private dialog: MatDialog) { }

  ngOnInit(): void {
   // this.getAllCategory();
  }

  // getAllCategory(){
  //   this.categoryService.getAllCategory().subscribe((x:any)=>{this.categoryService.data=x},err=>{('error message')});
  // }
  DeleteItemcategory() {
    if (this.categoryId) {
      debugger
      this.categoryService.DeletebyIDCategory(this.categoryId);
      this.toast.success('Deleted Item ^_^');
    }
    else {
      this.toast.warning('This item cannot be deleted :(')
    }
    window.location.reload();
  }

  
  createCategory(){
    const dialogRef = this.dialog.open(CreatecategoryComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (!result.id && result){
        this.categoryService.CreateCategory(result);

      }
      
    });
  }
}


