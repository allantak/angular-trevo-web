import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { ContrastComponent } from './contrast/contrast.component';
import { CardComponent } from './card/card.component';
import { CategoryComponent } from './category/category.component';
import { ButtonCategoryComponent } from './button-category/button-category.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    NavbarComponent,
    HeroComponent,
    ContrastComponent,
    CardComponent,
    CategoryComponent,
    ButtonCategoryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    HeroComponent,
    ContrastComponent,
    CategoryComponent
  ]
})
export class ComponentsModule { }
