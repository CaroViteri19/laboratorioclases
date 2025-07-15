/* Ejercicio 3: Sistema de productos electrónicos
 Modela un sistema de productos electrónicos con:
 1.Clase Producto con nombre, precio, marca y método descripcion().
 2.Clase Telefono que herede de Producto y añada almacenamiento, ram.
 3.Clase Laptop que herede de Producto y añada procesador, pulgadas.
 Crea instancias y muestra sus descripciones.*/
 
 class producto{
    constructor(nombre,precio,marca){
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca
    }
    descripcion(){
        console.log(`Nombre: ${this.nombre}, Precio: ${this.precio}, Marca: ${this.marca}`);
    }
 }
 class telefono extends producto{
    constructor(nombre,precio,marca,almacenamiento,ram){
        super(nombre,precio,marca)
        this.almacenamiento = almacenamiento;
        this.ram =ram
    }
    descripcion() {
        console.log(`Nombre: ${this.nombre}, Precio: $${this.precio}, Marca: ${this.marca}, Almacenamiento: ${this.almacenamiento}GB, RAM: ${this.ram}GB`);
    }
 }
 class laptop extends producto{
    constructor(nombre,precio,marca,procesador,pulgadas){
        super(nombre,precio,marca)
        this.procesador = procesador
        this.pulgadas = pulgadas
    }
    descripcion() {
        console.log(`Nombre: ${this.nombre}, Precio: $${this.precio}, Marca: ${this.marca}, Procesador: ${this.procesador}, Pulgadas: ${this.pulgadas}"`);
    }
 }

 const producto1 = new producto("mouse",2000,"logitech")
 const telefono1 = new telefono("celular",50000,"samsung",64,8)
 const laptop1 = new laptop ("vivobook",100000,"asus","core3",20)

producto1.descripcion();
telefono1.descripcion();
laptop1.descripcion();