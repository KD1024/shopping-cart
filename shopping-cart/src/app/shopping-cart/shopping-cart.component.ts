import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../services/shared.data.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.sass']
})
export class ShoppingCartComponent implements OnInit {
  constructor(private shareDataService: ShareDataService) {
  }

  cart: any = {};

  ngOnInit() {
    this.shareDataService.data.subscribe(data => {
      if (data) {
        this.cart = data;
      } else {
        this.cart = {
          totalNo: 0,
          totalPrice: 0,
          cartList: []
        };
        this.shareDataService.updatedDataSelection(this.cart);
      }
    });
  }

  removeItem(item: any, i: number) {
    if (this.cart.cartList[i]) {
      this.cart.totalNo--;
      this.cart.totalPrice = this.cart.totalPrice - item.price;
      this.cart.cartList.splice(i, 1);
      this.shareDataService.updatedDataSelection(this.cart);
    }
  }
}
