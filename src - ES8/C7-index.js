//Object.entries()   ES8

const data = {
    frontend: "Oscar",
    backend: "Isabel",
    design: "Ana"
}

const entries =Object.entries(data);
console.log(entries);
console.log(entries.length); // con esto podemos consultar el numero de elementos qeu contiene el array  o arreglo devuelto  


/* Ejecución consola:

    [Running] node "c:\Users\CAROLINA\curoECMAScript\src - ES8\tempCodeRunnerFile.js"
    [
        [ 'frontend', 'Oscar' ],
        [ 'backend', 'Isabel' ],
        [ 'design', 'Ana' ]
    ]
    3

 [Done] exited with code=0 in 0.207 seconds */


//Object.values()

const data1 = {
    frontend: "Oscar",
    backend: "Isabel",
    design: "Ana"
}

const values = Object.values(data1);
console.log(values);
console.log(values.length);


const obj = {
    nnombre: "oscar",
}

console.log(obj);

/* Ejecución consola:
[Running] node "c:\Users\CAROLINA\curoECMAScript\src - ES8\tempCodeRunnerFile.js"
[ 'Oscar', 'Isabel', 'Ana' ]
3

[Done] exited with code=0 in 0.234 seconds */


const string = "hello";
console.log(string.padStart(8, "Hi ")); // inicio 
console.log(string.padEnd(11, " World")); //final
console.log("food".padEnd(12, " --------")); //agregar 

/* Ejecución consola:

[Running] node "c:\Users\CAROLINA\curoECMAScript\src - ES8\tempCodeRunnerFile.js"
Hi hello
hello World

[Done] exited with code=0 in 0.188 seconds */




