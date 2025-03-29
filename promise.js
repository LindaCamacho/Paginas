const  {promisify} = require("util");
function pedirPizzaCallBack(callback) {
    console.log("Pedido realizado. Esperando la pizza..")

    setTimeout(() => {
        let exito = true; 
        if(exito) {
            callback("Pizza entregada"); 
        } else {
            callback("Hubo un problema con tu pedido");
        }

    },3000);
}

const pedirPizza = promisify(pedirPizzaCallBack);
async function pedirPizza(){
    try {
        const mensajeExito = await pedirPizza();
        console.log(mensajeExito)
    } catch (mensajeError) {
        console.log(mensajeError);
    }
}

