const express = require("express"); // Importando o express
const app = express(); // Inicializando o express

app.listen(4000, function(erro){
    if (erro){
        console.log("O servidor não está funcionando");
    } else {
        console.log("O servidor está funcionando");
    }
})