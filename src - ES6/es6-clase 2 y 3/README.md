# ECMAScript 6+:
Clase 2: nuevas características agregadas en la versión 6

# CLASE 2: Default Params y Concatenación

    * PARÁMETROS POR DEFECTOS: 

    esto quiere decir que podemos establecer ciertos valores que le pasamos a un función por defecto.

    //antes se establecian los parametros de la funcion y dentro de la incion se inicializaban dentro de la funcion con variable (var)

        function newFunction(name, age, country) {
            var name = name || "mateo";
            var age = age || 19;
            var country = country || "colombia"
            console.log(name, age, country);
        }
    
   

    //es6: en esta version se pueden asignar los valores, en el momento en el qeu se establecen los parametros.

        function newFunction(name = "mateo", age = 19, country = "colombia") {
            console.log(name, age, country);
        }

    ejecucion codigo

        [Running] node "c:\Users\CAROLINA\curoECMAScript\src\es6\tempCodeRunnerFile.js"
        mateo 19 colombia
        carolina 42 colombia

        [Done] exited with code=0 in 0.129 seconds

    * TEMPLE LITERARY: 

    Nos permite separar o unir  según sea el caso; varios elementos.

        //antes se debia crear un variable con los dos variables que se querian unir (cancatenar)
        ejemplo:

        let hello = "Hello";
        let world = "World";
        let epicPhrase = hello + " " + world;
        console.log(epicPhrase);

        Ejecucion codigo:

            [Running] node "c:\Users\CAROLINA\curoECMAScript\src\es6\tempCodeRunnerFile.js"
            Hello World

        //es6:

        se crea la variable y con este formato  `${hello}` ; comillas francesas, signo de dienro y corchete, se ingresan las variablea aunir (concatenar)
        ejemplo:

        let hello = "Hello";
        let world = "World";
        let epicPhrase2 = `${hello} ${world}` 

        Ejecucion codigo:

            [Running] node "c:\Users\CAROLINA\curoECMAScript\src\es6\tempCodeRunnerFile.js"
            Hello World
            Hello World

            [Done] exited with code=0 in 0.121 seconds


# CLASE 3 LET y CONST, Multilínea, Spread Operator y Desestructuración

para realizar multiples lineas se colocaba \n y se concatenaba con +

ejemplo:
    let lorem = "Frase 1 \n" + "Frase 2";
    console.log(lorem); 

    ejecucion consola
        [Running] node "c:\Users\CAROLINA\curoECMAScript\src\es6\tempCodeRunnerFile.js"
        Frase 1 
        Frase 2

        [Done] exited with code=0 in 0.116 seconds

//es6: se coloca la primera frase o parrafo y se da enter y se coloca el segundo parrafo  todo dentro de las comillas francesas
ejemplo
    let lorem2 = `frase 1
    frase 2`;
    console.log(lorem2); 

ejecucion consola:
    [Running] node "c:\Users\CAROLINA\curoECMAScript\src\es6\tempCodeRunnerFile.js"
    frase 1
    frase 2

    [Done] exited with code=0 in 0.104 seconds

al crear un bojeto con tres elementos name, age, country

let person = {
    "name":"mateo",
    "age": 32,
    "country": "colombia"
}

para acceder al los elemntos del objeto se tendira que escribir el objeto separado del punto y el elemanto 
    ejemplo: para este caso person.name, persom es el objeto y name, age y country son los elemantos del objeto.

    console.log(person.name, person.age, person.country);

ejecucion consola:
    [Running] node "c:\Users\CAROLINA\curoECMAScript\src\es6\tempCodeRunnerFile.js"
    mateo 32 colombia

    [Done] exited with code=0 in 0.117 seconds

//es6:
    let person = {
        "name":"mateo",
        "age": 32,
        "country": "colombia"
    }

    let { name, age, country} = person;
    console.log(name, age, country);

ejecucion consola:

    [Running] node "c:\Users\CAROLINA\curoECMAScript\src\es6\tempCodeRunnerFile.js"
    mateo 32 colombia

    [Done] exited with code=0 in 0.112 seconds

//es6: Unir array 
    let team1= ["Oscar", "Carolina", "Juan pablo", "Mateo"];
    let team2 = ["Marcela", "Sebastian","Esteban", "Matias"];

    let education = ["David", ...team1, ...team2];

    console.log(education);

ejecucion consola:

[Running] node "c:\Users\CAROLINA\curoECMAScript\src\es6\tempCodeRunnerFile.js"
[
  'David',     'Oscar',
  'Carolina',  'Juan pablo',
  'Mateo',     'Marcela',
  'Sebastian', 'Esteban',
  'Matias'
]

[Done] exited with code=0 in 0.161 seconds


//variables

inicalmente utilizavamos var, y declarabamos o inicializabamos las variables con esta de manera global

//es6: se declaran e incicializan las variables con let y const

let cuando la variable se indica con let solo va ha estar disponible en el Scope, esto significa qeu va estar disponible en el bloque del codigo en el cual va hacer llamado

    ejemplo: variable var

    {var globalVar = " hola"};
    console.log(globalVar);

Ejecucion codigo:
    [Running] node "c:\Users\CAROLINA\curoECMAScript\src\es6\tempCodeRunnerFile.js"
    hoal

    [Done] exited with code=0 in 0.111 seconds


Ejemplo: variable let: esta solo se puede llamar dentro del bloque 
    
    {let globalLet = "hola";
    console.log(globalLet);
    }

Ejecucion codigo:

    [Running] node "c:\Users\CAROLINA\curoECMAScript\src\es6\tempCodeRunnerFile.js"
    hola

    [Done] exited with code=0 in 0.117 seconds




antes se declarava la variable con var y se le podia cambiar el valor asignado a la variable.

    ejemplo:
    var a = "b";
    console.log(a);
Ejecucion codigo:
    [Running] node "c:\Users\CAROLINA\curoECMAScript\src\es6\tempCodeRunnerFile.js"
    b

    [Done] exited with code=0 in 0.241 seconds

a la variable ya inicializada se le puede cambia el valor asignado 

    ejemplo:
    var a = "b";
    a="a"
    console.log(a);

Ejecucion codigo:
[Running] node "c:\Users\CAROLINA\curoECMAScript\src\es6\tempCodeRunnerFile.js"
a

[Done] exited with code=0 in 0.235 seconds


Con const es una variable constante, por lo cual NO se le puede cambiar el valor asignado
   
    ejemplo:
    const a = "b";
    a="a"
    console.log(a);
    
Ejecucion codigo:
TypeError: Assignment to constant variable.

nos indica qeu hay un erro por qeu la variabe a ya se le asigno un valor y no se puede cambiar; por qeu la variable es constante



    





















