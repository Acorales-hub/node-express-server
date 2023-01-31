/*.::CORALESoftware::.
Name of the proyect: 𝙉𝙤𝙙𝙚 𝙀𝙭𝙥𝙧𝙚𝙨𝙨 𝙎𝙚𝙧𝙫𝙚𝙧
Name of the archive: initNodExpresserver*/

//Instantantiation
let Server = require('./node-express-server');//Call Server
let Xrouter = require('./routerNodExpresserver');//Call router
let Xrequests = require('./requestsNodExpresserver.js');//Call requests

//Requests handler
let manejador = {}//Vector
manejador['/'] = Xrequests.xinit;
manejador['/information'] = Xrequests.information;
manejador['/services'] = Xrequests.services;
manejador['/contact'] = Xrequests.contact;
manejador['/favicon.ico'] = Xrequests.favicon;//Controller favicon error

Server.Init(Xrouter.Router,manejador);//Call the init and router
//Server.Init();//Call the init