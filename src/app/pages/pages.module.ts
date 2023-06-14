import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class PagesModule { }
