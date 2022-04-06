import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    children:[
      {
        path:'home',
        loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)
      },
      {
        path:'login',
        loadChildren:()=>import('./login/login.module').then(m=>m.LoginModule)
      },
      {
        path:'signup',
        loadChildren:()=>import('./signup/signup.module').then(m=>m.SignupModule)
      },
      {
        path:'contact',
        loadChildren:()=>import('./contact/contact.module').then(m=>m.ContactModule)
      },
      {
        path:'aboutus',
        loadChildren:()=>import('./about-us/about-us.module').then(m=>m.AboutUsModule)
      },
      {
        path:'faq',
        loadChildren:()=>import('./fa-q/fa-q.module').then(m=>m.FaQModule)
      },
      {
        path:'',
        loadChildren:()=>import('./category/category.module').then(m=>m.CategoryModule)
      },
      {
        path:'offers',
        loadChildren:()=>import('./offers/offers.module').then(m=>m.OffersModule)
      },
      {
        path:'short-code',
        loadChildren:()=>import('./short-code/short-code.module').then(m=>m.ShortCodeModule)
      },
      {
        path:'',
        loadChildren:()=>import('./single-page/single-page.module').then(m=>m.SinglePageModule)
      },
      {
        path:'checkout',
        loadChildren:()=>import('./checkout/checkout.module').then(m=>m.CheckoutModule)

      },
      {
        path:'editProfile',
        loadChildren:()=>import('./edit-profile/edit-profile.module').then(m=>m.EditProfileModule)
      },
      {
        path:'forgotPassword',
        loadChildren:()=>import('./forgot-password/forgot-password.module').then(m=>m.ForgotPasswordModule)
      },
      {
        path:'checkout/delivery',
        loadChildren:()=>import('./delivery/delivery.module').then(m=>m.DeliveryModule)
      }
    
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
