const express = require("express"); // Importando o express
const app = express(); // Inicializando o express

app.get("/",function(req,res){
    res.send("<h1>Bem vindo ao meu primeiro exemplo de rotas</h1>")
});

app.get("/blog",function(req,res){
    res.send("<h2>Esse é um teste da página de blog</h2>")
});

app.get("/blog/video",function(req,res){
    res.send("<h3>Aqui seria a página de video do blog-Testando a instalação do nodemoon</h3>")
})

app.listen(4000, function(erro){
    if (erro){
        console.log("O servidor não está funcionando");
    } else {
        console.log("O servidor está funcionando");
    }
})