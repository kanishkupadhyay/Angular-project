import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAllItemComponent } from './view-all-item/view-all-item.component';
import { RouterModule,Route } from '@angular/router';
import { ViewItemComponent } from './view-item/view-item.component';
import { CategoryComponent } from './category/category.component';
import{MatIconModule}from '@angular/material/icon';
import{MatButton, MatButtonModule}from '@angular/material/button'


@NgModule({
  declarations: [ViewAllItemComponent, ViewItemComponent, CategoryComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule
  ],
  exports:[ViewAllItemComponent]
})
export class OrdersModule { }
