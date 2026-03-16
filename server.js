const express = require("express");
const app = express();
const PORTA = 2000;

app.get("/mensagem", (req, res)=>{

    res.send("servidor funcionando!");
});

app.get("/aluno", (req, res) => {

    const nome1 = "Kévin";
    const turma1 = "2DS";
    const curso1 = "Desenvolvimento de Sistemas";

    const nome2 = "Angelo";
    const turma2 = "2DS";
    const curso2 = "Desenvolvimento de Sistemas";

    res.send(
        "Nome: " + nome1 + "<br>"+
        "Turma: " + turma1 + "<br>"+
        "Curso: " + curso1 + "<br>" +

        "Nome: " + nome2 + "<br>"+
        "Turma: " + turma2 + "<br>"+
        "Curso: " + curso2
    );
});

app.listen(PORTA,() => {
    console.log("Servidor rodando na porta " + PORTA);
});