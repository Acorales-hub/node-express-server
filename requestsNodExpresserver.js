/*.::CORALESoftware::.
Name of the proyect: 𝙉𝙤𝙙𝙚 𝙀𝙭𝙥𝙧𝙚𝙨𝙨 𝙎𝙚𝙧𝙫𝙚𝙧
Name of the archive: requestsNodExpresserver
Made by: Asdrúbal José Corales Pérez
Description: This is a project made in Node.Js, for my briefcase
License: MIT.
Contac me in: asdrubalcorales92@gmail.com
My phone number is: +58 412 4811678 */

//Var:

//Funtions:
function xinit()
{
    console.log('* Ha entrado en la página de inicio');
    //lock Code for xinit
    let now = new Date().getTime;
    while(new Date().getTime < now + 2000)
    return 'xinit';
}

function pagina1()
{
    console.log('* Ha entrado en la página 01');
    return 'pagina1';
}

function pagina2()
{
    console.log('* Ha entrado en la página 02');
    return 'pagina2';
}

function favicon()//Controller favicon error
{
    console.log('* Controlled favicon bug'.italic.red.underline);
    return "";
}

exports.xinit = xinit;
exports.pagina1 = pagina1;
exports.pagina2 = pagina2;
exports.favicon = favicon;


/*NOTE: Como Node Js esta pensado para soportar millones de peticiones de manera simultane sin que este genere un 
gran costo en hardware, a diferencia de otros entornos, no inicia un hilo para cada una de las peticiones por el gasto
de memoría que implica, si no, que todo se comparte dentro un mismo hilo, pero el incoveniente de que todo se comparta
dentro de un mismo hilo, es que a veces podemos cometer errores en la programación, por ello se necesita realizar código
bloquedor de ejecución y código desbloquedor de ejecución.

Código Bloqueador: retiene por cierta cantidad de tiempo la ejeción de una instrucción
Código Desboqueador:

por tanto debemos hacer que el servidor sea no bloqueante.
*/