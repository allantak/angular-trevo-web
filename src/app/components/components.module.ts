import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { ContrastComponent } from './contrast/contrast.component';
import { CardComponent } from './card/card.component';
import { CategoryComponent } from './category/category.component';
import { ButtonCategoryComponent } from './button-category/button-category.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewletterComponent } from './newletter/newletter.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent,
    HeroComponent,
    ContrastComponent,
    CardComponent,
    CategoryComponent,
    ButtonCategoryComponent,
    NewletterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    HeroComponent,
    ContrastComponent,
    CategoryComponent,
    NewletterComponent
  ]
})
export class ComponentsModule { }
