let cpfString = "504.061.640";
let cpfclean = cpfString.replace(/\D+/g, "")
let cpfArray = Array.from(cpfclean);
let cpfUmAoNove = cpfArray.slice(0, 9);
let soma = [10, 9, 8, 7, 6, 5, 4, 3, 2];
let digitos9 = [];
let digitos10 = [];
let digitosSomado = 0;
let digitosSomado10 = 0;
let primeiroDigito;
let segundoDigito;

function calcula() {
    for (let i = 0; i < cpfUmAoNove.length; i++) {
        digitos9.push(cpfUmAoNove[i] * soma[i])
    }
    for (let i = 0; i < digitos9.length; i++){
        digitosSomado += digitos9[i];
    }
    primeiroDigito = 11 - (digitosSomado % 11);
    if (primeiroDigito > 9) {
        primeiroDigito = 0
    }

    let soma2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
    let cpfUmAoDez = cpfUmAoNove;
    cpfUmAoDez.push(primeiroDigito)
    for (let i = 0; i < cpfUmAoDez.length; i++){
        digitos10.push(cpfUmAoDez[i] * soma2[i])
    }
    
    for (let i = 0; i < digitos10.length; i++){
        digitosSomado10 += digitos10[i];
    }
    segundoDigito = 11 - (digitosSomado10 % 11);
    if (segundoDigito > 10) {
        segundoDigito = 0
    }
    return  console.log(primeiroDigito, segundoDigito)
   
}

console.log(calcula())


//console.log(cpfUmAoDez)

//FAZER CONTA DO SEGUNDO DIGITO