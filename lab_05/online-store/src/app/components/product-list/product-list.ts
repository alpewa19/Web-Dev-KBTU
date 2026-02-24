import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})
export class ProductListComponent {
  products = input.required<Product[]>();

  productLiked = output<number>();
  productDeleted = output<number>();

  handleProductLiked(productId: number): void {
    this.productLiked.emit(productId);
  }

  handleProductDeleted(productId: number): void {
    this.productDeleted.emit(productId);
  }
}
