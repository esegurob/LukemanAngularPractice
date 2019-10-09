import { Injectable } from '@angular/core';
import {DataService} from './data.service';
import {Product} from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [];
  private categories: string[] = [];

  constructor(private dataSource: DataService) {

    dataSource.getProducts().subscribe(data => {
        this.products = data;
        this.categories = data.map(p => p.category)
          .filter((c, index, array) => array.indexOf(c) == index).sort();
      }
    );

  }

  // this method returns all products if parameter not pass
  // Its returns all categories if parameter is pass
  getProducts(category: string = null): Product[] {
    return this.products.filter(p => category == null || category == p.category);
  }

// this method returns a product by ID
  getProduct(id:number) : Product{
    return this.products.find(p => p.id == id);
  }

  // this method returns all categories
  getCategories() : string[]{
    return this.categories;
  }

}
