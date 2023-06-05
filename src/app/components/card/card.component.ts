import { Component, Input, OnInit } from '@angular/core';
import { TrevoService } from 'src/app/services/trevo.service';
import { IProduct } from 'src/app/types/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() product!: IProduct;

  urlImage!: String;

  constructor(private server: TrevoService) {

  }

  ngOnInit() {
    this.getImage(this.product.productId);
  }


  imgUrlSlide1: string = 'assets/banner-1.jpg';

  getImage(id: string) {
    this.server.getIdImageProduct(id).subscribe((data) => {
      let listImage = data.imgs;
      listImage.forEach((image) => {
        this.urlImage = `http://localhost:8081/images/${image.imageId}`
      })
    })
  }
}
