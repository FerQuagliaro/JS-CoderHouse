'use strict';
//Introducción a Objetos
//Objeto literal
const fer = {
  nombre: "Fernanda",
  apellido: "Quagliaro",
  trabajo: "Tech coordinator",
  edad: 2021 - 1990,
  mascotas: ["Tuca", "Minerva"]

};

//accedemos a las propiedades mediante . & [] 
console.log(fer.nombre);
console.log(fer["apellido"]);

//agregamos propiedades mediante . & []
fer.locacion = "CABA";
fer["twitter"] = "@fer.quagliaro";
console.log(fer);

const interesesFer = prompt("que queres saber? nombre, apellido, trabajo, edad, mascotas");

//con los brakets podemos evaluar expresiones..
if (fer[interesesFer]){
  console.log(fer[interesesFer]);
}else {
  console.log("Ingresa un dato valido puede ser: nombre, apellido, trabajo, edad, mascotas :)");
};

//constructor function 
const Persona = function(nombre, edad){
  this.nombre = nombre;
  this.edad = edad;
};

const jose = new Persona("jose", 20);
const maria = new Persona("maria", 40);
console.log(jose, maria);

//Static Method
Persona.saludar = function() {
  console.log(`Hey!!${this.nombre}`);
  console.log(this);
}
Persona.saludar();

//clases constructoras
class PersonaCl {
  constructor(nombreCompleto, nacimiento){
    this.nombreCompleto = nombreCompleto;
    this.nacimiento = nacimiento;
  }
  //Instance methods
  calcEdad(){
    console.log(2021 - this.nacimiento);
  }
  saludar(){
    console.log(`Hey!!${this.nombreCompleto}`);
  }
};
const santiago = new PersonaCl("Santiago Iturrieta", 1990);
console.log(santiago);
santiago.calcEdad();
santiago.saludar();
