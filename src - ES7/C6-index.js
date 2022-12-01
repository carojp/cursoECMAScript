//Ejemplo 1 includes  ES7

let numbers = [1,2,4,5,7,8,9];

if(numbers.includes(7)) {
    console.log(" si se encuentra el valor 7");
} else{
    console.log("no se encuentra");
}

/* consulta consola 
[Running] node "c:\Users\CAROLINA\curoECMAScript\src - ES7\es7-clase 6\tempCodeRunnerFile.js"
si se encuentra el valor 7

[Done] exited with code=0 in 0.193 seconds */

//Ejemplo 2 includes

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
console.log(pets.includes('at'));

/* consulta consola 
[Running] node "c:\Users\CAROLINA\curoECMAScript\src - ES7\es7-clase 6\tempCodeRunnerFile.js"
true
false

[Done] exited with code=0 in 0.187 seconds */

//operador de exponenciación (**)

//ejemplo 1 (**)

const base1 = 3;
const expon1 = 10;

console.log(base1 ** expon1);
console.log(Math.pow(base1, expon1));


//ejemplo 2 (**)

let base2 = 4;
let expon2 = 3;
let result = base2 ** expon2;

console.log(result);