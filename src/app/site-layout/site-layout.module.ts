import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RouterModule,Route } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import{FormsModule}from '@angular/forms'
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import{MatIconModule}from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import{MatFormFieldModule}from'@angular/material/form-field'
import{MatInputModule}from'@angular/material/input'
import{MatDatepickerModule}from '@angular/material/datepicker';
import { from } from 'rxjs';
@NgModule({
  declarations: [HeaderComponent, FooterComponent, ErrorPageComponent, CartComponent, ContactComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule
  ],
  exports:[HeaderComponent,FooterComponent,ErrorPageComponent,CartComponent,ContactComponent]
})
export class SiteLayoutModule { }
