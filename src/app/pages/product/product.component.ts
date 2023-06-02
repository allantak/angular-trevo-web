import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrevoService } from 'src/app/services/trevo.service';
import { IListProduct, IProduct } from 'src/app/types/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  constructor(private server: TrevoService, private route: ActivatedRoute) { }

  listProduct!: Array<IProduct>;

  ngOnInit() {
    let paramCategory = this.route.snapshot.paramMap.get('category')

    this.listGetCategory(paramCategory);
  }

  listGetCategory(category: string | null):  Array<IProduct> | undefined {
    if (category === null) {
      return undefined;
    }

    this.server.getProductCategory(category).subscribe(data => {
      this.listProduct = data;
    });

    return this.listProduct;
  }

}
