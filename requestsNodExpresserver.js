/*.::CORALESoftware::.
Name of the proyect: 𝙉𝙤𝙙𝙚 𝙀𝙭𝙥𝙧𝙚𝙨𝙨 𝙎𝙚𝙧𝙫𝙚𝙧
Name of the archive: requestsNodExpresserver*/

//Var and Hoisting:
let codeBrowser = 200;

//Funtions:
function xinit(xreply)
{
    console.log('* Detection in the Home Page Node Express Server');
    //lock Code for xinit
    //let now = new Date().getTime;
    //while(new Date().getTime < now + 2000)
    //xreply.writeHead(codeBrowser,{"Content-Type":"text/html"});
    //xreply.write("<br><center><h1>Welcome to Node Express Server</h1><br>Powered by .::CORALESoftware::.</center>");
    //xreply.write('<br></br><p>This is Home Page and Node Express Server description</p>');
    //xreply.end();    
    //return 'xinit';
}

function information(xreply)
{
    console.log('* Detection in the information Node Express Server');
    xreply.writeHead(codeBrowser,{"Content-Type":"text/html"});
    //xreply.write("<br><center><h1>Welcome to Node Express Server</h1><br>Powered by .::CORALESoftware::.</center>");
    //xreply.write('<br></br><p>This is first Page.</p>');
    //xreply.end();  
    ///return 'information';
}

function services(xreply)
{
    console.log('* Detection in the services page Node Express Server');
    //xreply.writeHead(codeBrowser,{"Content-Type":"text/html"});
    //xreply.write("<br><center><h1>Welcome to Node Express Server</h1><br>Powered by .::CORALESoftware::.</center>");
    //xreply.write('<br></br><p>This is second Page.</p>');
    //xreply.end(); 
    //return 'services';
}

function contact(xreply)
{
    console.log('* Detection in the contact page Node Express Server');
    //xreply.writeHead(codeBrowser,{"Content-Type":"text/html"});
    //xreply.write("<br><center><h1>Welcome to Node Express Server</h1><br>Powered by .::CORALESoftware::.</center>");
    //xreply.write('<br></br><p>This is second Page.</p>');
    //xreply.end(); 
    //return 'contact';
}

function favicon(xreply)//Controller favicon error
{
    console.log('* Controlled favicon bug'.italic.red.underline);
    //xreply.writeHead(codeBrowser,{"Content-Type":"text/html"});
    //xreply.write("");
    //xreply.end("End of connection"); 
    //return "";
}

//to export:
exports.xinit = xinit;
exports.information = information;
exports.services = services;
exports.contact = contact;
exports.favicon = favicon;


/*NOTE: Como Node Js esta pensado para soportar millones de peticiones de manera simultane sin que este genere un 
gran costo en hardware, a diferencia de otros entornos, no inicia un hilo para cada una de las peticiones por el gasto
de memoría que implica, si no, que todo se comparte dentro un mismo hilo, pero el incoveniente de que todo se comparta
dentro de un mismo hilo, es que a veces podemos cometer errores en la programación, por ello se necesita realizar código
bloquedor de ejecución y código desbloquedor de ejecución.

Código Bloqueador: retiene por cierta cantidad de tiempo la ejeción de una instrucción
Código Desboqueador:

por tanto debemos hacer que el servidor sea no bloqueante.
*/