# ECMAScript 6+:

# clase 4: Arrow Functions, Promesas y Parámetros en objetos

# Parámetros en objetos

    Asignar valores a los parametrod de los objetos en E6 se simplifica:
    Ejemplo
        let nombre = "Mateo";
        let años = 19;

        //es5
        obj = { nombre: nombre, años: años};
        //es6
        obj2 = { nombre, años};

        console.log(obj2);
    
    Comsulta consola:

        [Running] node "c:\Users\CAROLINA\curoECMAScript\src\e6-calse 5\tempCodeRunnerFile.js"
        { nombre: 'Mateo', 'años': 19 }

        [Done] exited with code=0 in 0.289 seconds

# //Arrow Functions (Funciones tipo flecha)

    Estas funciones se trabajan con una sintaxis mas reducida, son funcionea anonimas

documentacion :
    Funciones Flecha
    Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional, pero es limitada y no se puede utilizar en todas las situaciones.

    Diferencias y limitaciones:

    No tiene sus propios enlaces a this o super y no se debe usar como métodos.
    No tiene argumentos o palabras clave new.target.
    No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
    No se puede utilizar como constructor.
    No se puede utilizar yield dentro de su cuerpo.

    const nombres = [
        {nombre: "carolina", años:42},
        { nombre: "Mateo", años: 19}
    ];

//e5

 en esta caso se pasa con un funcion anonima:

    let listOfNombres = nombres.map(function(item){
        console.log(item.nombre, item.años);
    })

consulta consola:

    [Running] node "c:\Users\CAROLINA\curoECMAScript\src\e6-calse 5\tempCodeRunnerFile.js"
    carolina 42
    Mateo 19

    [Done] exited with code=0 in 0.206 seconds
    
//e6

    let listOfNombres2 = nombres.map(item => console.log (item.nombre, item.años));

consulta consola:
    [Running] node "c:\Users\CAROLINA\curoECMAScript\src\e6-calse 5\tempCodeRunnerFile.js"
    carolina 42
    Mateo 19

    [Done] exited with code=0 in 0.273 seconds

Otras formas de la sintaxis de las Arrow Functions pueden ser: 

ejemplo 1:
    const listOfNombres3 = (nombre, años) => {
       ...... 
    }

ejemplo 2:
    const listOfNombres4 = name => {
        .....
    }

ejemplo 3
    const square = num => num * num;


# Promesas:

con estas se puede trabajar el asincronismo, esto lo que quiere decir es que JavaScript no es un sincrónico, asea que no puede ejecutar muchos elementos al mismo tiempo, si no que va ejecutando elemento por elemento.

cuando es true

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
        .then(() => console.log("hola")) 
        .catch(error => console.log(error));

//a un promesa se le pueden anidar varios elemento then

Consulta consola True:

    [Running] node "c:\Users\CAROLINA\curoECMAScript\src\e6-calse 5\tempCodeRunnerFile.js"
    Hey!
    hola

    [Done] exited with code=0 in 0.215 seconds

cuando es false:

    const helloPromise = () => {
        return new Promise ((resolve, reject) => {
            if(false){
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

Consulta consola false:

[Running] node "c:\Users\CAROLINA\curoECMAScript\src\e6-calse 5\tempCodeRunnerFile.js"
Ups!!

[Done] exited with code=0 in 0.221 seconds


# clase 5: Clases, Módulos y Generadores


## clases: class (palabra reservada)

es la forma de manejar una sintaxis mas clara para manejar objetos y también la herencia dentro de JavaScript y esto nos permite aplicar la programación orientada a objetos 

constructor(), es el metodo para inicializar nuestra clase


## Módulos: export y import, con estas palabras se trabajan los módulos

Puedes importar uno o más objetos o valores utilizando el nombre que se le definió en el módulo y que se haya declarado con la palabra clave export


## Generadores: 

Es una función especial que retorna una serie de valores de acuerdo al algoritmo definido.

en la sintaxis se debe colocar un asterisco cuando se esta declarando la uncion (function*nombrefuncion)

    Ejemplo:

    function*helloWorld() {
        if(true) {
            yield "Hello,";   // yield es el valor qeu nos permite retornar algo  para este caso un string   
        }
        if(true) yield "World,";
    }

y se ejecuta creando uan variable 

    const generatorHello = helloWorld();
    console.log(generatorHello.next().value);
    console.log(generatorHello.next().value);
    console.log(generatorHello.next().value);

consulta consola

    [Running] node "c:\Users\CAROLINA\curoECMAScript\src\e6-calse 5\tempCodeRunnerFile.js"
    Hello,
    World,
    undefined

    [Done] exited with code=0 in 0.183 seconds




 


















