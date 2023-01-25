/*.::CORALESoftware::.
Name of the proyect: 𝙉𝙤𝙙𝙚 𝙀𝙭𝙥𝙧𝙚𝙨𝙨 𝙎𝙚𝙧𝙫𝙚𝙧
Name of the archive: routerNodExpresserver
Made by: Asdrúbal José Corales Pérez
Description: This is a project made in Node.Js, for my briefcase
License: MIT.
Contac me in: asdrubalcorales92@gmail.com
My phone number is: +58 412 4811678 */
//Var:
const xcolor= require('colors');

//Functions:
function Router(manejador,xrute)//this is the router
{
    console.log('* route detected:'+xrute.yellow.underline);
    
    //Evaluation
    if(typeof manejador[xrute] ==='function')
    {
        return manejador[xrute]();
    }else{
        console.log("* This is not a function: "+xrute.red.underline)
    }
    
}
exports.Router = Router; //router function export


/*NOTE: si no se evalua el vector manejador[xrute] va a generar un error de ejecución
motivado a la ruta ./favicon.ico que solicita el icono de cada website para la pestaña
del navegador, por cual se debe hacer una función con su estructura de control y evaluación
que trate a ./favicon.ico */