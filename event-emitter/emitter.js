function Emitter() {
    this.events = {};
}
/*Definimos una función constructora llamada Emitter, la cual contiene un objeto vacío.*/

Emitter.prototype.on = function (type,  listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}
/*En esta cadena de prototipo estamos añadiendo una función llamada "on", la cual recibe los
parámetros "type" y "listener". Básicamente, nos permite añadir funciones al array dependiendo
del "type" que sean.*/

Emitter.prototype.emit = function (type) {
    if(this.events[type]) {
       this.events[type].forEach(function (listener) {
            listener();
       });
    }
}
/*En esta cadena de prototipo estamos añadiendo una función llamada "emit", la cual recibe el
parámetro "type", el cual corresponde al nombre de la función que queremos llamar.*/

module.exports = Emitter;
/*Exportamos el módulo para que podamos utilizarlo en otros archivos .js*/