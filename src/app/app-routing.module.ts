import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './orders/category/category.component';
import { ViewAllItemByCategoryComponent } from './orders/view-all-item-by-category/view-all-item-by-category.component';
import { ViewAllItemComponent } from './orders/view-all-item/view-all-item.component';
import { ViewItemComponent } from './orders/view-item/view-item.component';
import { CartComponent } from './site-layout/cart/cart.component';
import { ContactComponent } from './site-layout/contact/contact.component';
import { ErrorPageComponent } from './site-layout/error-page/error-page.component';

const routes: Routes = [
{path:'',redirectTo:'view-all-item',pathMatch:'full'},
{path:'view-all-item',component:ViewAllItemComponent},
{path:'view-item/:id',component:ViewItemComponent},
{path:'my-cart',component:CartComponent},
{path:'contact-us',component:ContactComponent},
{path:'view-item-category',component:ViewAllItemByCategoryComponent},
{path:'view-item-category/:id',component:ViewAllItemByCategoryComponent},
{path:'**',component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
