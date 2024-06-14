import { Component, EventEmitter, Output } from '@angular/core';
import { Input, OnInit } from '@angular/core';
import { Item } from '../interfaces/item';

@Component({
  selector: 'app-stateless',
  templateUrl: './stateless.component.html',
  styleUrls: ['./stateless.component.sass']
})
export class StatelessComponent implements OnInit {
  @Input() item!: Item;
  @Output() seleccionado: EventEmitter<Item> = new EventEmitter();
  public disabled: boolean = false;
  public textobtn!: string;

  ngOnInit(): void {
    this.textobtn = `Agregar al carrito ${this.item.precio}`
  }
  seleccionarItem(item: Item){
    this.textobtn = `Agregado`;
    this.disabled = true;
    this.seleccionado.emit(this.item);
  }

  isDisabled(): boolean{
    return this.disabled;
  }
}
