import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../model/Product';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public selectedCategory = null;

  constructor(private productService : ProductService) { }

  ngOnInit() {
    console.log(this.categories)
  }

  //this
  get products(): Product[]{

    return this.productService.getProducts(this.selectedCategory);
  }

  get categories() : string[]{
    return  this.productService.getCategories();
  }

  changeCategory(newCategory?: string){
    this.selectedCategory = newCategory;
  }
}
