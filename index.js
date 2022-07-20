
//ENTREGA 1°

// class Usuario {
//     constructor(nombre, apellido, libros, mascotas ) {
//         this.nombre = nombre,
//         this.apellido = apellido,
//         this.libros = libros,
//         this.mascotas = mascotas
//     }
//     getFullName() {
//         return `${this.nombre} ${this.apellido}`
//     }
//     addMascotas(mascota) {
//         this.mascotas.push(mascota);
//     }
//     countMascotas() {
//         return this.mascotas.length
//     }
//     getBookNames() {
        
//         return  this.libros.map(libro => libro.nombre)
//     }

//     addBook(autor, nombre) {
//         return this.libros.push(autor, nombre)
//     }
   
// }


// const usuario1 = new Usuario('Ariel', 'Montes',   //nombre y apellido
//                 [{nombre: 'El amor en tiempos de cólera', autor:'Gabriel García Márquez'}],  //nombre y autor del libro
//                 ['perro coco', 'perro pelusa']);    //mascotas


// usuario1.addBook(  'Angeles y demonios','Dan Brown');
// usuario1.addMascotas('gato Ubbe')


// console.log('Nombre completo: ', usuario1.getFullName())
// console.log('Libros: ', usuario1.getBookNames())
// console.log('Cantidad de mascotas: ', usuario1.countMascotas())



//ENTREGA 2°
const Contenedor = require('./productos');


const productos = new Contenedor('./prueba.txt')

productos.save({title: 'Casa Rafael Calzada', price: 1500000, category: 'compra', description: ''});


// productos.getById(1)


// productos.getAll()

// productos.delete(5)

// /productos.deleteAll()