// ./ significa que busque a partir de este nivel
import {PI} from "./constantes.js";
import {aritmetica as calculos} from "./aritmetica.js";

console.log("Archivo modulos.js");

//Función declarada
function countChars(data = ""){
    if(!data){
        console.warn("You must enter a text.");
    } else {
        console.info(data.length);
    }
}

//Función expresada
const countChars2 = (data = "") => 
(!data)
? console.warn("You must enter a text.")
: console.info(data.length);

//Función declarada
function takeChars(data = "", quantityToCut = undefined){
    if(!data){
        console.warn("You must enter a text.");
    } else {
        if(quantityToCut === undefined){
            console.warn("You must enter a quantity to cut.");
        } else {
            console.info(data.slice(0, quantityToCut));
        }
    }
}

//Función expresada
const takeChars2 = (data = "", quantityToCut = undefined) => 
(!data)
? console.warn("You must enter a text.")
: (quantityToCut === undefined)
? console.warn("You must enter a quantity to cut.")
: console.info(data.slice(0, quantityToCut));

//Función declarada
function convertTextToArray(data = "", separador = undefined){
    if(!data){
        console.warn("You must enter a text.");
    } else {
        if(separador === undefined){
            console.warn("You must enter a separator string.");
        } else {
            console.info(data.split(separador));
        }
    }
}

//Función expresada
const convertTextToArray2 = (data = "", separador = undefined) =>
(!data)
? console.warn("You must enter a text.")
: (separador === undefined)
? console.warn("You must enter a separator string.")
: console.info(data.split(separador));

//Función declarada
function repeatText(data = "", times = undefined){
    if(!data) return console.warn("You must enter a text.");
    
    if(times === undefined) return console.warn("You must send the times to repeat.");

    if(times === 0) return console.warn("The times must not be 0.");
    
    if(Math.sign(times) === -1) return console.warn("The times must be greater than 0.");

    let dataNew = "";
    for(let i = 0; i < times; i++) {  
        dataNew += " " + data;
    }
    console.info(dataNew);
}

//Función expresada
/*const repeatText2 = (data = "", times = undefined) =>
{
(!data)
? console.warn("You must enter a text.")
: (times === undefined)
? console.warn("You must send the times to repeat.")
: (times === 0)
? console.warn("The times must not be 0.")
: (Math.sign(times) === -1) 
? console.warn("The times must be greater than 0.")
:
    let dataNew = "";
    for(let i = 0; i < times; i++) {  
        dataNew += " " + data;
    }
    console.info(dataNew);

};*/

//Función declarada
function reverseText(str = ""){
    if(!str) return console.warn("You must enter a text.");
    
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return console.info(joinArray); // "olleh"
}

//Función expresada
const reverseText2 = (str = "") =>
(!str)
? console.warn("You must enter a text.")
: console.info(data.split("").reverse().join(""));

//Función declarada
function countWord(text = "", word = undefined){
    if(!text) return console.warn("You must enter a text.");
    
    if(word === undefined) return console.warn("You must send the word to find.");

    let aText = text.split(" "),
    countQty = 0;
    for(let i = 0; i < aText.length; i++) {  
        if (aText[i] === word) countQty++;
    }
    console.info(countQty);
}

//Función expresada
const countWord2 = (str = "", word = undefined) => {
    if (!str) return console.warn("You must enter a text.");
    if(word === undefined) return console.warn("You must send the word to find.");

    let i = 0,
    contador = 0;

    while(i !== -1){
        i = str.indexOf(word, i);
        if(i !== -1){
            i++;
            contador++;
        }
    }
}

//Función declarada
function checkPalindromo(text = ""){
    if(!text) return console.warn("You must enter a text.");
    
    let aText = text.toLowerCase().split("");
    
    for(let i = 0; i < aText.length; i++) {
        if(i >= aText.length - (i + 1))
            return console.info(true);

        console.info(`${aText[i]} !== ${aText[aText.length - (i + 1)]}`);
        if (aText[i] !== aText[aText.length - (i + 1)])
            return console.info(false);
    }
}

