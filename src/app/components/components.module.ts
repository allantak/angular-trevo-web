import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { ButtonCategoryComponent } from './button-category/button-category.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { SkeletonCardComponent } from './skeleton-card/skeleton-card.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CardComponent,
    ButtonCategoryComponent,
    FooterComponent,
    SkeletonCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    CardComponent,
    SkeletonCardComponent,
    ButtonCategoryComponent
  ]
})
export class ComponentsModule { }
