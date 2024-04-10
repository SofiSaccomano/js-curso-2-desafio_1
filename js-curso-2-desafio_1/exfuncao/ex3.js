let dolar = parseFloat(prompt("Informe um valor em dólares:"));
let real = transformarReal(parDolar);
let resultado;
function transformarReal (parDolar){
    return parDolar*4.8;
}
resultado = transformarReal(dolar);
alert(`A transferência de $${dolar} para reais é igual a R$${real.toFixed(2)}`);
