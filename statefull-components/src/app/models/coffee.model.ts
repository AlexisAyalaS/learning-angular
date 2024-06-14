import { Item } from "../interfaces/item"

export class CofeeShopModel {

    cafeteriaProductos: Array<Item>
    constructor() {
        this.cafeteriaProductos = [
            {
                producto: "Cafe Americano",
                imagen: "coffee.jpg",
                precio: 70,
                descripcion: "Cafe Americano tostado de chiapas 400ml"
            },
            {
                producto: "Cafe Capuccino",
                imagen: "croissant.jpg",
                precio: 120,
                descripcion: "Cafe Capuccino de San luis potosi 400ml"
            },
            {
                producto: "Croissant",
                imagen: "croissant.jpg",
                precio: 90,
                descripcion: "Postre individual croissant de chocolate "
            }]
    }
}
