const express = require('express')
const Contenedor = require('./productos');
const productos = new Contenedor('./producto.txt')
//import express from 'express'

const app = express()

app.get('/productos', (req, res) => {
     res.send('Desafio N°3 - productos disponibles: ');
    res.send(productos.getAll()) 

})



app.get('/productosRandom', (req, res) => {
    res.send('Desafio N°3 - productos al azar:')
    // Math.random()
    res.send(productos.randomItem()) 
})


const PORT = 8080;
const server = app.listen(PORT, () => {
                                    //${server.adress().port}
    console.log(`Desafio N°3 en el puerto: ${PORT}`)
})

server.on('error', (err) => console.log(err))