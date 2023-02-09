/*.::CORALESoftware::.
Name of the proyect: 𝙉𝙤𝙙𝙚 𝙀𝙭𝙥𝙧𝙚𝙨𝙨 𝙎𝙚𝙧𝙫𝙚𝙧
Name of the archive: initNodExpresserver*/

//Instantantiation
const Server = require('./node-express-server');//Call Server
const Xrouter = require('./routerNodExpresserver');//Call router
const Xrequests = require('./requestsNodExpresserver.js');//Call requests

//Requests xHandler
let manejador = {}//Vector
manejador['/'] = Xrequests.xinit;
manejador['index.html']=Xrequests.indexHtml;
manejador['/information'] = Xrequests.information;
manejador['/services'] = Xrequests.services;
manejador['/contact'] = Xrequests.contact;
manejador['/notFound'] = Xrequests.notFound;
manejador['/favicon.ico'] = Xrequests.favicon;//Controller favicon error

Server.Init(Xrouter.Router,manejador);//Call the init and router