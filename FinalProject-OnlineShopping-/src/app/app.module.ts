import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryComponent } from './category/category.component';
import { ContactusHomeComponent } from './contactus-home/contactus-home.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { AttendenceComponent } from './attendence/attendence.component';

import { AttendencePageComponent } from './attendence-page/attendence-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { OrderProductComponent } from './order-product/order-product.component';
import { OrderProductPageComponent } from './order-product-page/order-product-page.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { ProblemsComponent } from './problems/problems.component';
import { ProblemsPageComponent } from './problems-page/problems-page.component';
import { ReviewComponent } from './review/review.component';
import { ReviewPageComponent } from './review-page/review-page.component';

import { InfluencerComponent } from './influencer/influencer.component';
import { InfluencerPageComponent } from './influencer-page/influencer-page.component';
import { SanaaComponent } from './sanaa/sanaa.component';

import { AccountantComponent } from './accountant/accountant.component';
import { AccountantPageComponent } from './accountant-page/accountant-page.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { DeliveryPageComponent } from './delivery-page/delivery-page.component';
import { CreateAccountantComponent } from './create-accountant/create-accountant.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateAttendenceComponent } from './create-attendence/create-attendence.component';
import { CreateCartComponent } from './create-cart/create-cart.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { CreateContactUsComponent } from './create-contact-us/create-contact-us.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { ReportBuyCustomerComponent } from './report-buy-customer/report-buy-customer.component';
import { CreateDeliveryComponent } from './create-delivery/create-delivery.component';
import { CreateInfluencerComponent } from './create-influencer/create-influencer.component';
import { ReportBuyInfuencerComponent } from './report-buy-infuencer/report-buy-infuencer.component';
import { ReportSaleForEachinfluencerComponent } from './report-sale-for-eachinfluencer/report-sale-for-eachinfluencer.component';
import { RepotComponent } from './repot/repot.component';
import { RepotInfluencerComponent } from './repot-influencer/repot-influencer.component';
import { SearchInfluencerDTOComponent } from './search-influencer-dto/search-influencer-dto.component';










@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CheckoutComponent,
    ProductDetailsComponent,
    ShopComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    ProductComponent,
    ProductCardComponent,
    CategoryComponent,
    ContactusHomeComponent,
    CustomerComponent,
    CustomerPageComponent,
    AttendenceComponent,

    AttendencePageComponent,
    CartPageComponent,
    OrderProductComponent,
    OrderProductPageComponent,
    PaymentComponent,
    PaymentPageComponent,
    ProblemsComponent,
    ProblemsPageComponent,
    ReviewComponent,
    ReviewPageComponent,
    
    InfluencerComponent,
    InfluencerPageComponent,
    SanaaComponent,
    AccountantComponent,
    AccountantPageComponent,
    DeliveryComponent,
    DeliveryPageComponent,
    CreateAccountantComponent,
    CreateAttendenceComponent,
    CreateCartComponent,
    CreatecategoryComponent,
    CategoryPageComponent,
    CreateContactUsComponent,
    CreateCustomerComponent,
    ReportBuyCustomerComponent,
    CreateDeliveryComponent,
    CreateInfluencerComponent,
    ReportBuyInfuencerComponent,
    ReportSaleForEachinfluencerComponent,
    RepotComponent,
    RepotInfluencerComponent,
    SearchInfluencerDTOComponent,
   
  







  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    SharedModule,
    ToastrModule.forRoot(),
    ToastNoAnimationModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule



    
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
