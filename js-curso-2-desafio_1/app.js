let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do desafio";

function clicarBotao(){
    console.log("O botão foi clicado");
}

function clicarAlert(){
    alert("Eu amo JS!");
}

function clicarPrompt(){
    let mensagem = prompt("Insira um nome de uma cidade brasileira:");
    alert(`Estive em ${mensagem} e lembrei de você!`);
}


function clicarSoma(){
    let n1 = parseInt(prompt("Insira um número:"));
    let n2 = parseInt(prompt("Insira outro número:"));
    let soma = n1+n2;
    alert (`O resultado da soma é ${soma} `);
} 