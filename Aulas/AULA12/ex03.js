let estado = "RS";

switch (estado) {
    case 'RS':
        console.log('Você é gaucho');
        break;
    case 'SC':
        console.log('Você é catarinense');
        break;
    case 'PR':
        console.log('Você é paranaense');
        break;
    default:
        console.log('Estado desconhecido');
}

let nota = 7;

if (nota >= 7){
    console.log('aprovado');
} else if (nota >= 6) {
    console.log('recuperação');
}else {
    console.log('reprovado');
}

let velocidade = 100;
let limite = 80;

console.log(`A velocidade do carro é ${velocidade} km/h`);

if (velocidade > limite * 1.2){
    console.log ('MULTA GRAVE!!! Você ultrapassou o limite de velocidade em mais de 20%');
}else if (velocidade > limite) {
    console.log('MULTA LEVE!!! Você ultrapassou o limite de velocidade');
}