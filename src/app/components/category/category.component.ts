import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TrevoService } from 'src/app/services/trevo.service';
import { ICategory } from 'src/app/types/cateogry';
import { IProduct } from 'src/app/types/product';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

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

  category!: IProduct;

  constructor(private server: TrevoService) { }

  ngOnInit() {

  }



}