//Función expresada
const checkPalindromo2 = (str = "") => {
    if (!str) return console.warn("You must enter a text.");

    str = str.toLowerCase();
    let backStr = str.split("").reverse().join("");
    
    return (str === backStr)
    ? console.info(true)
    : console.info(false);
}

//Función declarada
function removeCharPattern(text = "", pattern = undefined){
    if(!text) return console.warn("You must enter a text.");
    
    if(pattern === undefined) return console.warn("You must send a pattern to remove.");
    
    console.info(text.replaceAll(pattern,""));
}

//Función expresada
const removeCharPattern2 = (str = "", pattern = undefined) => {
    (!str)
    ? console.warn("You must enter a text.")
    : (pattern === undefined)
        ? console.warn("You must send a pattern to remove.")
        : console.info(str.replace(new RegExp(patron, "ig"), ""));
}

//Función declarada
function randomNumber(){
    console.info(Math.round(Math.random() * 100) + 501);
}

//Función expresada
const capicua = (num = 0) => {
    if (!num) return console.warn("You must enter a number.");

    if(typeof num !== "number") return console.error("You must enter a value type number.");
    
    let backNum = num.toString().split("").reverse().join("");
    console.log(num,backNum);
    return (num.toString() === backNum)
    ? console.info(true)
    : console.info(false);
}

//Función expresada
const factorial = (num = undefined) =>{
    if (num === undefined) console.warn("You must enter a number.");
    
    if (typeof num !== "number") return console.error("You must enter a value type number.");
    
    if (num === 0) return console.error("The number can't be 0");

    if (Math.sign(num) === -1) return console.error("The number can't be negative");

    let fact = 1;

    for(let i = 1; i <= num; i++) {
        fact *= i;
    }

    console.info(fact);
}

//Función expresada
const primo = (num = undefined) => {
    if(num === undefined) return console.warn("You must enter a number.");
    if(num === 0) return console.warn("The number must not be 0.");
    if(num === 1) return console.warn("The number must not be 1.");
    if(Math.sign(num) === -1) return console.warn("The number must not be negative.");

    let divisible = false;

    for(let i = 2; i < num; i++){
        if (num % i === 0){
            divisible = true;
            break;
        }
    }
    
    return console.log(((divisible) ? "No es" : "Es") + " un número primo.");
}

//Función expresada
const parOImpar = (num = undefined) =>{
    if(num === undefined) return console.warn("You must enter a number.");
    if (typeof num !== "number") return console.error("You must enter a value type number.");
    
    return (num % 2 === 1)
    ? console.log("Es impar.")
    : console.log("Es par.");
}

const  celsiusToFahrenheit = (num = 0) =>
(typeof num !== "number")
    ? console.error("You must enter a value type number.")
    : console.log((num * 1.8) + (32 * ((num >= 0) ? 1 : -1)));

//Función expresada
const  binToDecAndDecToBin = (val = 0, baseType = "") => {
    if (typeof val !== "number") return console.error("You must enter a value type number.");
    return (baseType === "B")
    ? console.info(binToDec(val))
    : console.info(decToBin(val))
};

const binToDec = (val = 0) => {
    let aVal = val.toString().split(""),
        binPosVal = 1,
        decimalValue = 0;

    for(let i = aVal.length - 1; i >= 0; i--){
        if (aVal[i] === "1"){
            decimalValue += binPosVal;
        }
        binPosVal *= 2;
    }
    return decimalValue;
}

const decToBin = (val = 0) => {
    let binValHigh = 0,
    binValCalc = 0,
    binValue = "1";

    for(let i = 2; i <= val; i *= 2){
        binValHigh = i;
        binValCalc = i;
    }
    
    for(let i = binValCalc/2; i >= 1; i /= 2){
        console.log(`i:${i}-binValHigh:${binValHigh}-binValCalc:${binValCalc}`);
        console.log(`${val} > ${binValCalc + i}`);
        console.log(val > binValCalc + i);
        if(val < binValCalc + i)
            binValue += "0";
        else
        {
            binValue += "1";
            binValCalc += i
        }
        binValHigh -= (binValHigh === 2) ? 1 : (i === 1) ? binValHigh : i;
    }

    return binValue;
}

