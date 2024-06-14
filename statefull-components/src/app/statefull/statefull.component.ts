import { Component } from '@angular/core';
import { Item } from '../interfaces/item';
import { CofeeShopModel } from "../models/coffee.model";

@Component({
  selector: 'app-statefull',
  templateUrl: './statefull.component.html',
  styleUrls: ['./statefull.component.sass']
})
export class StatefullComponent {
  modelCoffeShop: CofeeShopModel;
  selectedItems: Array<Item>;
  constructor(){
    this.modelCoffeShop = new CofeeShopModel();
    this.selectedItems = [];
  }
  seleccionarItem(item: Item){
    this.selectedItems.push(item);
  }
  getPrecioTotal() {
    if (this.selectedItems) {
      return this.selectedItems.reduce(
        (prev: number, item: Item) => prev + item.precio,
        0
      );
    }else{
      return 0;
    }
  }
}
