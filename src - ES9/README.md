# ¿Qué se implementó en ES9?

## operador all

    permite seleccionar un elemento de un objeto y dejar encapsulado los demás en un corchete

## operador de propagacion 

    permite anidar los elementos de dos objetos (unirlos)


## Promise.prototype.finally()

    método finally() devuelve una Promise. Cuando la promesa se resuelve, sea exitosa o rechazada, la función de callback específicada será ejecutada. Esto ofrece una forma de ejecutar código sin importar como se haya resuelto la promesa.

    Esto ayuda a evitar tener código duplicado tanto en el then() como en el catch().