//Otra forma
const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
    if(numero === undefined) return console.warn("No ingresaste el número a convertir.");
    if (typeof numero !== "number") return console.error(`El valor "${numero}" no es un número.`);
   
    if(base === undefined) return console.warn("No ingresaste la base a convertir.");
    if (typeof base !== "number") return console.error(`El valor "${base}" no es un número.`);
   
    if(base === 2){
        return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10.`);
    } else if (base === 10) {
        return console.info(`${numero} base ${base} = ${(numero.toString(2))} base 2.`);
    }
}

//Función expresada
const  discountPerc = (num = 0, perc = 0) => {
    if(typeof num !== "number") return console.error("You must enter a value type number.");
    if(typeof perc !== "number") return console.error("You must enter a value type number for percentage.");

    return console.info(num - ((num / 100) * perc));
}

//Otra forma
const aplicarDescuento = (monto = undefined, descuento = 0) => {
    if(monto === undefined) return console.warn("No ingresaste el monto.");
    if(typeof monto !== "number") return console.error(`El valor "${monto}" no es un número.`);
    if(monto === 0) return console.error("El monto no puede ser 0.");
    if(Math.sign(monto) === -1) return console.error(`El valor "${monto}" no no puede ser negativo.`);
   
    if(typeof descuento !== "number") return console.error(`El valor "${descuento}" no es un número.`);
    if(Math.sign(descuento) === -1) return console.error(`El valor "${descuento}" no no puede ser negativo.`);

    return console.info(`${monto} - ${descuento}% = ${monto - ((monto*descuento))}`);
}

//Función expresada
const  howManyYearsSince = (date) => {
    
    return console.info(Math. abs(new Date().getFullYear() - date.getFullYear()));
}

//Otra forma
const calcularAnios = (fecha = undefined) => {
    if(fecha === undefined) return console.warn("No ingresaste la fecha.");
    if(!(fecha instanceof Date)) return console.error(`El valor que ingresaste no es una fecha válida.`);
    
    let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
        aniosEnMs = 1000 * 60 * 60 * 24 * 365,
        aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMs);
    
    return (Math.sign(aniosHumanos) === -1)
        ? console.log(`Faltan ${Math.abs(aniosHumanos)} anios para el ${fecha.getFullYear()}.`)
        : (Math.sign(aniosHumanos) === 1)
            ? console.info(`Han pasado ${aniosHumanos} anios, desde ${fecha.getFullYear()}`)
            : console.info(`Estamos en el anio actual ${fecha.getFullYear()}.`);
}

const contarLetras = (cadena = "") => {
    if(!cadena) return console.warn("No ingresaste una cadena de texto");
    if(typeof cadena !== "string") return console.error(`El valor ingresado "${cadena}", NO es una cadena de texto`);

    let vocales = 0,
        consonantes = 0;
    
    cadena = cadena.toLowerCase();

    for(let letra of cadena){
        if(/aeiou/.test(letra)){
            vocales++;
        }

        if(/bcdfghjklmnpqrstvwxyz/.test(letra)){
            consonantes++;
        }
    }

    return console.info({
        cadena,
        vocales,
        consonantes
    });
}

const validarNombre = (nombre = "") => {
    if(!nombre) return console.warn("No ingresaste un nombre");
    if(typeof nombre !== "string") return console.error(`El valor "${nombre}" ingresado, NO es una cadena de texto`);

    let expReg = /^[A-Za-z\s]+$/g.test(nombre);

    return (expReg)
    ? console.info(`"${nombre}", es un nombre válido`)
    : console.warn(`"${nombre}", NO es un nombre válido`);
}

const validarEmail = (email = "") => {
    if(!email) return console.warn("No ingresaste un email");
    if(typeof email !== "string") return console.error(`El valor "${email}" ingresado, NO es una cadena de texto`);

    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

    return (expReg)
    ? console.info(`"${email}", es un email válido`)
    : console.warn(`"${email}", NO es un email válido`);
}

const validarPatron = (cadena = "", patron = undefined) => {
    if(!cadena) return console.warn("No ingresaste una cadena de texto a evaluar");
    if(typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, NO es una cadena de texto`);

    if(patron === undefined) return console.warn("No ingresaste un patrón a evaluar");
    if(!(patron instanceof RegExp)) return console.error(`El valor "${patron}" ingresado, NO es una expresion regular`);

    let expReg = patron.test(cadena);

    return (expReg)
    ? console.info(`"${cadena}", cumple con el patrón ingresado`)
    : console.warn(`"${cadena}", NO cumple con el patrón ingresado`);
}

