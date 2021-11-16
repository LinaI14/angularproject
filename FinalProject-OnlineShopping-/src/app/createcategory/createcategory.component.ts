import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-createcategory',
  templateUrl: './createcategory.component.html',
  styleUrls: ['./createcategory.component.css']
})
export class CreatecategoryComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public category: any, private dialog: MatDialogRef<CreatecategoryComponent>,
  
    private CategoryService: CategoryService ) { }

    formGroup = new FormGroup({
      CategoryName: new FormControl('', Validators.required),
      InfluencerId: new FormControl('', Validators.required),
      Image: new FormControl(''),
     
  
    })
  
    ngOnInit(): void {
  
      console.log(this.category)
  
  
      if (this.category && this.category.id ){
        this.formGroup.controls.CategoryName.setValue(this.category.CategoryName);
        this.formGroup.controls.InfluencerId.setValue(this.category.InfluencerId);
        this.formGroup.controls.Image.setValue(this.category.Image);
      
       
      }
    }
  
  
   
  
    SaveItemCategory() {
      const value = this.formGroup.value; 
      //value.testimonialId = this.testimonial.testimonialId;
      console.log(value);
      if (this.category && this.category.categoryId) {
        this.dialog.close({
          ...value,
          id: this.category.id
        })
      } else {
        this.dialog.close(value)
      }
      window.location.reload();
  
    }
 

    
    // window.location.reload();
}
