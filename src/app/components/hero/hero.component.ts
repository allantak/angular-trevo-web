import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  imgUrlSlide1: string = 'assets/banner-1.jpg';
  imgUrlSlide2: string = 'assets/banner-2.jpg';
  imgUrlSlide3: string = 'assets/banner-3.jpg';

}
