/*!
* Start Bootstrap - Shop Homepage v4.3.0 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

//const ProductoUno = newProducto('Mermelada', 120);
//console.log(ProductoUno);
//const aux = [ProductoUno, ProductoUno];
//console.log(aux[1].precio);
//const precios = [200, 300, 500, 350, 450];
//const nombres = ["arroz", "fideos", "garbanzos", "galletitas", "pan"];

let Carrito = [];

let storageValues = localStorage.VariableCarrito;
console.log(storageValues);

if(storageValues === null){
    alert("no tenemos datos del anterior carrito");
    Carrito = [];
}else{
    Carrito = [JSON.parse(storageValues)]
    console.log(Carrito);
};

//clase constructora
class Producto {
    constructor(nameProducto, precio){
        this.nameProducto = nameProducto;
        this.precio = precio;
    }
}
//creamos el objeto producto
const ProductoUno = new Producto('detergente', 100);
console.log(ProductoUno);

//funcion Agregamos al carrito
function agregarAlCarrito(producto){
    Carrito.push(producto);

    localStorage.setItem("VariableCarrito", JSON.stringify(Carrito));
    console.log(typeof JSON.stringify(Carrito));
    console.log(Carrito);
};

agregarAlCarrito(ProductoUno);

//estructura JSON

let nuestroPrimerJSON = {
    nombre: "Fer",
    apellido: "Quagliaro"
}