console.log('Hello');
 
setTimeout(() => {
  console.log('Time');
}, 2000);
 
console.log('World');


/* el orden de ejecución seria 
    Hello
    Time
    World 
    
con el método setTimeout el orden de ejecución seria 
    Hello
    World
    Time 
se imprime Time de ultimo dado al tiempo de espera que se le asigno con el método setTimeou */