/*.::CORALESoftware::.
Name of the proyect: 𝙉𝙤𝙙𝙚 𝙀𝙭𝙥𝙧𝙚𝙨𝙨 𝙎𝙚𝙧𝙫𝙚𝙧
Name of the archive: initNodExpresserver
Made by: Asdrúbal José Corales Pérez
Description: This is a project made in Node.Js, for my briefcase
License: MIT.
Contac me in: asdrubalcorales92@gmail.com
My phone number is: +58 412 4811678 */

//Instantantiation
let Server = require('./node-express-server');//Call Server
let Xrouter = require('./routerNodExpresserver');//Call router
let Xrequests = require('./requestsNodExpresserver.js');//Call requests

//Requests Hhandler
let manejador = {}//Vector
manejador['/'] = Xrequests.xinit;
manejador['/pagina1'] = Xrequests.pagina1;
manejador['/pagina2'] = Xrequests.pagina2;
manejador['/favicon.ico'] = Xrequests.favicon;//Controller favicon error


Server.Init(Xrouter.Router,manejador);//Call the init and router
//Server.Init();//Call the init