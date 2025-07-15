/* Ejercicio 2: Sistema de empleados
 Crea un sistema de clases para representar empleados de una empresa:
 1.Clase Empleado con propiedades: nombre, edad, salarioBase y 
método calcularSalario() que devuelve el salario base.
 2.Clase Gerente que herede de Empleado y añada bonificacion. 
Sobrescribe calcularSalario() para que sume la bonificación.
 3.Clase Desarrollador que herede de Empleado y añada lenguaje. El salario es igual al base.
 Crea instancias de cada tipo y muestra sus salarios.*/

class Empleados{
    constructor(nombre,edad,salariobase){
        this.nombre = nombre;
        this.edad = edad;
        this.salariobase =salariobase
    }
    calcularSalario() {
        console.log(`Nombre: ${this.nombre}, edad: ${this.edad}, salario base: ${this.salariobase}`);
}
}
class gerente extends Empleados{
    constructor(nombre,edad,salariobase,bonificacion){
        super(nombre,edad,salariobase)
        this.bonificacion = bonificacion
    }
    calcularSalario(){
    console.log(`Nombre: ${this.nombre}, edad: ${this.edad}, salario base: ${this.salariobase} bonificacion: ${this.bonificacion}`);
    }
}
class desarrollador extends Empleados{
    constructor(nombre,edad,salariobase,lenguaje){
        super(nombre,edad,salariobase)
        this.lenguaje =lenguaje
    }
    calcularSalario(){
        console.log(`Nombre: ${this.nombre}, edad: ${this.edad}, salario base: ${this.salariobase} lenguaje: ${this.lenguaje}`);
    }
}

const empleado1 = new Empleados("Pepito",38,1200000,)
const gerente1 = new gerente("ana",30,2000000,500000)
const desarrollador1 = new desarrollador("carolina",30,1800000,"java")

empleado1.calcularSalario();
gerente1.calcularSalario();
desarrollador1.calcularSalario();