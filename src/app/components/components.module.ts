import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { ContrastComponent } from './contrast/contrast.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HeroComponent,
    ContrastComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    HeroComponent,
    ContrastComponent
  ]
})
export class ComponentsModule { }
