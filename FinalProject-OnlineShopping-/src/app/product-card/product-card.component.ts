
import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input () productId:number|undefined;
  @Input () productName:string|undefined;
  @Input () productDesc:string|undefined;
  @Input () image:string|undefined;
  @Input () size:number|undefined;
  @Input () color:string|undefined;
  @Input () price:number|undefined;
  @Input () productNumber:number|undefined;
  @Input () reviewId:number|undefined;
  @Input () categoryId:number|undefined;
  @Input () review:string|undefined;
  @Input () category:string|undefined;
  @Input () status:string|undefined;
  @Input () cart:string|undefined;
    constructor(public product:ProductService,private toast:ToastrService) { }

  ngOnInit(): void {
  }

}
