/*.::CORALESoftware::.
Name of the proyect: 𝙉𝙤𝙙𝙚 𝙀𝙭𝙥𝙧𝙚𝙨𝙨 𝙎𝙚𝙧𝙫𝙚𝙧
Made by: Asdrúbal José Corales Pérez
Description: This is a project made in Node.Js, for my briefcase
License: undifined.
Contac me in: asdrubalcorales92@gmail.com
My phone number is: +58 412 4811678*/
console.log('\n==================𝙉𝙤𝙙𝙚 𝙀𝙭𝙥𝙧𝙚𝙨𝙨 𝙎𝙚𝙧𝙫𝙚𝙧=========== ')
console.log('                    ░░░░░░░░▄▄█▄▄')
console.log('By Ing. A Corales P.░░░░▀▀▀██▀▀▀██▀▀▀')
console.log('    MIT LICESE      ▄▄▄▄▄▄▄███████▄▄▄▄▄▄▄')
console.log('                    ░░█▄█░░▀██▄██▀░░█▄█')
console.log('================================================== ')

//Vars:
let serverExpress = require('http'); //serverExpress contiene todos los metodos para hacer funcionar un servidor web a traves del protocolo http
let codeBrowser = 200;
let listenPort = 4444;//listen port default  

//Functions:

function startServerExpress(requires,reply)//This function starts Node Express Server
{
    reply.writeHead(codeBrowser,{"Content-Type":"text/html"});//whriteHe envía la cabecera al borwserd especifica el tipo de documento a enviar
    reply.write("<br><center><h1>Welcome to Node Express Server</h1><br>Powered by .::CORALESoftware::.</center>");
    reply.end(); // This line closes the connection
}

serverExpress.createServer(startServerExpress).listen(listenPort);