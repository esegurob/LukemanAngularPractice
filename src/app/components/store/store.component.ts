import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../model/Product';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  myProduct: Product;
  public selectedCategory = null;
  public productPerPage = 4;
  public selectedPage = 1;

  constructor(private productService : ProductService,
              private cartService : CartService) { }

  ngOnInit() {
  }

  //this method returns all products no parameter is pass
  get products(): Product[]{
    let pageIndex = (this.selectedPage -1) * this.productPerPage;
    return this.productService.getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productPerPage);
  }

  get categories() : string[]{
    return  this.productService.getCategories();
  }

  getProductById(id: number){
    return this.myProduct = this.productService.getProductById(id);
  }
  changeCategory(newCategory?: string){
    this.selectedCategory = newCategory;
  }

  changePage(newPage : number){
    this.selectedPage = newPage;
  }

  changePageSize(newSize?: number){
    this.productPerPage = Number(newSize);
   // this.changeCategory(1);
  }

  get pageNumbers(): number[]{
    return Array(Math.ceil(this.productService
      .getProducts(this.selectedCategory).length/ this.productPerPage))
      .fill(0).map((x, i)=> i+1);
  }

  // implementation of cart services
  //this method add the product to the cart
  addProductToCart(product : Product){
    this.cartService.addLine(product);
  }

}
