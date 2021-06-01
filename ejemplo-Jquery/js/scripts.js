//lo mismo que innerHTML
//$("#contenido").html("Hola coders");
$("#contenido").append("<p>Hola coders</p>");
$('body').append(`<div style=background:red;> BUEN LUNES </div>`);

class Producto {
    constructor(name, category){
        this.name = name;
        this.category = category;
    }
}
let producto1 = new Producto("manzana", "frutas");
let producto2 = new Producto("banana", "frutas");
let producto3 = new Producto("apio", "verduras");
let producto4 = new Producto("lechuga", "verduras");

const productos = [producto1, producto2, producto3, producto4];

function filtrarPorFrutas(){
    let productosFiltrados = productos.filter(
        (element) => element.category == "frutas"
        );
        let acumulador = ``;
        productosFiltrados.forEach((element) => {
            acumulador += `<p>${element.name}</p>`
        }
        );
    $('#contenido').append(acumulador);
}

function filtrarPorVerduras(){
    let productosFiltrados = productos.filter(
        (element) => element.category == "verduras"
        );
        let acumulador = ``;
        productosFiltrados.forEach((element) => {
            acumulador += `<p>${element.name}</p>`
        }
        );
    $('#contenido').append(acumulador);
}

