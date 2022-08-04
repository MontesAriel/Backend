const fs = require('fs');

class Contenedor {
    constructor(ruta){
        this.ruta = ruta
    }
    async save(obj) {
        try {
            let data  = await fs.promises.readFile(this.ruta, 'utf8');

            let dataArchivoParse = JSON.parse(data)  //.length-1 => ultimo elemento
            if(dataArchivoParse.length){
                //cuando length = 0 => false
                // (tres puntos) pread ...[array] u {objeto} => copia el contenido
                await fs.promises.writeFile(this.ruta, JSON.stringify([...dataArchivoParse, {...obj, id: dataArchivoParse[dataArchivoParse.length -1].id +1 }], null, 2))
            } else {
                await fs.promises.writeFile(this.ruta, JSON.stringify( [{...obj, id: 1 }], null, 2))
            }

             return data.dataArchivoParse[dataArchivoParse.length - 1].id + 1;
            
        } catch (error) {
            console.log(error)    
        }
    }

    async updateById(obj) {

        try {
            let data  = await fs.promises.readFile(this.ruta, 'utf8');
            let dataArchivoParse = await JSON.parse(data)  //.length-1 => ultimo elemento
            const objIndex = dataArchivoParse.findIndex(prod => prod.id === obj.id)

            if(objIndex !== -1){
                //cuando length = 0 => false
                // (tres puntos) pread ...[array] u {objeto} => copia el contenido
                dataArchivoParse[objIndex] = obj
                await fs.promises.writeFile(this.ruta, JSON.stringify(dataArchivoParse, null, 2))
                return {msg: 'Actualizado el producto'}
            } else {
                return {error: 'no existe el producto'}
            }
            
        } catch (error) {
            console.log(error)    
        }
    }

    

    //Traer producto por ID

    async getById(id) {
        try {
            let data = await fs.promises.readFile(this.ruta, 'utf-8')
            let dataArchivoParse = JSON.parse(data)
            
            let producto = dataArchivoParse.find(producto => producto.id === id)
            if(producto) {
                // return producto
                console.log(producto)
            } else {
                console.log('No se encontro el producto')
            }

        } catch (error) {
            console.log(error)
        }
    }

    //traer todos los productos

    async getAll() {
        try {
            let data = await fs.promises.readFile(this.ruta, 'utf-8')
           
            let dataArchivoParse = JSON.parse(data)
            if(dataArchivoParse.length){
               return dataArchivoParse;
            } else {
                console.log('No hay productos')
            }

        } catch (error) {
            console.log(error)
        }
    }

    //Eliminar producto por id 

    async delete(id) {
        try {
            let data = await fs.promises.readFile(this.ruta, 'utf-8')
            let dataArchivoParse = JSON.parse(data)
            
            let producto = dataArchivoParse.find(producto => producto.id === id)
            if(producto) {
                let dataArchivoFiltrado = dataArchivoParse.filter(producto => producto.id !== id)
                await fs.promises.writeFile(this.ruta, JSON.stringify(dataArchivoFiltrado, null, 2), 'utf-8')
                console.log('Producto eliminado')
            } else{
                console.log('No se encontro el producto')
            }

        } catch (error) {
            console.log(error)
        }
    }

    //eliminar todos los productos

    async deleteAll() {
        try {
            await fs.promises.writeFile(this.ruta, JSON.stringify([], null, 2), 'utf-8')
        } catch (error) {
            console.log(error)
        }
    }

    //traer un producto al azar 

    async randomItem(){
        try {
            let data = await fs.promises.readFile(this.ruta, 'utf-8')
            let dataArchivoParse = JSON.parse(data)
            let randomItem = dataArchivoParse[Math.floor(Math.random() * dataArchivoParse.length)]
            return randomItem
     } catch (error) {
        console.log(error)
     }
    }

}

module.exports = Contenedor
