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
    for (var p of this.procarts) {
      if (p.name == product.name) {
        p.amount += product.amount
        return
      }
    }
    this.procarts.push(product);
  }

}
