/*.::CORALESoftware::.
Name of the proyect: 𝙉𝙤𝙙𝙚 𝙀𝙭𝙥𝙧𝙚𝙨𝙨 𝙎𝙚𝙧𝙫𝙚𝙧*/

//Var and Hoisting:
let serverExpress = require('http'); //serverExpress contains all the methods of the HTTP protocol to run a web server
let url = require('url');//Records the URL address and allows you to specify custom behavior
let fs = require('fs');//File system
const color = require('colors');//Add color 
let listenPort = 1111;//listen virtual port default 
let index;//Hoisting(declarar sin asignar valor para apartar un espacio de memoría)
let container;
let registration;
let Rute;

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
        Rute = url.parse(requires.url).pathname;//Captures what is entered in the url and stores it in a variable
        console.log('\tA new connection detected'.inverse+'\n');
        
        //Registration:
        registration = fs.createWriteStream('registration.txt',{'flags':'a'});//flags. add information registration.txt
        registration.write(Rute+'\n');//Conection Log
        //Container:
        container = Router(manejador,Rute,reply);//Call function router in roterNodExpresserver.js
        
        //Validation URL: 
            if(Rute == '/'){Rute = "index.html";}
            if(Rute == '/services'){Rute = "services.html";}
            if(Rute == '/services'){Rute = "services.html";}
            if(Rute == '/information'){Rute = "information.html";}
            if(Rute == '/contact'){Rute = "contact.html";}
        index = fs.readFileSync("www/"+Rute);//Read file from hard drive:
        reply.write(index);
        reply.end('');
        console.log('--------------------------------------------------'.rainbow)
    }   
    serverExpress.createServer(startServerExpress).listen(listenPort);//Call the Node Express Server
}
//Init(); 
exports.Init = Init//command of communocation: node-express-server.js <->initNodExpress.js