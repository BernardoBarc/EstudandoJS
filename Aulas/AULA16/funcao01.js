// Funções com parametros

function par_impar(n){
    if (n%2==0){
        return 'Par'
    }else{
        return 'Impar'
    }

}

let num = 10
let res = par_impar(num) // 10 Está substituindo o n na função, n é o parametro, 10 é o valor que o parametro vai receber

console.log(`Número escolhido como parametro é ${num}`)
console.log(`${num} é ${res}`)

/* Nessa função a ideia é mostrar se o número que vai ser colocado como parametro é par ou impar
nesse caso o número 10 é par, então no console vai retornar par*/