const Component = (function (){
    //Component constructor
    const Constructor = function(options){
        this.el = options.el;
        this.data = options.data;
        this.template = options.template;
    }

    //Agregamos los métodos al prototipo del constructor del componente
    //Render UI
    Constructor.prototype.render = function(){
        const $el = d.querySelector(this.el);
        if(!$el) return;
        $el.innerHTML = this.template(this.data);

        console.log(this.data);
    };

    //Actualizar el State de forma reactiva
    Constructor.prototype.setState = function(obj){
        for(let key in obj){
            if(this.data.hasOwnProperty(key)){
                this.data[key] = obj[key];
            }
        }
        this.render();
    };

    //Obtenemos una copia inmutable del State
    Constructor.prototype.getState = function(){
        return JSON.parse(JSON.stringify(this.data));
    };

    return Constructor;
})();

Array.of("X", "Y", "Z", 9, 8, 7);
const colores = ["Rojo", "Verde", "Azul"];
colores.forEach(function(el, index){
    console.log(`<li id="${index}">${el}</li>`);
});
const gustavo = {
    nombre: "Gustavo",
    apellido: "Villagran",
    edad: 41
};

console.log(`Hola mi nombre es %s %s y tengo %d anios.`, nombre, apellido, edad);

for(const colores of numeros){
    console.log(elemento);
}
try{
    let numero = 10;
    if(isNaN(numero)){
        throw new Error("El caracter introducido no es un número");
    }
    console.log(numero*numero);
} catch(error) {
    console.log(`Se produjo el siguiente error: ${error}`);
} finally {
    console.log("Proceso terminado");
}

const numeros2 = [1, 2, 3];
const [uno, dos, tres] = numeros2;

let persona = {
    nombre: "Gustavo",
    apellido: "Villagran",
    edad: 41
}
let nombre = "Tirso";
const perro = {
    nombre,
    edad:1,
    ladrar: () => {
        consoleg.log(this);
    }
}
function sumar(a, b, ...c){
    let resultado = a + b;
    c.forEach(function(n){
        resultado += n;
    });
    return resultado
}

console.log(sumar(1, 2, 3, 4, 5));

const arr1 = [1, 2, 3, 4, 5],
arr2 = [6, 7, 8, 9, 0];
const arr3 = [...arr1, ...arr2];

const numeros = [1, 2, 3, 4, 5];
numeros.forEach((el, index) => console.log(`${el} está en la posición ${index}`));



Object.keys(objeto);
objeto.hasOwnProperty("name");
Boolean(0); //false
Boolean(-7); //true
Boolean(""); //false
Boolean(" "); //true

//Función constructora
function Animal(nombre, genero){
    //Atributos
    this.nombre = nombre;
    this.genero = genero;
}

//Métodos al prototipo de Animal
Animal.prototype.sonar = function(){
    console.log("Hago sonidos");
}

Animal.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre}`);
}

const snoopy = new Animal("Snoopy", "Macho"),
    lolaBunny = new Animal("Lola Bunny", "Hembra");

snoopy.sonar();

//Herencia Prototípica
function Perro(nombre, genero, tamanio){
    this.super = Animal;
    this.super(nombre, genero);
    this.tamanio = tamanio;
}

//Perro está heredando de Animal
Perro.prototype = new Animal();
Perro.prototype.Constructor = Perro;

//Sobreescritura de métodos del Prototipo padre en el hijo
Perro.prototype.sonar = function(){
    console.log("Soy un perro y mi sonido es un ladrido");
}

Perro.prototype.ladrar = function(){
    console.log("Guauuu Guauuu");
}

class Animal{
    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
    }

    sonar(){
        console.log("Hago sonidos");
    }

    saludar(){
        console.log(`Hola me llamo ${this.nombre}`);
    }
}

class Perro extends Animal{
    constructor(nombre, genero, tamanio){
        super(nombre, genero);
        this.tamanio = tamanio;
        this.raza = null;
    }

    sonar(){
        console.log("Soy un perro y mi sonido es un ladrido");
    }

    ladrar(){
        console.log("Guauuu Guauuu");
    }

    static queEres(){
        console.log("Los perros somos animales mamíferos qu pertenecemos a la familia de los caninos. Somos considerados los mejores amigos del hombre.");
    }

    //Los setters y getters son métodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase
    get getRaza(){//JavaScript lo maneja como un atributo, no usa los paréntesis
        return this.raza;
    }

    set setRaza(raza){
        this.raza = raza;
    }
}

Perro.queEres();
const mimi = new Animal("Mimi", "Hembra"),
    scooby = new Perro("Scooby", "Macho", "Gigante");

mimi.setRaza = "Grán Danés";
console.log(mimi.getRaza);

function saludar(nombre){
    nombre = nombre || "Desconocido";
    console.log(`Hola ${nombre}`);
}

let cadena = "Lorem ipsum dolor sit amet consectetur";
//Sin bandera se detiene al encontrar el primer texto lorem
let expRegFindFirst = new RegExp("lorem", "");
//Con bandera g (global) busca todas las coincidencias
let expRegFindAll = new RegExp("lorem", "g");
//Otra forma de definir una expresión regular
//Bandera i ignora case sensitive
//Las llaves indican cuantas veces tiene que repetirse un texto
let expReg2 = /lorem{1,3}/ig;
//Método test para utilizar la expresión regular
console.log(expRegFindFirst.test(cadena));
//Método exec para utilizar la expresión regular, devuelve un arreglo
console.log(expRegFindFirst.exec(cadena));

//Clásica
(function(d,w,c){
    console.log("Mi primer IIFE");
})(document, window, console);

//La Crockford (JavaScript The Good Parts)
((function(d,w,c){
    console.log("Mi primer IIFE");
})(document, window, console));

//Unaria
+function(){
    console.log("versión Unaria");
}();

//Facebook
!function(){
    console.log("versión Facebook");
}();


