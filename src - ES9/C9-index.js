// 1. OPERADOR ALL    ES9


const obj = {
    nombre: "Mateo",
    años: 19,
    pais: "Cop",
};

//permite sacar un elemnto del objeto, y todos los demas elemntos queda encamsulado por medio del operador ALL
let {nombre, ...all} = obj;
console.log(nombre, all);

/* Ejecucion codigo

[Running] node "c:\Users\CAROLINA\curoECMAScript\src - ES9\tempCodeRunnerFile.js"
Mateo { 'años': 19, pais: 'Cop' }

[Done] exited with code=0 in 0.179 seconds */

// Así mismo se puede extraer los elementos que necesito mostrar del objeto

//ejemplo


const obj2 = {
    nombre: "Mateo",
    años: 19,
    pais: "Cop",
};

let {pais, ...all} = obj2;
console.log(all);

/* Ejecucion codigo

[Running] node "c:\Users\CAROLINA\curoECMAScript\src - ES9\tempCodeRunnerFile.js"
{ nombre: 'Mateo', 'años': 19 }

[Done] exited with code=0 in 0.121 seconds */



// 2. OPERADOR DE PROPAGACIÓN 

const obj3 = {
    nombre: "Mateo",
    años: 19,
};

const obj4 = {
    ...obj3,
    pais: "COP",
};

console.log(obj4);

/* Ejecucion codigo
[Running] node "c:\Users\CAROLINA\curoECMAScript\src - ES9\tempCodeRunnerFile.js"
{ nombre: 'Mateo', 'años': 19, pais: 'COP' }

[Done] exited with code=0 in 0.191 seconds */


// 3. PROMISE.PROTOTYPE.FINALLY()

const helloWorld = () => {
    return new Promise ((resolve, reject) =>{
        (true)
        ? resolve("Hello World")
        : reject(new Error ("Test Error"))
    });
}

//Antes  se realizava el llamado de then y catch, con ES) se puede hacer el llamado de finally
helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log("Finalizo"))


/* Ejecucion codigo
[Running] node "c:\Users\CAROLINA\curoECMAScript\src - ES9\tempCodeRunnerFile.js"
Hello World
Finalizo

[Done] exited with code=0 in 0.198 seconds */

//Ejemplo utilizando  setTimeout (colocar tiempo a la ejecución)

const helloWorld2 = () => {
    return new Promise ((resolve, reject) =>{
        (true)
        ? setTimeout(()=> resolve("Hello World"), 3000)
        : reject(new Error ("Test Error"))
    });
}

helloWorld2()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log("Finalizo"))


/* Ejecucion codigo

[Running] node "c:\Users\CAROLINA\curoECMAScript\src - ES9\tempCodeRunnerFile.js"
Hello World
Finalizo

[Done] exited with code=0 in 3.22 seconds */

