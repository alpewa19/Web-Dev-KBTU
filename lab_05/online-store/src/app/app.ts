import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list';
import { CATEGORIES } from './data/categories';
import { PRODUCTS } from './data/products';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports: [
    CommonModule,
    ProductListComponent
  ],
  styleUrls: ['./app.css'],
})
export class App {
  readonly title = signal('online-store');

  readonly categories: Category[] = CATEGORIES;

  private readonly allProducts = signal<Product[]>(PRODUCTS);

  readonly selectedCategoryId = signal<number | null>(null);

  readonly filteredProducts = computed(() => {
    const categoryId = this.selectedCategoryId();
    const products = this.allProducts();

    if (categoryId === null) {
      return [];
    }

    return products.filter((product) => product.categoryId === categoryId);
  });

  selectCategory(categoryId: number): void {
    this.selectedCategoryId.set(categoryId);
  }

  onProductLiked(productId: number): void {
    this.allProducts.update((products) =>
      products.map((product) =>
        product.id === productId
          ? { ...product, likes: product.likes + 1 }
          : product
      )
    );
  }

  onProductDeleted(productId: number): void {
    this.allProducts.update((products) =>
      products.filter((product) => product.id !== productId)
    );
  }
}
