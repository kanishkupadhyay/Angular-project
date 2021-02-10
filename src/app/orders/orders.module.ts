import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAllItemComponent } from './view-all-item/view-all-item.component';
import { RouterModule,Route } from '@angular/router';
import { ViewItemComponent } from './view-item/view-item.component';
import { ViewAllItemByCategoryComponent } from './view-all-item-by-category/view-all-item-by-category.component';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [ViewAllItemComponent, ViewItemComponent, ViewAllItemByCategoryComponent, CategoryComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[ViewAllItemComponent]
})
export class OrdersModule { }
