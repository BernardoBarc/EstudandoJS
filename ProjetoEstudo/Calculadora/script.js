let operacao = '';
let numero1 = '';
let numero2 = '';

function adnumero(num) {
    let res = document.getElementById('res');
    res.innerHTML += num;
}

function adOperacao(op) {
    operacao = op;
    numero1 = res.innerHTML;
    res.innerHTML = '';
}

function calcular() {
    numero2 = res.innerHTML;
    let resultado;

    switch (operacao) {
        case '+':
            resultado = parseFloat(numero1) + parseFloat(numero2);
            break;
        case '-':
            resultado = parseFloat(numero1) - parseFloat(numero2);
            break;
        case '*':
            resultado = parseFloat(numero1) * parseFloat(numero2);
            break;
        case '/':
            resultado = parseFloat(numero1) / parseFloat(numero2);
            break;
        default:
            resultado = 'Erro';
    }
    res.innerHTML = resultado;
}

function limpar() {
    let res = document.getElementById('res');
    res.innerHTML = '';
    operacao = '';
    numero1 = '';
    numero2 = '';
}
    