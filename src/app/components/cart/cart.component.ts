import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/cart.service';
import { InfoService } from 'src/app/info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  procarts: Product[] = [];
  total: number = 0;
  name: string = '';
  address: string = '';
  card: string = '';

  constructor(
    private cartService: CartService,
    private infoService: InfoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.procarts = this.cartService.getProcarts();
    for (var p of this.procarts) {
      this.total += p.price * p.amount;
    }
    this.total = parseFloat(this.total.toFixed(2));
  }

  onChange() {
    this.total = 0;
    for (var p of this.procarts) {
      if (p.amount == 0) {
        alert('Removed from cart!');
        this.procarts = this.procarts.filter((element) => {
            return element.amount != 0;
        });
      }
      this.total += p.price * p.amount;
    }
    this.total = parseFloat(this.total.toFixed(2));
  }

  onSubmit() {
    this.procarts.length = 0;
    this.infoService.name = this.name;
    this.infoService.total = this.total;
    this.router.navigate(['/success'])
  }

}
