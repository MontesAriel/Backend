


class Usuario {
    constructor(nombre, apellido, libros, mascotas ) {
        this.nombre = String(nombre),
        this.apellido = String(apellido),
        this.libros = [],
        this.mascotas = Number(mascotas)
    }
    addBook(autor, nombre) {
        return this.libros.push(`Autor: ${autor} Nombre: ${nombre}`)
    }
}


const usuario1 = new Usuario('Ariel', 'Montes', 1)

function getFullName() {
    return `Nombre y Apellido: ${usuario1.nombre} ${usuario1.apellido}`
}


function countMascotas() {
    return `Mascotas: ${usuario1.mascotas}`
}



function getBookNames() {
    return `Libros: ${usuario1.libros}`
}

usuario1.addBook('Gabriel García Márquez', 'El amor en tiempos de cólera')



console.log(getFullName())
console.log(countMascotas())
console.log(getBookNames())
console.log(`Libros push ${usuario1.libros}`)