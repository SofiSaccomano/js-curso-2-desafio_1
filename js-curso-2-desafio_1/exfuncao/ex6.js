let raio = parseFloat(prompt("Digite o raio do círculo:"));
let area;
let perimetro;
function perimetroCirculo (xRaio){
    return (2*3.14*xRaio);
}
perimetro = perimetroCirculo(raio);

function areaCirculo (xRaio){
    return 3.14*(xRaio**2);
}
area = areaCirculo(raio);

alert(`A área do círculo é ${area.toFixed(2)} e o perímetro é ${perimetro.toFixed(2)}`);