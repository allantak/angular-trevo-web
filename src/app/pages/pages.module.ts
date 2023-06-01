import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    HttpClientModule
  ]
})
export class PagesModule { }
