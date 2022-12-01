# ¿Qué se implementó en ES7?

ES 7 nace en junio de 2016

## includes()

El método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda. anteriormente se utilizaba indexOf()

    Ejemplos:

    const array1 = [1, 2, 3];

    console.log(array1.includes(2));
    // expected output: true

    const pets = ['cat', 'dog', 'bat'];

    console.log(pets.includes('cat'));
    // expected output: true

    console.log(pets.includes('at'));
    // expected output: false

## operador de exponenciación (**)

Este operador nos permite calcular la potencia de un número. Le indicamos el numero base y el exponente y nos hará el cálculo elevando el numero base al exponente. Anteriormente esto mismo se podía hacer con la función Math.pow ($base, $exponente), pero ahora se hace con **

ejemplos:
    

