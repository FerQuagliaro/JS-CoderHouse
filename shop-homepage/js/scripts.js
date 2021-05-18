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

    //mostramos mensaje en la pantalla
    document.getElementById("mensajes").innerHTML = `<div class="alert alert-info">Se Agrego al carrito</div>`;
};

//agregarAlCarrito(ProductoUno);

//recorrer un array
const ArraydeElementos = document.getElementsByClassName("nav-link");

for(let i = 0; i < ArraydeElementos.length; i++){
    //mostrar el array de elementos con la class nav-link
    console.log(ArraydeElementos[i].innerHTML ="nuevo link");
    console.log(ArraydeElementos[i].style.color ="red");
    console.log(ArraydeElementos[i].style.background ="grey");
};


//recorrer un array de tags
const ArraydeElementosDiv = document.getElementsByTagName("div");

for(let i = 0; i < ArraydeElementosDiv.length; i++){
    //mostrar el array de elementos con la class nav-link
    //console.log(ArraydeElementosDiv[i].style.color ="red");
    console.log(ArraydeElementosDiv[i].style.background ="grey");
};

//Creamos un nodo de tipo Elemento, Etiqueta P
let parrafo = document.createElement("p");
//Insertamos HTML
parrafo.innerHTML = "<h2> Hola Mundo!</h2>";
//Añadimos el nodo como hijo del body
document.body.appendChild(parrafo);

//let parrafo =document.getElementById("parrafo1");
//parrafo.parentNode.removeChild(parrafo);

document.getElementById("nombre").nodeValue;