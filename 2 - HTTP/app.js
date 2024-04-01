var http = require("http"); //Cria uma variavel

http.createServer(function(requisicao,resposta){//Cria um servidor(cria uma função(traz uma requisição e uma resposta))
    resposta.end("<h1>Bem vindo ao meu site!</h1><h6>de Aliston Santos</h6>")//Traz uma resposta de retorno para o web
}).listen(8181);//listen é a porta em que estámeu localhost
console.log("Meu servidor está rodando!");//Aqui eu vejo no console que meu servidor está funcionando