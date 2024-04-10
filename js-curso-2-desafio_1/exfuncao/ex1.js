let peso = parseFloat(prompt("Indique o seu peso:"));
let altura = parseFloat(prompt("Indique sua altura:"));
let imc;

function calculoIMC (parPeso, parAltura){
    return parPeso/(parAltura*parAltura);
}
imc = calculoIMC(peso, altura);
alert (`O valor do se IMC é ${imc.toFixed(2)}`);