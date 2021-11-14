import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
// import { SharedModule } from './shared/shared.module';
// import { SharedRoutingModule } from './shared/shared-routing.module';
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
import { TestimonialComponent } from './testimonial/testimonial.component';
import { TestimonialPageComponent } from './testimonial-page/testimonial-page.component';
import { InfluencerComponent } from './influencer/influencer.component';
import { InfluencerPageComponent } from './influencer-page/influencer-page.component';
import { SanaaComponent } from './sanaa/sanaa.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AccountantComponent } from './accountant/accountant.component';
import { AccountantPageComponent } from './accountant-page/accountant-page.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { DeliveryPageComponent } from './delivery-page/delivery-page.component';
// import { UserprofileComponent } from './userprofile/userprofile.component';
// import { TablelistComponent } from './tablelist/tablelist.component';
// import { TypoComponent } from './typo/typo.component';
// import { IconComponent } from './icon/icon.component';
// import { MapsComponent } from './maps/maps.component';
// import { NotificationComponent } from './notification/notification.component';
// import { UpgradeComponent } from './upgrade/upgrade.component';



// import { TestComponent } from './test/test.component';
// import { TestcardComponent } from './testcard/testcard.component';





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
        TestimonialComponent,
        TestimonialPageComponent,
        InfluencerComponent,
        InfluencerPageComponent,
        SanaaComponent,
        AccountantComponent,
        AccountantPageComponent,
        DeliveryComponent,
        DeliveryPageComponent
        // UserprofileComponent,
        // TablelistComponent,
        // TypoComponent,
        // IconComponent,
        // MapsComponent,
        // NotificationComponent,
        // UpgradeComponent,
       
  
   
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // NgbModule,
    SharedModule,
    ToastrModule.forRoot(),
    ToastNoAnimationModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule

   
    // SharedRoutingModule,
    // SharedModule
  ],
  
// exports:
// [
//   HomeComponent,
//   AboutUsComponent,
//   CartComponent,
//   ContactUsComponent,
//   ProductDetailsComponent

// ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
