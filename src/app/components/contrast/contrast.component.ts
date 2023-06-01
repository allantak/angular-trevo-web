import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { TrevoService } from 'src/app/services/trevo.service';
import { IListProduct, IProduct } from 'src/app/types/product';

@Component({
  selector: 'app-contrast',
  templateUrl: './contrast.component.html',
  styleUrls: ['./contrast.component.scss']
})
export class ContrastComponent implements OnInit {

  constructor(private server: TrevoService) { }

  products!: Array<IProduct>;

  ngOnInit() {
    this.getTreeProduct();
  }

  getTreeProduct() {
    this.server.listProduct().subscribe((data) => {
      let productsAll = data.content;
      this.products = productsAll.slice(0, 3);
    });
  }


}
