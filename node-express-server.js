/*.::CORALESoftware::.
Name of the proyect: 𝙉𝙤𝙙𝙚 𝙀𝙭𝙥𝙧𝙚𝙨𝙨 𝙎𝙚𝙧𝙫𝙚𝙧
Made by: Asdrúbal José Corales Pérez
Description: This is a project made in Node.Js, for my briefcase
License: MIT.
Contac me in: asdrubalcorales92@gmail.com
My phone number is: +58 412 4811678 */

//Var:
let serverExpress = require('http'); //serverExpress contains all the methods of the HTTP protocol to run a web server
let url = require('url');//Regístra la diercción de URL y permite especificar un comportamiento personalizado 
let fs = require('fs');//File system
const color = require('colors');//Add color 
let codeBrowser = 200;
let listenPort = 1111;//listen virtual port default 

console.log('\n==================𝙉𝙤𝙙𝙚 𝙀𝙭𝙥𝙧𝙚𝙨𝙨 𝙎𝙚𝙧𝙫𝙚𝙧===========')
console.log('                    ░░░░░░░░▄▄█▄▄')
console.log('By Ing. A Corales P.░░░░▀▀▀██▀▀▀██▀▀▀')
console.log('    MIT LICESE      ▄▄▄▄▄▄▄███████▄▄▄▄▄▄▄')
console.log('                    ░░█▄█░░▀██▄██▀░░█▄█')
console.log('____________________________________________________')

//Functions:
function Init(Router,manejador)//Capsule
{
    function startServerExpress(requires,reply)//This function starts Node Express Server
    {
        //Router:
        let Rute = url.parse(requires.url).pathname;//captures what is entered in the url and stores it in a variable
        let registration = fs.createWriteStream('registration.txt',{'flags':'a'});//flags. add information registration.txt
        console.log('\tA new connection detected'.inverse+'\n');
        let container = Router(manejador,Rute);//Call function router in roterNodExpresserver.js
        registration.write(Rute+'\n');
        
        reply.writeHead(codeBrowser,{"Content-Type":"text/html"});//whriteHead sends the type of document to the header to the borwser
        reply.write("<br><center><h1>Welcome to Node Express Server</h1><br>Powered by .::CORALESoftware::.</center>");
        reply.write("<br><br>   "+Rute+" is a new connection, detected in: "+container)
        //reply.write("<br><br>   A new rute detected... "+Rute)
        reply.end(); // This line closes the connection
        console.log('--------------------------------------------------'.rainbow)
    }
    serverExpress.createServer(startServerExpress).listen(listenPort);//Call the Node Express Server
}
//Init(); 
exports.Init = Init//command of communocation: node-express-server.js <->initNodExpress.js