import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/types/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() product!: IProduct;

  ngOnInit() {
    console.log(this.product);
  }


  imgUrlSlide1: string = 'assets/banner-1.jpg';
}
