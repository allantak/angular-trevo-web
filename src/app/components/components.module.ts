import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { ContrastComponent } from './contrast/contrast.component';
import { CardComponent } from './card/card.component';
import { CategoryComponent } from './category/category.component';
import { ButtonCategoryComponent } from './button-category/button-category.component';
import { NewletterComponent } from './newletter/newletter.component';
import { FormsModule } from '@angular/forms';
import { VideoComponent } from './video/video.component';
import { FooterComponent } from './footer/footer.component';
import { TrevoService } from '../services/trevo.service';



@NgModule({
  declarations: [
    NavbarComponent,
    HeroComponent,
    ContrastComponent,
    CardComponent,
    CategoryComponent,
    ButtonCategoryComponent,
    NewletterComponent,
    VideoComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    NavbarComponent,
    HeroComponent,
    ContrastComponent,
    CategoryComponent,
    NewletterComponent,
    VideoComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
