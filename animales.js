/*Ejercicio 5: Sistema de animales
 Modela un sistema de animales con:
 1.Clase Animal con nombre, edad y método emitirSonido().
 2.Clase Perro que herede de Animal y sobrescriba emitirSonido().
 3.Clase Gato que herede de Animal y sobrescriba emitirSonido().
 Crea instancias y haz que emitan sonidos*/

class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    emitirSonido() {
        console.log(`${this.nombre} hace un sonido .`);
    }
}
class Perro extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad);
    }
    emitirSonido() {
        console.log(`${this.nombre} dice: Guau! `);
    }
}

class Gato extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad);
    }
    emitirSonido() {
        console.log(`${this.nombre} dice: Miau! `);
    }
}

const animal1 = new Animal("Criatura", 3);
const perro1 = new Perro("Wika", 5);
const gato1 = new Gato("Merlin", 2);

animal1.emitirSonido();  
perro1.emitirSonido();   
gato1.emitirSonido();   
