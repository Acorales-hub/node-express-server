/*.::CORALESoftware::.
Name of the proyect: 𝙉𝙤𝙙𝙚 𝙀𝙭𝙥𝙧𝙚𝙨𝙨 𝙎𝙚𝙧𝙫𝙚𝙧
Name of the archive: requestsNodExpresserver*/

    //lock Code for functions
    //let now = new Date().getTime;
    //while(new Date().getTime < now + 2000)

//Var and Hoisting:
//let fs = require('fs');//File system
//let index;

//Funtions:
function xinit(xreply)
{
    console.log('* '+'Detection path'.cyan.underline+' in home page');
    //xreply.writeHead(codeBrowser,{"Content-Type":"text/html"});
    //xreply.write("<br><center><h1>Welcome to Node Express Server</h1><br>Powered by .::CORALESoftware::.</center>");
    //xreply.write('<br></br><p>This is Home Page and Node Express Server description</p>');
    //reply.write("<br><br>   "+Rute+" is a new connection, detected in: "+container)
    //reply.write("<br><br>   A new rute detected... "+Rute)
    //xreply.end('End of the connection');    
    return 'xinit';
}

function information(xreply)
{
    console.log('* '+'Detection path'.cyan.underline+' in information page');
    //xreply.writeHead(codeBrowser,{"Content-Type":"text/html"});
    //xreply.write("<br><center><h1>Welcome to Node Express Server</h1><br>Powered by .::CORALESoftware::.</center>");
    //xreply.write('<br></br><p>This is first Page.</p>');
    //xreply.end('End of the connection');  
    return 'information';
}

function services(xreply)
{
    console.log('* '+'Detection path'.cyan.underline+' in services page');
    //xreply.writeHead(codeBrowser,{"Content-Type":"text/html"});
    //xreply.write("<br><center><h1>Welcome to Node Express Server</h1><br>Powered by .::CORALESoftware::.</center>");
    //xreply.write('<br></br><p>This is Services Page.</p>');
    //xreply.end('End of the connection'); 
    return 'services';
}

function contact(xreply)
{
    console.log('-> Detection path:'.bold.cyan+' in contact page');
    //xreply.writeHead(codeBrowser,{"Content-Type":"text/html"});
    //xreply.write("<br><center><h1>Welcome to Node Express Server</h1><br>Powered by .::CORALESoftware::.</center>");
    //xreply.write('<br></br><p>This is second Page.</p>');
    //xreply.end(); 
    return 'contact';
}

function favicon(xreply)//Controller favicon error
{
    
    console.log('-> Controlled: '.bold.red+'favicon bug');
    console.warn('-> Warning: '.bold.yellow+'will be failure!');
    //xreply.writeHead(codeBrowser,{"Content-Type":"text/html"});
    //xreply.write("");
    //xreply.end("End of connection"); 
    return "";
}
//Add exports in a object
module.exports =
{
    xinit:xinit,
    information:information,
    services:services,
    contact:contact,
    favicon:favicon
};

//to export:
/*exports.xinit = xinit;
exports.information = information;
exports.services = services;
exports.contact = contact;
exports.favicon = favicon;*/