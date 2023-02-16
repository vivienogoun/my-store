import { Injectable } from '@angular/core';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  procarts: Product[] = [];

  constructor() { }

  getProcarts() {
    return this.procarts;
  }

  addToProcarts(product: Product): void {
    this.procarts.push(product);
  }

}
