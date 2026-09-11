let num = [1, 7, 8, 2, 0, 9, 6, 3];
let encontrar = num.indexOf(2) //Encontrar o índice do número 2 no array, ou seja, a posição do número 2 no array.
console.log(encontrar)

let num2 = [1, 7, 8, 2, 0, 9, 6, 3];
num2.push(4) //Adiciona o número 4 no final do array.
num2.sort() //Ordena o array em ordem crescente.
let pos = num2.indexOf(8) //Encontrar o índice do número 4 no array, ou seja, a posição do número 4 no array. Em caso de não encontrar o número, retorna -1.
if (pos == -1) {
    console.log('O valor não foi encontrado!')
}else{
    console.log(`O valor ${num2[pos]} está na posição ${pos}`) // variavel pos recebe o valor do índice do número 8 no array, e o console.log imprime o valor do número 8 e a posição dele no array.
}

let num3 = [1, 3, 5, 7, 9];
for (let i = 0; i < num3.length; i++) {
    console.log(`A posição ${i} tem o valor ${num3[i]}`) //Imprime a posição e o valor do array num3.
}


