import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { TrevoService } from 'src/app/services/trevo.service';
import { IProduct } from 'src/app/types/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  constructor(private server: TrevoService, private route: ActivatedRoute, private router: Router) { }

  listProduct!: Array<IProduct>;
  imgTest: String = 'assets/banner-1.jpg'
  isLoading: boolean = true;

  ngOnInit() {
    let paramCategory = this.route.snapshot.paramMap.get('category')
    this.scrollToTop()
    if (paramCategory === 'all') {
      this.listAllProduct();
    } else {
      this.listGetCategory(paramCategory);
    }
  }

  listGetCategory(category: string | null): Array<IProduct> | undefined {
    if (category === null) {
      return undefined;
    }

    this.server.getProductCategory(category).subscribe(data => {
      this.listProduct = data;
      this.isLoading = false;
    });


    return this.listProduct;
  }

  listAllProduct() {
    this.server.listProduct().subscribe(data => {
      this.listProduct = data.content;
      this.isLoading = false;
    })
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
