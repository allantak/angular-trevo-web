import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { take } from 'rxjs';
import { TrevoService } from 'src/app/services/trevo.service';
import { IListProduct, IProduct } from 'src/app/types/product';

@Component({
  selector: 'app-contrast',
  templateUrl: './contrast.component.html',
  styleUrls: ['./contrast.component.scss']
})
export class ContrastComponent implements OnInit {

  constructor(private server: TrevoService, private router: Router) { }

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

  passCategory() {
    this.router.navigate(['product', 'all'])
  }


}
