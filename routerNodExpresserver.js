/*.::CORALESoftware::.
Name of the proyect: 𝙉𝙤𝙙𝙚 𝙀𝙭𝙥𝙧𝙚𝙨𝙨 𝙎𝙚𝙧𝙫𝙚𝙧
Name of the archive: routerNodExpresserver*/

//Var and Hoisting:
const xcolor= require('colors');

//Functions:
function Router(manejador,xrute,xreply)//this is the router
{
    console.log('-> A new connection detected:'.bold+''+xrute);
    
    //Evaluation
    if(typeof manejador[xrute] ==='function')
    {
        //return manejador[xrute]();
        manejador[xrute](xreply)//Add reply
    }else{
        console.warn("-> This is not a function:".bold.cyan+''+xrute)
    }  
}
exports.Router = Router; //router function export