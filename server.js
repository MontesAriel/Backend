const express = require('express')
const Contenedor = require('./productos');
const productos = new Contenedor('./producto.txt')
//import express from 'express'

const app = express()
const PORT = 8080;
const server = app.listen(PORT, () => {
                                    //${server.adress().port}
    console.log(`Desafio N°3 en el puerto: ${PORT}`)
})

server.on('error', (err) => console.log(err))

app.use(express.json())
app.use(express.static('public'))

app.get('/productos', async (req, res) => {
    try {
        const contenedor =  new Contenedor('./producto.txt')
       const productos = await contenedor.getAll()
       console.log(productos)
       res.json({productos}) 
    } catch (error) {
        console.log(error)
    }

})


app.get('/productosRandom', async (req, res) => {
    // Math.random()
    try {
        const contenedor =  new Contenedor('./producto.txt')
       const productoRandom = await contenedor.randomItem()
       return res.json({productoRandom}) 
    } catch (error) {
        console.log(error)
    }
})

