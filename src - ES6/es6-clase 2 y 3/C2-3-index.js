//CLASE 2 ES6


//antes se establecian los parametros de la funcion y dentro de la incion se inicializaban dentro de la funcion con variable (var)

function newFunction(name, age, country) {
    var name = name || "mateo";
    var age = age || 19;
    var country = country || "colombia"
    console.log(name, age, country);
}


//es6: en esta version se pueden asignar los valores, en el momento en el qeu se establecen los parametros.

function newFunction2(name = "mateo", age = 19, country = "colombia") {
    console.log(name, age, country);
}

//llamado de la funcion 

newFunction2(); // en esta caso toma los valores por defecto 

newFunction2("carolina", "42", "colombia") // en esta llamano se le indican nuevos valores.

let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//CLASE 3
//LET y CONST, Multilínea, Spread Operator y Desestructuración



//1. con esto se hacien multi lineas 
    let lorem = "Frase 1 \n" + "Frase 2";

//es6:

    let lorem2 = `frase 1
    frase 2`;

    console.log(lorem2); 

//2.este es un objeto
    let person = {
        "name":"mateo",
        "age": 32,
        "country": "colombia"
    }

    console.log(person.name, person.age, person.country);

//es6

    let { name, age, country} = person;
    console.log( name, age, country);

//3. array

let team1= ["Oscar", "Carolina", "Juan pablo", "Mateo"];
let team2 = ["Marcela", "Sebastian","Esteban", "Matias"];

let education = ["David", ...team1, ...team2];

console.log(education);

{var globalVar = " hoal"};
console.log(globalVar);

//es6

{let globalLet = "hola"
console.log(globalLet);
}

//
/* const a = "b";
console.log(a);

a = "a" */

var a = "b";
a="a"
console.log(a);



