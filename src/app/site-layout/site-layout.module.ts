import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RouterModule,Route } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import{FormsModule}from '@angular/forms'

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ErrorPageComponent, CartComponent, ContactComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[HeaderComponent,FooterComponent]
})
export class SiteLayoutModule { }
