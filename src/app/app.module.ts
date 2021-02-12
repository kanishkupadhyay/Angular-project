import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{SiteLayoutModule}from './site-layout/site-layout.module';
import{OrdersModule}from '../app/orders/orders.module';
import{HttpClientModule}from '@angular/common/http';
import{FormsModule}from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import{MatIconModule}from '@angular/material/icon';
import{MatFormField, MatFormFieldModule}from'@angular/material/form-field'
import{MatInputModule}from'@angular/material/input'
import{MatDatepickerModule}from '@angular/material/datepicker'
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatButtonModule,
    BrowserAnimationsModule,
    SiteLayoutModule,
    OrdersModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
