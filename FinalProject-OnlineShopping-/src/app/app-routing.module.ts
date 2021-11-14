import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AttendencePageComponent } from './attendence-page/attendence-page.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { AuthModule } from './auth/auth.module';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
// import { IconComponent } from './icon/icon.component';
import { InfluencerPageComponent } from './influencer-page/influencer-page.component';
import { InfluencerComponent } from './influencer/influencer.component';

// import { MapsComponent } from './maps/maps.component';
import { NotificationComponent } from './notification/notification.component';
import { OrderProductPageComponent } from './order-product-page/order-product-page.component';
import { OrderProductComponent } from './order-product/order-product.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { PaymentComponent } from './payment/payment.component';
import { ProblemsPageComponent } from './problems-page/problems-page.component';
import { ProblemsComponent } from './problems/problems.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { ReviewComponent } from './review/review.component';
import { SanaaComponent } from './sanaa/sanaa.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { TablelisttComponent } from './sharedd/tablelistt/tablelistt.component';
import { UserprofileeComponent } from './sharedd/userprofilee/userprofilee.component';
import { ShopComponent } from './shop/shop.component';
// import { TablelistComponent } from './tablelist/tablelist.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
// import { TypoComponent } from './typo/typo.component';
// import { UpgradeComponent } from './upgrade/upgrade.component';
// import { UserprofileComponent } from './userprofile/userprofile.component';


const routes: Routes = [
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
  , {
    path: 'cartPage',
    component: CartPageComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'product-details',
    component: ProductDetailsComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'AboutUs',
    component: AboutUsComponent
  },
  {
    path: 'ContactUs',
    component: ContactUsComponent
  },


  {
    path: 'shared',
    loadChildren: () => SharedModule
  }
  ,

  {
    path: 'auth',
    loadChildren: () => AuthModule
  }


  , {
    path: 'product',
    component: ProductComponent
  }
  , {
    path: 'category',
    component: CategoryComponent
  }
  , {
    path: 'customer',
    component: CustomerComponent
  },
  // {
  //   path: 'customerPage',
  //   component: CustomerPageComponent
  // }
  // , 
  // {
  //   path: 'attendence',
  //   component: AttendenceComponent
  // },
  {
    path: 'attendencePage',
    component: AttendencePageComponent
  }
  ,
  //  {
  //   path: 'orderProduct',
  //   component: OrderProductComponent
  // },
  {
    path: 'orderProductPage',
    component: OrderProductPageComponent
  }
  , 
  // {
  //   path: 'Payment',
  //   component: PaymentComponent
  // },
  {
    path: 'PaymentPage',
    component: PaymentPageComponent
  }
  , 
  // {
  //   path: 'problem',
  //   component: ProblemsComponent
  // },
  {
    path: 'problemPage',
    component: ProblemsPageComponent
  }
  , {
    path: 'review',
    component: ReviewComponent
  }
,
{
  path:'testimonial',
  component:TestimonialComponent
},
{
  path: 'InfluencerPage',
  component: InfluencerPageComponent
},
{
  path:'sanaa',
  component:SanaaComponent
},
{
    path:'sharedd', loadChildren: () => import('./sharedd/sharedd.module').then(m =>m.ShareddModule)

},
{
    path:'dashdelivery', loadChildren: () => import('./dashdelivery/dashdelivery.module').then(m =>m.DashdeliveryModule)

},
{
    path:'dashcustomer', loadChildren: () => import('./dashcustomer/dashcustomer.module').then(m =>m.DashcustomerModule)

}


// },
// {
//   path:'sharedd', loadChildren: () => import('./sharedd/sharedd.module').then(m =>m.ShareddModule)
// }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


