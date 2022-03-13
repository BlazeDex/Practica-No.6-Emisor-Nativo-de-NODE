// var Emitter = require('./emitter');
var Emitter = require('events');
/*Insertamos la dependencia del "EventEmitter" propia de NODE JS.*/

/*Al utilizar la dependencia 'events' y realizar el node la terminal nos muestra algo de información
adicional que no había en emitter, como: _events, _eventsCount y _maxListeners, dichos atributos se
encuentran encapsulados. Además de que posee un atributo llamado [Symbol(kCapture)].*/

var config = require('./config');
/*Insertamos la dependencia de config.*/


/*Modificamos y adpatamos el código de la práctica anterior.*/
var emtr =  new Emitter();

/*emtr.on('greet', () => {
    console.log('Somewhere, someone said hello.')
});*/

emtr.on(config.events.GREET, () => {
    console.log('Somewhere, someone said hello.')
});

/*emtr.on('greet', () => {
    console.log('A greeting ocurred!')
});*/

emtr.on(config.events.GREET, () => {
    console.log('A greeting ocurred!')
});

console.log('Hello!'); /*Se está imprimiendo "Hello!" en la consola.*/

emtr.emit(config.events.GREET);
/*El resultado que muestra la terminal son las respuestas de las 2 funciones anteriores.
Al ejecutar el emisor de eventos se muestran todos aquellas funciones contenidas en el
evento "greet", por lo tanto, obtenemos dos respuestas con tan sólo una llamada.*/

/*emtr.on('jump', () => {
    console.log('someone jumped!');
});*/

emtr.on(config.events.JUMP, () => {
    console.log('someone jumped!');
});

console.log(emtr); 
/*Aquí estamos imprimiendo el contenido de emtr, el cual nos muestra los eventos
"greet" el cual contiene dos funciones y "jump" que contiene solamente una.*/

emtr.emit(config.events.JUMP);
/*Ahora emit también imprimió el resultado de la función que se encontraba en el 
evento "jump", cuyo resultado es "someone jumped!".*/

/*Aún con el código cambiado y adaptado los resultados obtenido siguen siendo los mismos, aunque 
con el "config" ahora tenemos mucho más control a la hora de querer cambiar el tipo de un evento.*/