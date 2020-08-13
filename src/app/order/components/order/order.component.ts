import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
  }

}
