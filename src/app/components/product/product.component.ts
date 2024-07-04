import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Product } from "../../../types";
import { RatingModule } from 'primeng/rating';
import { FormsModule } from "@angular/forms";


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RatingModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
 @Input() product!: Product;
 @Output() productOutput: EventEmitter<Product> = new EventEmitter<Product>();

 ngOnInIt() {
  this.productOutput.emit(this.product)
 }
}
