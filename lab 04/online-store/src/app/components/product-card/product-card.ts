import { Component, Input } from '@angular/core';
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

  currentImage!: string;

  ngOnInit() {
    this.currentImage = this.product.image;
  }

  onEnter() {
    if (this.product.images.length > 1) {
      this.currentImage = this.product.images[0];
    }
  }

  onLeave() {
    this.currentImage = this.product.image;
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
