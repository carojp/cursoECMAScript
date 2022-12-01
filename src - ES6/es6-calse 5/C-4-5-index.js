//Clase 4  ES6

//Parámetros en objetos

let nombre = "Mateo";
let años = 19;

//es5
obj = { nombre: nombre, años: años};
//es6
obj2 = { nombre, años};

console.log(obj2);

//Arrow Functions

const nombres = [
    {nombre: "carolina", años:42},
    { nombre: "Mateo", años: 19}
];

/* let listOfNombres = nombres.map(function(item){
    console.log(item.nombre, item.años);
});

let listOfNombres2 = nombres.map(item => console.log (item.nombre, item.años));
 */
const listOfNombres3 = (nombre, años) => {
    console.log (item.nombre, item.años);
 }

//Promesas

const helloPromise = () => {
    return new Promise ((resolve, reject) => {
        if(true){
            resolve("Hey!");
        }  
        else {
            reject("Ups!!");
        }      
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log("hola")) //a un promesa se le pueden anidar varios elemento then
    .catch(error => console.log(error));


//Clase 5

//Clase programación orientada a objetos 

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator ();
console.log(calc.sum(4,5));
    

//modulos

import { hello } from "./module";

hello();

//Generadores: retorna valores de acuerdo al algoritmo


function* helloWorld() {
    if(true) {
        yield "Hello,";   // yield es el valor qeu nos permite retornar algo  para este caso un string   
    }
    if(true) {
        yield "World,";
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);


