/*.::CORALESoftware::.
Name of the proyect: 𝙉𝙤𝙙𝙚 𝙀𝙭𝙥𝙧𝙚𝙨𝙨 𝙎𝙚𝙧𝙫𝙚𝙧*/

//Var, Hoisting and modules:
//Modules:
const serverExpress = require('http'); //serverExpress contains all the methods of the HTTP protocol to run a web server
const url = require('url');//Records the URL address and allows you to specify custom behavior
const fs = require('fs');//File system
const color = require('colors');//Add color 
const presentation = require('./presentation.js');
//Var:
let listenPort = 1111;//listen virtual port default 
let index;//Hoisting(declarar sin asignar valor para apartar un espacio de memoría)
let container;
let registration;
let Rute;//Container the rute of path URL


//console.log(presentation.show('this is a MSG'));//Show the welcome
presentation.show();//Show the welcome


//Functions:
function Init(Router,manejador)//Capsule
{ 
    function startServerExpress(requires,reply)//This function starts Node Express Server
    {
        //Router:
        Rute = url.parse(requires.url).pathname;//Captures what is entered in the url and stores it in a variable
        //console.log('\tA new connection detected'.inverse+'\n');
        
        //Registration:
        registration = fs.createWriteStream('registration.txt',{'flags':'a'});//flags. add information registration.txt
        registration.write(Rute+'\n');//Conection Log
        
        //Container:
        container = Router(manejador,Rute,reply);//Call function router in roterNodExpresserver.js
        
        //Validation URL: 
            if(Rute == '/')
            {
                Rute = "index.html";
            }else
                {
                    if(Rute == '/index')
                    {
                        Rute = "index.html";
                    }else
                        {
                            if(Rute == '/information')
                            {
                                Rute = "information.html";
                            }else
                                {
                                    if(Rute == '/services')
                                    {
                                        Rute = "services.html";
                                    }else
                                        {
                                            if(Rute == '/contact')
                                            {
                                                Rute = "contact.html";
                                            }else{
                                                Rute = 'index.html';
                                            }  
                                        }
                                }  
                        }
                }

            index = fs.readFileSync("www/"+Rute);//Read file from hard drive:
        reply.write(index);
        reply.end('');
        console.log('--------------------------------------------------'.rainbow)
    } serverExpress.createServer(startServerExpress).listen(listenPort);//Call the Node Express Server
}exports.Init = Init//command of communocation: node-express-server.js <->initNodExpress.js