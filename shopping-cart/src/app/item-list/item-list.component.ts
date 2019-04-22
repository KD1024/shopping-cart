import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ShareDataService } from '../services/shared.data.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.sass']
})
export class ItemListComponent implements OnInit {
  itemList: any = [];
  cart: any = {};
  searchText = '';
  constructor(private dataService: DataService, private shareDataService: ShareDataService) {
  }

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
    this.dataService.getItemList().subscribe(result => {
      this.itemList = result;
      console.log('item-list: ', this.itemList);
    });
    console.log(this.cart);
  }

  addItem(item: any) {
    if (this.cart) {
      this.cart.totalNo++;
      this.cart.totalPrice = this.cart.totalPrice + item.price;
      this.cart.cartList.push(item);
      this.shareDataService.updatedDataSelection(this.cart);
    }
  }

}