const devolverCuadrados = (arr = undefined) => {
    if(arr === undefined) return console.warn("No ingresaste un arreglo de números");
    if(!(arr instanceof Array)) return console.error(`El valor que ingresaste no es un arreglo`);
    if(arr.length === 0) return console.error("El arreglo está vacio");
   
    for(let num of arr){
        if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número`);
    }

    const newArr = arr.map(el => el * el);

    return console.info(`Arreglo original: ${arr}.\nArreglo elevado al cuadrado: ${newArr}`);
}

const arrayMinMax = (arr = undefined) => {
    if(arr === undefined) return console.warn("No ingresaste un arreglo de números");
    if(!(arr instanceof Array)) return console.error(`El valor que ingresaste no es un arreglo`);
    if(arr.length === 0) return console.error("El arreglo está vacio");
   
    for(let num of arr){
        if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número`);
    }

    return console.info(`Arreglo original: ${arr}.\nValor mayor: ${Math.max(arr)}.\nValor menor: ${Math.min(arr)}.`);
}

const separarParesImpares = (arr = undefined) => {
    if(arr === undefined) return console.warn("No ingresaste un arreglo de números");
    if(!(arr instanceof Array)) return console.error(`El valor que ingresaste no es un arreglo`);
    if(arr.length === 0) return console.error("El arreglo está vacio");
   
    for(let num of arr){
        if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número`);
    }

    return console.info({
        pares: arr.filter(num => num % 2 === 0),
        impares: arr.filter(num => num % 2 ===1)
    });
}

const ordenarArreglo = (arr = undefined) => {
    if(arr === undefined) return console.warn("No ingresaste un arreglo de números");
    if(!(arr instanceof Array)) return console.error(`El valor que ingresaste no es un arreglo`);
    if(arr.length === 0) return console.error("El arreglo está vacio");
   
    for(let num of arr){
        if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número`);
    }

    return console.info({
        arr,
        asc: arr.map(el => el).sort(),
        desc: arr.map(el => el).sort().reverse()
    });
}

const quitarDuplicados = (arr = undefined) => {
    if(arr === undefined) return console.warn("No ingresaste un arreglo de números");
    if(!(arr instanceof Array)) return console.error(`El valor que ingresaste no es un arreglo`);
    if(arr.length === 0) return console.error("El arreglo está vacio");
    if(arr.length === 1) return console.error("El arreglo debe tener al menos 2 elementos");

    return console.info({
        original: arr,
        sinDuplicados: [...new Set(arr)]
    });
}

