import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TrevoService } from 'src/app/services/trevo.service';
import { ICategory } from 'src/app/types/cateogry';
import { IListProduct } from 'src/app/types/product';

@Component({
  selector: 'app-button-category',
  templateUrl: './button-category.component.html',
  styleUrls: ['./button-category.component.scss']
})
export class ButtonCategoryComponent {

  constructor(private server: TrevoService, private router: Router) { }

  @Input() category!: ICategory

  passCategory(category: String) {
    this.router.navigate(['product', category])
  }



}
