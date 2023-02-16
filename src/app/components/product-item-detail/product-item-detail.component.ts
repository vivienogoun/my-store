import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { HttpService } from 'src/app/http.service';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent {

  productName: string | null = '';
  product: Product = new Product;
  amount: number = 1;

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productName = this.route.snapshot.paramMap.get('product');

    this.httpService.getProducts().subscribe(data => {
      for (var p of data) {
        if (p['name'] == this.productName) {
          this.product = p;
        }
      }
    });
  }

  onSubmit(p: Product): void {
    p.amount = this.amount;
    this.cartService.addToProcarts(p);
    alert('Added to cart!');
  }

}
