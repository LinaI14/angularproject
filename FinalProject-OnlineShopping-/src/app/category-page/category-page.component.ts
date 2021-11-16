


import { Component, OnInit,Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../service/category.service';



@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})


export class CategoryPageComponent implements OnInit {
  @Input () categoryId:number = 0;
  @Input () categoryName:string|undefined;
  @Input () influencerId:number = 0;
  @Input () Image:string|undefined;
  @Input () influencer:string|undefined;
  @Input () product:string|undefined;

  constructor(public CategoryService :CategoryService,
    private toast:ToastrService ,
    private spiner: NgxSpinnerService ,private dialog: MatDialog
    // ,public dialog: MatDialog
    ) { }

  ngOnInit(): void {
  }

  DeleteItemCategory() {
    if (this.categoryId) {
      debugger
      this.CategoryService.DeletebyIDCategory(this.categoryId);
      this.toast.success('Deleted Item ^_^');
    }
    else {
      this.toast.warning('This item cannot be deleted :(')
    }
    window.location.reload();
  }

  // UpdateCategory()
  // {
   

  
  //   const up = {
  //     categoryId : this.categoryId,
  //     categoryName: this.categoryName,
  //     influencerId : this.influencerId,
  //     Image: this.Image,
   
  //   }
  //     console.log(up);
  //     const dialogRef = this.dialog.open(UpdateCategoryComponent , {data: up});
  
  //     dialogRef.afterClosed().subscribe((result) => {
  //       if (result && this.categoryId) {
  //         this.CategoryService.updateCategory(this.categoryId, result);
  //       }
  //     });
  //   }

}
