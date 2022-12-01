# ¿Qué se implementó en ES8?

# Clase No. 7

## Object.entries() 

El método Object.entries() devuelve una matriz de pares propios de una propiedad enumerable [key, value] de un objeto dado, en el mismo orden que es proporcionado por for...in (La diferencia es que un bucle for-in enumera las propiedades en la cadena de prototipos).


## Object.value

El método Object.values() devuelve un array con los valores correspondientes a las propiedades enumerables de un objeto. Las propiedades son devueltas en el mismo orden a como lo haría un bucle for...in (la única diferencia es que un bucle for-in también enumera las propiedades en la cadena de prototipo de un objeto).


## String.prototype.padStart()

El método padStart() rellena la cadena actual con una cadena dada (repetida eventualmente) de modo que la cadena resultante alcance una longitud dada. El relleno es aplicado desde el inicio (izquierda) de la cadena actual.


## String.prototype.padEnd()

El método padEnd() rellena la cadena actual con una cadena determinada (repetida, si es necesario) para que la cadena resultante alcance una longitud determinada. El relleno se aplica desde el final de la cadena actual.

# Calse No. 8 

## Async

La declaración de función async define una función asíncrona, la cual devuelve un objeto AsyncFunction.

Parámetros
name
El nombre de la función.

param
El nombre de un argumento que se debe pasar a la función.

statements
Las declaraciones que conforman el cuerpo de la función.

Descripción
Cuando se llama a una función async, esta devuelve un elemento Promise. Cuando la función async devuelve un valor, Promise se resolverá con el valor devuelto. Si la función async genera una excepción o algún valor, Promise se rechazará con el valor generado.

Una función async puede contener una expresión await, la cual pausa la ejecución de la función asíncrona y espera la resolución de la Promise pasada y, a continuación, reanuda la ejecución de la función async y devuelve el valor resuelto.

## Await

El operador await es usado para esperar a una Promise. Sólo puede ser usado dentro de una función async function.

expression
Una Promise o cualquier otro valor por el cual haya que esperar.
rv
Regresa el valor terminado de la promesa o solamente un valor si no es unaPromise.

Descripción
La expresión await provoca que la ejecución de una función async sea pausada hasta que una Promise sea terminada o rechazada, y regresa a la ejecución de la función async después del término. Al regreso de la ejecución, el valor de la expresión await es la regresada por una promesa terminada.

Si la Promise es rechazada, el valor de la expresión await tendrá el valor de rechazo.

Si el valor de la expresión seguida del operador await  no es una promesa, será convertido a una resolved Promise.


## Promise
Una Promise (promesa en castellano) es un objeto que representa la terminación o el fracaso de una operación asíncrona. Dado que la mayoría de las personas consumen promises ya creadas, esta guía explicará primero cómo consumirlas, y luego cómo crearlas.


# Función Callback

Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

## EVENT LOOP

# como funciona la asincronia gracias al Event Lopp

JavaScript tiene una ejecución síncrona(solo ejecuta un sola cosa a la vez) y secuencial, en algunos casos puede ejecutarse líneas de código asíncrona, los Eveen Loop son los encargados de ejecutar estas líneas asíncronas, las que se ejecutaran en algún momento futuro. 






