import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'product', component: ProductComponent},
    {path: 'cart', component: CartComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'login', component: LoginComponent}



]