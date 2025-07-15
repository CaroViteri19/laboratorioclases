/*Ejercicio 4: Sistema de figuras geométricas
 Crea un sistema de clases para figuras geométricas:
 1.Clase Figura con propiedad color y método area() que devuelve 0.
2.Clase Rectangulo que herede de Figura y añada base, altura. Sobrescribe area().
 3.Clase Circulo que herede de Figura y añada radio. Sobrescribe area().
 Crea instancias y muestra sus áreas.*/

class Figura {
    constructor(color) {
        this.color = color;
    }

    area() {
        console.log(0); 
    }
}
class Rectangulo extends Figura {
    constructor(color, base, altura) {
        super(color);
        this.base = base;
        this.altura = altura;
    }

    area() {
        const resultado = this.base * this.altura;
        console.log(`Rectángulo (color: ${this.color}) - Área: ${resultado}`);
    }
}
class Circulo extends Figura {
    constructor(color, radio) {
        super(color);
        this.radio = radio;
    }

    area() {
        const resultado = Math.PI * this.radio ** 2;
        console.log(`Círculo (color: ${this.color}) - Área: ${resultado.toFixed(2)}`);
    }
}

const figura1 = new Figura("Transparente");
const rectangulo1 = new Rectangulo("Verde", 8, 4);
const circulo1 = new Circulo("Rojo", 6);

console.log("Área de figura");
figura1.area();
console.log("Área del rectángulo:");
rectangulo1.area();
console.log("Área del círculo:");
circulo1.area();
