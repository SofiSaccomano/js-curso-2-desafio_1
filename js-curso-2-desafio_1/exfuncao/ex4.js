let altura = parseFloat(prompt("Informe a altura:"));
let largura = parseFloat(prompt("Informe a largura"));
let perimetro;
let area;
 function calculoArea (parArea){
    return altura*largura;
 }
 area = calculoArea(area);
 
 function calculoPerimetro(parPerimetro){
    return (altura*2)+(largura*2);
 }
 perimetro = calculoPerimetro(perimetro);

 alert (`O tamanho da área é ${area}m`);
 alert (`O tamanho do perímetro é ${perimetro}m`);
