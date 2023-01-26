/*.::CORALESoftware::.
Name of the proyect: 𝙉𝙤𝙙𝙚 𝙀𝙭𝙥𝙧𝙚𝙨𝙨 𝙎𝙚𝙧𝙫𝙚𝙧
Name of the archive: requestsNodExpresserver
Made by: Asdrúbal José Corales Pérez
Description: This is a project made in Node.Js, for my briefcase
License: MIT.
Contac me in: asdrubalcorales92@gmail.com
My phone number is: +58 412 4811678 */

//Var:
let codeBrowser = 200;

//Funtions:
function xinit(xreply)
{
    console.log('* Ha entrado en la página de inicio');
    //lock Code for xinit
    //let now = new Date().getTime;
    //while(new Date().getTime < now + 2000)
    xreply.writeHead(codeBrowser,{"Content-Type":"text/html"});
    xreply.write("<br><center><h1>Welcome to Node Express Server</h1><br>Powered by .::CORALESoftware::.</center>");
    xreply.write('<br></br><p>This is Home Page and Node Express Server description</p>');
    xreply.end();    
    //return 'xinit';
}

function pagina1(xreply)
{
    console.log('* Ha entrado en la página 01');
    xreply.writeHead(codeBrowser,{"Content-Type":"text/html"});
    xreply.write("<br><center><h1>Welcome to Node Express Server</h1><br>Powered by .::CORALESoftware::.</center>");
    xreply.write('<br></br><p>This is first Page.</p>');
    xreply.end();  
    ///return 'pagina1';
}

function pagina2(xreply)
{
    console.log('* Ha entrado en la página 02');
    xreply.writeHead(codeBrowser,{"Content-Type":"text/html"});
    xreply.write("<br><center><h1>Welcome to Node Express Server</h1><br>Powered by .::CORALESoftware::.</center>");
    xreply.write('<br></br><p>This is second Page.</p>');
    xreply.end(); 
    //return 'pagina2';
}

function favicon(xreply)//Controller favicon error
{
    console.log('* Controlled favicon bug'.italic.red.underline);
    xreply.writeHead(codeBrowser,{"Content-Type":"text/html"});
    xreply.write("");
    xreply.end(); 
    //return "";
}

exports.xinit = xinit;
exports.pagina1 = pagina1;
exports.pagina2 = pagina2;
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