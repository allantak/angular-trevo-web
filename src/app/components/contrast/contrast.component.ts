import { Component, OnInit } from '@angular/core';
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
    this.getAllProducts();
  }

  getAllProducts() {
    this.server.listProduct().subscribe((data) => {
      this.products = data.content;
    });
  }




}
