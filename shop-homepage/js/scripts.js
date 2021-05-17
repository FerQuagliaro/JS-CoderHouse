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

    document.getElementById("mensajes").innerHTML = `Se Agrego al carrito`;
};

//agregarAlCarrito(ProductoUno);

//estructura JSON

let nuestroPrimerJSON = {
    nombre: "Fer",
    apellido: "Quagliaro"
};


//recorrer un array
const ArraydeElementos = document.getElementsByClassName("nav-link");
//document.getElementsByClassName("nav-link");
//para poder recorrer el array
for(let i = 0; i < ArraydeElementos.length; i++){
 //console.log(ArraydeElementos[i]);
 //console.log(ArraydeElementos[i].innerHTML= "nuevo link");
 console.log(ArraydeElementos[i].style.color= "red");
}

//recorrer un array
const ArraydeElementosDiv = document.getElementsByTagName("div");
//document.getElementsByClassName("nav-link");
//para poder recorrer el array
for(let i = 0; i < ArraydeElementosDiv.length; i++){
 //console.log(ArraydeElementos[i]);
 //console.log(ArraydeElementos[i].innerHTML= "nuevo link");
 console.log(ArraydeElementosDiv[i].style.background= "red");
}

// Crear nodo de tipo Elemento, etiqueta p
let parrafo = document.createElement("p");
// Insertar HTML interno
parrafo.innerHTML = "<h2>¡Hola Coder!</h2>"; 
// Añadir el nodo Element como hijo de body
document.body.appendChild(parrafo);