const promedio = (arr = undefined) => {
    if(arr === undefined) return console.warn("No ingresaste un arreglo de números");
    if(!(arr instanceof Array)) return console.error(`El valor que ingresaste no es un arreglo`);
    if(arr.length === 0) return console.error("El arreglo está vacio");
    
    for(let num of arr){
        if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número`);
    }

    //total es el acumulador que guarda el valor previo, empieza vacio
    //num es el elemento que estamos recorriendo
    //index es la posicion del elemento (num)
    return console.info(
        arr.reduce((total, num, index, arr) => {
            total += num;
            if(index === arr.length-1){
                return `El promedio de ${arr.join(" + ")} es ${total/arr.length}`;
            } else {
                return total;
            }
        })
    );
}

class Pelicula{
    //Usamos destructuración del objeto que se envía
    constructor({id, titulo, director, estreno, pais, generos, calificacion}){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;

        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion);
    }

    static get listaGeneros(){
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
    }

    static generosAceptados(){
        return console.info(`Los géneros aceptados son: ${Pelicula.listaGeneros.join(",")}`);
    }

    validarCadena(propiedad, valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" está vacío`);
        if(typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado, NO es una cadena de texto`);
        return true;
    }

    validarLongitudCadena(propiedad, valor, longitud){
        if(valor.length > longitud){
            return console.error(`${propiedad} "${valor}" excede el número de caracteres permitidos (${longitud}).`);
        }
        return true;
    }

    validarNumero(propiedad, valor){
        if(!valor) return console.error(`${propiedad} "${valor}" ingresado, NO es un número`);
        return true;
    }

    validarArreglo(propiedad, valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);
        if(!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresado, NO es un arreglo`);
        if(valor.length === 0) return console.error(`${propiedad} "${valor}" no tiene datos`);

        for(let cadena of valor){
            if(typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, NO es una cadena de texto`);
        }

        return true;
    }

    validarIMDB(id){
        if(this.validarCadena("IMDB id", id)){
            if(!/^([a-z]){2}([0-9]){7}$/.test(id)){
                return console.error(`IMDB id "${id}" no es valido, debe tener 9 caracteres, los dos primeros letras minúsculas, los 7 restantes números.`);
            }
        }
    }

    validarTitulo(titulo){
        if(this.validarCadena("Titulo", titulo)){
            this.validarLongitudCadena("Titulo", titulo, 100);
        }
    }

    validarDirector(director){
        if(this.validarCadena("Director", director)){
            this.validarLongitudCadena("Director", director, 50);
        }
    }

    validarEstreno(estreno){
        if(this.validarNumero("Año de Estreno", estreno)){
            if(!(/^([0-9]){4}$/.test(estreno))){
                return console.error(`Año de Estreno "${estreno}" no es valido, debe ser un número de cuatro dígitos.`);
            }
        }
    }

    validarPais(pais){
        this.validarArreglo("País", pais);
    }

    validarGeneros(pais){
        if(this.validarArreglo("Generos", generos)){
            for(let genero of generos){
                if(!Pelicula.listaGeneros.includes(genero)){
                    console.error(`Género(s) incorrectos "${generos.join(", ")}"`);
                    Pelicula.generosAceptados();
                }
            }
        }
    }

    validarCalificacion(calificacion){
        if(this.validarNumero("Calificación",calificacion))
            return (calificacion < 0 || calificacion > 10)
            ? console.error(`La calificación tiene que estar en un rango entre 0 y 10`)
            : this.calificacion = calificacion.toFixed(1);
    }

    fichaTecnica(){
        console.info(`Ficha Técnica:\nTítulo: "${this.titulo}"\nDirector: "${this.director}"\nAño: "${this.estreno}"\nPaís: "${this.pais.join("-")}"\nGéneros: "${this.generos.join(", ")}"\nCalificación: "${this.calificacion}"\nIMDB Id: "${this.id}"`);
    }
}

const misPelis = [{
    id: "tt0758758",
    titulo: "Into the Wild",
    director: "Sean Pean",
    estreno: 2007,
    pais: ["USA"],
    generos: ["Adventure", "Biography", "Drama"],
    calificacion: 8.1
},
{
    id: "tt0479143",
    titulo: "Rocky Balboa",
    director: "Sylvester Stallone",
    estreno: 2006,
    pais: ["USA"],
    generos: ["Action", "Drama", "Sport"],
    calificacion: 7.1
},
{
    id: "tt0468569",
    titulo: "The Dark Knight",
    director: "Christopher Nolan",
    estreno: 2008,
    pais: ["USA", "UK"],
    generos: ["Action", "Crime", "Drama"],
    calificacion: 9.0
}];

misPelis.forEach(el => new Pelicula(el).fichaTecnica());

let temporizador = setTimeout(() => {
    console.log("Ejecutando un setTimeout, esto se ejecuta una sóla vez")
}, 3000);

clearTimeout(temporizador)

setInterval(() => {
    console.log("Ejecutando un setInterval, esto se ejecuta indefinidamente cada cierto intervalo de tiempo")
}, 1000);

let reloj = setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);

clearInterval(reloj);

function cuadradoCallback(value, callback){
    setTimeout(() => {
        callback(value, value * value);
    }, 0 | Math.random() * 100);
}

cuadradoCallback(0, (value, result) => {
    console.log("Inicia Callback");
    console.log(`Callback: ${value}, ${result}`);
});

function cuadradoPromise(value){
    if(typeof value !== "number")
        return Promise.reject(`Error, el valor " ${value} " ingresado no es un número`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            }, 0 | Math.random() * 100);
        });
    });
}

cuadradoPromise(0)
.then(obj => {
    console.log("Start Promise");
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(1);
})
.then(obj => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(2);
})
.then(obj => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(3);
})
.then(obj => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    console.log("End Promise");
})
.catch(err => {
    console.error(err);
});

//Función asíncrona declarada
async function functionAsincronaDeclarada(){
    try{
        console.log("Inicio Async Function");
        let obj = await cuadradoPromise(0);
        console.log(`Async Function: ${obj.value}, ${obj.result}`)
        obj = await cuadradoPromise(1);
        console.log("Inicio Async Function");
    } catch(err){
        console.log(err);
    }
}

//Función asíncrona expresada
const funcionAsincronaExpresada = async () => {
    try{
        console.log("Inicio Async Function");
        let obj = await cuadradoPromise(0);
        console.log(`Async Function: ${obj.value}, ${obj.result}`)
        obj = await cuadradoPromise(1);
        console.log("Inicio Async Function");
    } catch(err){
        console.log(err);
    }
}

const NOMBRE = Symbol();
const SALUDAR = Symbol();
const persona = {
    [NOMBRE]: "Gustavo"
}
persona.NOMBRE = "Gustavo Villagran";
console.log(persona.NOMBRE);//Muestra: Gustavo Villagran
console.log(persona[NOMBRE]);//Muestra: Gustavo
persona[SALUDAR] = function(){
    console.log("Hola");
}
persona[SALUDAR]();
validarPatron("Gustavo Villagran", /^[A-Za-z\s]+$/g);
validarPatron("Gustavo Villagran", new RegExp("/^[A-Za-z\s]+$/","g"));

//Para recorrer las propiedades Symbol
Object.getOwnPropertySymbols(persona);

const set = new Set([1,2,3,3,4,5,true,false,false,{},{},"hola","HOLA"])
console.log(set);//1,2,3,4,5,true,false,Object,Object,"hola","HOLA"
console.log(set.size);//11

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(3);
set2.add(true);
set2.add(false);
set2.add(true);
set2.add({});
console.log(set2);//1,2,3,true,false,Object
console.log(set.size);//6

console.log("Recorriendo set");
for(item of set){
    console.log(item);
}

console.log("Recorriendo set2");
forEach(item => console.log(item));

let arr = Array.from(set);
console.log(arr);

set.delete("HOLA");
console.log(set.has("hola"));

const mapa = new Map();
mapa.set("nombre","Gustavo");
mapa.set("apellido","Villagran");
mapa.set("edad","42");

console.log(mapa);
console.log(mapa.size);
console.log(mapa.has("correo"));
console.log(mapa.get("nombre"));
mapa.set("nombre","Gustavo Villagran");
mapa.delete("nombre");

mapa.set(19,"diecinueve");
mapa.set(false,"falso");
mapa.set({},{});

for(let [key,value] of mapa){
    console.log(`Llave: ${key}, Valor: ${value}`);
}

const mapa2 = new Map([
    ["nombre","Tita"],
    ["edad","1"],
    ["animal","gato"],
    [null,"nulo"]
]);

const llavesMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];

const ws = new WeakSet();
let valor1 = {"valor1":1};
let valor2 = {"valor2":2};
let valor3 = {"valor3":3};

ws.add(valor1);
ws.add(valor2);

setInterval(() => console.log(ws),1000);
//Eliminación automática por el recolector de basura
setTimeout(() => {
    valor1 = null;
    valor2 = null;
},5000);

const wm = new WeakMap();
let llave1 = {};
let llave2 = {};
let llave3 = {};

wm.set(llave1, 1);
wm.set(llave2, 2);

const iterable = [1,2,3,4,5];
//const iterable = "Hola Mundo";
//const iterable = new Set([1,2,3,4,5]);
//const iterable = new Map([["nombre","jon"],["edad",35]]);

//Accedemos al iterador del iterable
const iteradorSymbol = iterable[Symbol.iterator]();
//Recorremos el iterable
console.log(iterador.next());

let next = iterador.next();
while(!next.done){
    console.log(next.value);
    next = iterador.next();
}

function* iterable(){
    yield "hola";
    console.log("Hola consola");
    yield "hola 2";
    console.log("Seguimos con más instrucciones de nuestro código");
    yield "hola 3";
    yield "hola 4";
}

let iterador = iterable();
console.log(iterador.next());//Devuelve "hola"
console.log(iterador.next());//Devuelve "hola 2"
console.log(iterador.next());//Devuelve "hola 3"

for(let y of iterador){
    console.log(y);
}

//Guardaremos el resultado en un arreglo
const arrIterable = [...iterable()];

function cuadrado(valor){
    setTimeout(() => {
        return console.log({valor, resultado: valor * valor})
    }, Math.random() * 1000);
}

function* generador(){
    console.log("Start Generator");
    yield cuadrado(0);
    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(3);
    yield cuadrado(4);
    yield cuadrado(5);
    console.log("End Generator");
}

let gen = generador();

for(let y of gen){
    console.log(y);
}

const persona = {
    nombre:"",
    apellido:"",
    edad:0
}

const manejador = {
    set(obj,prop,valor){
        //Validamos que exista la propiedad antes de asignar
        if(Object.keys(obj).indexOf(prop) === -1){
            return console.error(`La propiedad "${prop}" no existe en el objeto`);
        }

        if(prop === "nombre" || prop === "apellido" && !(/^[A-Za-z]+$/g.test(valor))){
            return console.error(`La propiedad "${prop}" solo acepta letras y espacios en blanco`);
        }
        obj[prop] = valor;
    }
}

const gus = new Proxy(persona,manejador);
gus.nombre = "Gustavo";
gus.apellido = "Villagran";
gus.edad = 42;
console.log(gus);

//Antes
const objUsuarios = {};
const usuarios = ["Gus","Tita","Tirso"];
usuarios.forEach((usuario,index) => objUsuarios[`id_${index}`] = usuario);

//Ahora con notación de corchetes
let aleatorio = Math.round(Math.random() * 100 + 5);
const objUsuariosNuevo = {
    propiedad: valor,
    [`id_${aleatorio}`]: "Valor Aleatorio"
};

countChars("Hola Mundo");
takeChars("Hola Mundo", 4);
convertTextToArray("Hola Mundo"," ");
repeatText("Hola Mundo", 2);
reverseText("hello2 rrr");
countWord("hola mundo adios mundo", "mundo");
checkPalindromo("Salas");
removeCharPattern("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
randomNumber();
capicua(2);
factorial(5);
primo(5);
parOImpar(10);
celsiusToFahrenheit(-30);
binToDecAndDecToBin(1011, "B");
binToDecAndDecToBin(19, "D");
discountPerc(1000, 20);
howManyYearsSince(new Date(1981,12,30));
convertirBinarioDecimal(1011, 2);
convertirBinarioDecimal(19, 10);

[] instanceof Array; // Devuelve true
new Date instanceof Date// Devuelve true

function Persona(nombre){
    const that = this;
    that.nombre = nombre;

    return function(){
        console.log(that.nombre);
    }
}

this.lugar = "Contexto Global";

function saludar(saludo, aQuien){
    console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
}

//Hola Tita desde el Contexto Global
saludar("Hola", "Tita");

const obj = {
    lugar: "Contexto Objeto"
}

//Hola Gus desde el Constexto Objeto
saludar.call(obj, "Hola", "Gus");
//Adios Villagran desde el Constexto Objeto
saludar.apply(["Adios", "Villagran"]);

const persona = {
    nombre: "Gus",
    saludar: function(){
        console.log(`Hola ${this.nombre}`);
    }
}

const otraPersona = {
    //undefine si no bindeamos a persona
    saludar: persona.saludar.bind(persona)
}