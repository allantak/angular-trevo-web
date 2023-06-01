import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IListProduct } from '../types/product';
import { IContentImage } from '../types/image';

@Injectable({
  providedIn: 'root'
})
export class TrevoService {
  private readonly url: string = 'http://localhost:8081/';
  constructor(private http: HttpClient) { }

  listProduct() {
    return this.http.get<IListProduct>(this.url + 'products')
  }

  getIdImageProduct(idProduct: String){
    return this.http.get<IContentImage>(this.url + 'products/images/' + idProduct)
  }

}
