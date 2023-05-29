import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{

  constructor(){}

  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  ngOnInit() {
    const carouselElement = this.carousel.nativeElement;

    carouselElement.addEventListener('scroll', () => {
      const scrollLeft = carouselElement.scrollLeft;
      const scrollWidth = carouselElement.scrollWidth;
      const clientWidth = carouselElement.clientWidth;

      if (scrollLeft + clientWidth >= scrollWidth) {
        carouselElement.scrollLeft = 0;
      }
    });
  }

}
