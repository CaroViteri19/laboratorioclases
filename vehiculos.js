/* Ejercicio 1: Sistema básico de vehículos
 Crea un sistema de clases para representar diferentes tipos de vehículos. Debes crear:
 1.Una clase Vehiculo con propiedades: marca, modelo, año y un 
método obtenerDetalles() que devuelva un string con toda la información.
 2.Una clase Coche que herede de Vehiculo y añada la propiedad numeroPuertas.
 3.Una clase Moto que herede de Vehiculo y añada la propiedad cilindrada.
 Crea instancias de ambas clases hijas y muestra sus detalles.*/

 class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    obtenerDatos() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`);
    }
}
class carro extends Vehiculo {
    constructor(marca, modelo, año, numeroPuertas) {
        super(marca, modelo, año);
        this.numeroPuertas = numeroPuertas;
    }

    obtenerDatos() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}, Puertas: ${this.numeroPuertas}`);
    }
}

class Moto extends Vehiculo{
    constructor(marca,modelo,año,propiedadCilindrada){
        super(marca,modelo,año);
        this.propiedadCilindrada = propiedadCilindrada
    }
    obtenerDatos() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}, Propiedad: ${this.propiedadCilindrada}`);
    }
}

const carro1 = new carro ("audi","sedan",2010,4)
const moto1 = new Moto("apache","RTR",2024,200)

carro1.obtenerDatos()
moto1.obtenerDatos()