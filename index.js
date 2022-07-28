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


const productos = new Contenedor('./producto.txt')

async function asyncCall() {
   await productos.save({property: 'Casa', location: 'Rafael Calzada', price: 1500000, category: 'compra', description: 'casa de 3 hambientes y patio'});


    //await productos.getById(1)


    //await productos.getAll()

    //await productos.delete(5)

    //await productos.deleteAll()

}

asyncCall()



// ENTREGA 3°

                            //peticion, respuesta
// const server = http.createServer( (req, res) => {
//     //accion para ver el saludo
//     const hora = new Date().getHours()
//     if( 6 <= hora && hora <= 12) {
//         res.end('<h1>Buen dia</<h1>')
//     } else if( 13 <= hora && hora <= 19) {
//         res.end('<h1>Buenas tardes</<h1>')
//     } else if( 20 <= hora && hora <= 5) {
//         res.end('<h1>Buenas noches</<h1>')
//     }
//     res.end('Hola mundo')
// })

// const http = require('http')

// const server = http.createServer ((req, res) => {
//     res.end('Entrega N°3')
// })

// const createdServer = server.listen(8080, () => {
//     try {
//         console.log(server.address())
//         console.log(`Escuchando en el puerto: ${server.address().port}`)    
//     } catch (error) {
//         console.log("error")
//     } 
// })








