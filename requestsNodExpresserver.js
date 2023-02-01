/*.::CORALESoftware::.
Name of the proyect: 𝙉𝙤𝙙𝙚 𝙀𝙭𝙥𝙧𝙚𝙨𝙨 𝙎𝙚𝙧𝙫𝙚𝙧
Name of the archive: requestsNodExpresserver*/

//Var and Hoisting:
//let fs = require('fs');//File system
//let index;

//Funtions:
function xinit(xreply)
{
    console.log('* Detection in the Home Page Node Express Server');
    //if(Rute == '/'){Rute = "index.html";}
    //index = fs.readFileSync("www/"+Rute+".html");//Read file from hard drive:
    //xreply.write(index);
    
    //lock Code for xinit
    //let now = new Date().getTime;
    //while(new Date().getTime < now + 2000)
   //xreply.writeHead(codeBrowser,{"Content-Type":"text/html"});
   //xreply.write("<br><center><h1>Welcome to Node Express Server</h1><br>Powered by .::CORALESoftware::.</center>");
    //xreply.write('<br></br><p>This is Home Page and Node Express Server description</p>');
    //reply.write("<br><br>   "+Rute+" is a new connection, detected in: "+container)
    //reply.write("<br><br>   A new rute detected... "+Rute)
    //xreply.end('End of connection');    
    return 'xinit';
}

function information(xreply)
{
    console.log('* Detection in the information Node Express Server');
    //xreply.writeHead(codeBrowser,{"Content-Type":"text/html"});
    //xreply.write("<br><center><h1>Welcome to Node Express Server</h1><br>Powered by .::CORALESoftware::.</center>");
    //xreply.write('<br></br><p>This is first Page.</p>');
    //xreply.end();  
    return 'information';
}

function services(xreply)
{
    console.log('* Detection in the services page Node Express Server');
    //xreply.writeHead(codeBrowser,{"Content-Type":"text/html"});
    //xreply.write("<br><center><h1>Welcome to Node Express Server</h1><br>Powered by .::CORALESoftware::.</center>");
    //xreply.write('<br></br><p>This is Services Page.</p>');
    //xreply.end(); 
    return 'services';
}

function contact(xreply)
{
    console.log('* Detection in the contact page Node Express Server');
    //xreply.writeHead(codeBrowser,{"Content-Type":"text/html"});
    //xreply.write("<br><center><h1>Welcome to Node Express Server</h1><br>Powered by .::CORALESoftware::.</center>");
    //xreply.write('<br></br><p>This is second Page.</p>');
    //xreply.end(); 
    return 'contact';
}

function favicon(xreply)//Controller favicon error
{
    console.log('* Controlled '+'favicon bug'.italic.red.underline);
    //xreply.writeHead(codeBrowser,{"Content-Type":"text/html"});
    //xreply.write("");
    //xreply.end("End of connection"); 
    return "";
}

//to export:
exports.xinit = xinit;
exports.information = information;
exports.services = services;
exports.contact = contact;
exports.favicon = favicon;