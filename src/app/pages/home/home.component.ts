import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TrevoService } from 'src/app/services/trevo.service';
import { ICategory } from 'src/app/types/cateogry';
import { IProduct } from 'src/app/types/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'trevo-angular';
  imgUrlSlide1: string = 'assets/banner-1.jpg';
  imgUrlSlide2: string = 'assets/banner-2.jpg';
  imgUrlSlide3: string = 'assets/banner-3.jpg';
  isLoading: boolean = true;

  listCategory: Array<ICategory> = [{
    img: 'assets/category/trator.png',
    name: 'tratores',
    category: 'TRATORES'
  },
  {
    img: 'assets/category/implementos.png',
    name: 'implementos',
    category: 'IMPLEMENTOS'
  },
  {
    img: 'assets/category/pneus.png',
    name: 'pneus',
    category: 'PNEUS'
  },
  {
    img: 'assets/category/locacao.png',
    name: 'locação',
    category: 'LOCACAO'
  },
  {
    img: 'assets/category/pecas.png',
    name: 'Peças',
    category: 'PECAS'
  },
  {
    img: 'assets/category/caminhoes.png',
    name: 'caminhoes',
    category: 'CAMINHOES'
  }
  ]

  constructor(private server: TrevoService, private router: Router) { }

  products!: Array<IProduct>;
  category!: IProduct;

  ngOnInit() {
    this.getTreeProduct();
  }

  getTreeProduct() {
    this.server.listProduct().subscribe(
      {
        next: ((value) => {
          let productsAll = value.content;
          this.products = productsAll.slice(0, 3);
          this.isLoading = false;
        }),
        error: (err) => {
          this.isLoading = true;
          console.log(err)
        }
      }
    );
  }

  passCategory() {
    this.router.navigate(['product', 'all'])
  }

  sendEmail(form: NgForm): void {
    console.log(form.value.name, form.value.email)
  }

}
