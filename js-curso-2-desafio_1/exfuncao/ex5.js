let numero = parseInt(prompt("Informe um número:"));

function calculoTabuada(parNumero){
    for (let i=1; i<=10; i++){
        let resultado = parNumero*i;
        console.log(`${parNumero} X ${i} = ${resultado}`);
    }
}
calculoTabuada(numero);