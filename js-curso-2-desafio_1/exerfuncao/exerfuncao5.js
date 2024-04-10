let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));

function maiorNumero(num1, num2) {
    if (num1 > num2){
    alert (`O maior número entre os digitados é ${num1}`);
        }
    else {
    alert (`O maior número é ${num2}`)
        }
}
maiorNumero();