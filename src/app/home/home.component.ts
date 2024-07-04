import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Products, Product } from '../../types';
import { ProductComponent } from "../components/product/product.component";
import { CommonModule } from "@angular/common";
import { PaginatorModule } from 'primeng/paginator';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, CommonModule, PaginatorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private productService: ProductService) {}
  products: Product[] = [];
  totalRecords: number = 0;

   onProductOutput(product: Product) {
    console.log("Output ::", product)
   }

   onPageChange(event: any) {
    this.fetchProducts(event.page, event.rows)
   }

   fetchProducts(page: number, perPage: number) {
this.productService
      .getProducts('http://localhost:3000/clothes', { page: 0, perPage: 5 })
      .subscribe((products: Products) => {
        console.log("products :",products.items)
        this.products = products.items;
        this.totalRecords = products.total;
      });
   }

  ngOnInit() {
    this.fetchProducts(0, 5)
  }


 
}
