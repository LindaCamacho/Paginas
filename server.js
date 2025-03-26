const http = require("http")

http.createServer((req,res)=>{
    if(req.url==="/pago"){
        res.write("Pago completado")
        return res.end()
    }
    res.write("Hola mundo")
    res.end()
}).listen(3000)

console.log("El servidor está listo en el puerto 3000")