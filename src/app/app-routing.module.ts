import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './orders/category/category.component';
import { ViewAllItemComponent } from './orders/view-all-item/view-all-item.component';
import { ViewItemComponent } from './orders/view-item/view-item.component';
import { CartComponent } from './site-layout/cart/cart.component';
import { ContactComponent } from './site-layout/contact/contact.component';
import { ErrorPageComponent } from './site-layout/error-page/error-page.component';
import { LoginComponent } from './site-layout/login/login.component';

const routes: Routes = [
{path:'',redirectTo:'view-all-item',pathMatch:'full'},
{path:'view-all-item',component:ViewAllItemComponent},
{path:'view-item/:id',component:ViewItemComponent},
{path:'my-cart',component:CartComponent},
{path:'contact-us',component:ContactComponent},
{path:'login',component:LoginComponent},
{path:'**',component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
