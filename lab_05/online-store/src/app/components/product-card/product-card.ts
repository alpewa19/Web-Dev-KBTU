import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css'],
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;

  @Output() liked = new EventEmitter<number>();
  @Output() deleted = new EventEmitter<number>();

  onLike() {
    this.liked.emit(this.product.id);
  }

  onDelete() {
    this.deleted.emit(this.product.id);
  }

  whatsappLink() {
    return `https://wa.me/?text=${encodeURIComponent(
      'Check out this product: ' + this.product.link
    )}`;
  }

  telegramLink() {
    return `https://t.me/share/url?url=${encodeURIComponent(
      this.product.link
    )}&text=${encodeURIComponent(this.product.name)}`;
  }
}
