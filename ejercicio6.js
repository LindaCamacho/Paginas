const fs = require('node:fs')

fs.readFile('./archivo1.txt', (error, datos) => {

    if (error)
        console.log(error)
    else
        console.log(datos.toString())
    })

console.log('última línea del programa')