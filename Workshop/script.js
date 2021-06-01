'use strict';
//variables

const productos = ['producto1', 'producto2'];
productos.push('producto 3');

console.log(productos[2]);
//productos = 20;
/*
let stock = 100;

let cantidad = prompt("cuantos alfajores?");
//&& and - || or 
if(stock > cantidad || stock !== 0){
  console.log("Hay stock");
} else{
  console.log("no Hay stock");
};

//forEach
const dias = [
  {id: 2, name:"feriado"},
  'lunes', 'martes', 'miercoles'];
//console.log(dias);

dias.forEach((elemento) => {
  //dias = [i]
  if(typeof elemento == "object"){
    console.log(elemento.name)
  }
  console.log(elemento);
});

//Funcion constructora
function Saludar(){
  this.name = "hola";
}
const objetoSaludar = new Saludar();
console.log(objetoSaludar.name);

//Forma literal de escribir un objeto
const ObjSaludar = {
  name: "hola"
}
console.log(ObjSaludar.name);*/

//JSON
let array = ['hola', 'chau'];
console.log(array);
let arrayEnTexto = JSON.stringify(array);
console.log(arrayEnTexto);

//LocalStorage
localStorage.carrito = arrayEnTexto;
console.log(JSON.parse(arrayEnTexto));

//ejemplo del local storage
//iniciaizo carrito
let carrito = [];
let arrayParseado = JSON.parse(localStorage.carrito);

function agregarAlCarrito(producto){
  carrito.push(producto);
  localStorage.carrito = JSON.stringify(carrito);
}
agregarAlCarrito(10);
agregarAlCarrito(100);


console.log(carrito);

//ejemplo suma
let historial = [];
historial.push(sumarNumeros(5,10));
historial.push(sumarNumeros(10,10));
historial.push(sumarNumeros(1000,10));
historial.push(sumarNumeros(10,5400));
historial.push(sumarNumeros(54330,10));

console.log(historial);

function sumarNumeros(x,y){
  //console.log( x + y);
  return x + y;
};