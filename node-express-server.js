/*.::CORALESoftware::.
Name of the proyect: 𝙉𝙤𝙙𝙚 𝙀𝙭𝙥𝙧𝙚𝙨𝙨 𝙎𝙚𝙧𝙫𝙚𝙧*/

    //Var, Hoisting and modules:
    //Modules:
    const serverExpress = require('http'); //serverExpress contains all the methods of the HTTP protocol to run a web server
    const url = require('url');//Records the URL address and allows you to specify custom behavior
    //const iP = require('ip');
    //const xIp = iP.address();
    const fs = require('fs');//File system
    const color = require('colors');//Add color 
    const presentation = require('./presentation.js');
    //Var:
    let listenPort = 1111;//listen virtual port default 
    let index;
    let container;
    let registration;
    let Rute;//Container the rute of path URL
    let data = new Date(); data.toUTCString();

    //console.log(presentation.show('this is a MSG'));//Show the welcome
    presentation.show();//Show the welcome
    console.log(data);  

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
            //registration.write(Rute+'\t| '+data+'|\t'+xIp+'\n');//Conection Log
            registration.write(Rute+'\t| '+data+'\n');//Conection Log

            //Container:
            container = Router(manejador,Rute,reply);//Call function router in roterNodExpresserver.js
            
            //Validation URL: 
                
                //Validation URL welcome page:
                if(Rute == '/'){Rute="index.html";}
                if(Rute == '/index'){Rute="index.html";}
                if(Rute == '/index,html'){Rute="index.html";}

                //Validation URL information page:
                if(Rute =='information'){Rute ="information.html"}
                if(Rute =='information.html'){Rute="information.html"}
                
                //Validation URL services page:
                if(Rute =='/services'){Rute ="services.html"}
                if(Rute =='/services.html'){Rute="services.html"}

                //Validation URL contact page:
                if(Rute =='/contact'){Rute ="contact.html"}
                if(Rute =='/contact.html'){Rute="contact.html"}  

                        
                index = fs.readFileSync("www/"+Rute);//Read file from hard drive:
            reply.write(index);
            reply.end('');
            console.log('--------------------------------------------------'.rainbow);
        } serverExpress.createServer(startServerExpress).listen(listenPort);//Call the Node Express Server
    }exports.Init = Init//command of communocation: node-express-server.js <->initNodExpress.js