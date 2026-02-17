import { Component, signal } from '@angular/core';
import {ProductListComponent} from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports: [
    ProductListComponent
  ],
})
export class App {protected readonly title = signal('online-store');}
