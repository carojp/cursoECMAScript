//Async Await   ES8

//Creamos una funcion flecha (function arroy)

const helloWorld = () => {
    return new Promise ((resolve, reject) =>{
        (true)
        ? setTimeout (() => resolve("hello World"), 3000)
        : reject(new Error ("Tes Error"))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld(); //se puede tener varias variables, para hacer ciertos llamado
    console.log (hello);
}

//finalmente se  ejecuta la función

helloAsync();

//manera correcta de ejecutar Async Await

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    }
    catch (error) {
        console.log(error);
    }
};

anotherFunction();



