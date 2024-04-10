let numero = parseInt(prompt("Insira um número:"));
let multiplicacao = gerarMultipicacao();

alert(`O resultado da multiplicação é ${multiplicacao}`);

function gerarMultipicacao (multiplicacao){
    return numero*numero
}