import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAllItemComponent } from './view-all-item/view-all-item.component';
import { RouterModule,Route } from '@angular/router';
import { ViewItemComponent } from './view-item/view-item.component';
import { CategoryComponent } from './category/category.component';
import{MatIconModule}from '@angular/material/icon';
import{MatButton, MatButtonModule}from '@angular/material/button'
import{MatSnackBarModule}from '@angular/material/snack-bar'
import{MatFormFieldModule}from '@angular/material/form-field';
import{MatInputModule}from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
  declarations: [ViewAllItemComponent, ViewItemComponent, CategoryComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  exports:[ViewAllItemComponent,ViewItemComponent]
})
export class OrdersModule { }
