// ============================================
// EXERCÍCIOS DE LÓGICA DE PROGRAMAÇÃO - PRATICAR
// ============================================
// Responda os exercícios abaixo!
// ============================================

// =================== NÍVEL FÁCIL ===================

// --- EXERCÍCIO 1 ---
// Crie uma função que receba um nome e retorne uma saudação personalizada
// Exemplo: saudacao("Maria") → "Olá, Maria! Bem-vindo(a)!"
function saudacao() {
    let nome = document.getElementById("nome").value;
    let saudacao = document.getElementById("res");
    saudacao.innerHTML = `Olá, ${nome}! Bem-vindo(a)!`;
}

// --- EXERCÍCIO 2 ---
// Crie uma função que calcule a média de 3 notas
// Exemplo: media(7, 8, 9) → 8
function media() {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let n3 = Number(document.getElementById("n3").value);
    let media = document.getElementById("res2");
    media.innerHTML = `A média é: ${(n1 + n2 + n3) / 3}`;
}

// --- EXERCÍCIO 3 ---
// Crie uma função que verifique se um número é positivo, negativo ou zero
// Exemplo: verificarNumero(5) → "Positivo"
function verificarNumero() {
    let num = Number(document.getElementById("num").value);
    let res3 = document.getElementById("res3");
    if (num > 0) {
        res3.innerHTML = `${num} é Positivo`;
    } else if (num < 0) {
        res3.innerHTML = `${num} é Negativo`;
    } else {
        res3.innerHTML = "Zero";
    }
}

// --- EXERCÍCIO 4 ---
// Crie uma função que conte quantos caracteres tem uma palavra (sem espaços)
// Exemplo: contarCaracteres("java script") → 9
function contarCaracteres() {
    let palavra = document.getElementById("txt").value;
    let res4 = document.getElementById("res4");
    res4.innerHTML = `A palavra <strong>${palavra}</strong> tem ${palavra.length} caracteres (sem espaços)`;
}

// --- EXERCÍCIO 5 ---
// Crie uma função que transforme Celsius em Fahrenheit
// Fórmula: F = (C × 9/5) + 32
// Exemplo: celsiusParaFahrenheit(0) → 32
function celsiusParaFahrenheit() {
    let celsius = Number(document.getElementById("num1").value);
    let res5 = document.getElementById("res5");
    let fahrenheit = (celsius * 9 / 5) + 32;
    res5.innerHTML = `${celsius}°C é igual a ${fahrenheit}°F`;
}

// =================== NÍVEL MÉDIO ===================

// --- EXERCÍCIO 6 ---
// Crie uma função que encontre o maior elemento de um array
// Exemplo: maiorElemento([3, 7, 2, 9, 1]) → 9
function maiorElemento() {
    let array = document.getElementById("array").value.split(",").map(Number);
    let res6 = document.getElementById("res6");
    let maior = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }
    res6.innerHTML = `O maior elemento do array é: ${maior}`;
}

// --- EXERCÍCIO 7 ---
// Crie uma função que some todos os números de um array
// Exemplo: somarArray([1, 2, 3, 4, 5]) → 15
function somarArray() {
    let soma = document.getElementById("array1").value.split(",").map(Number);
    let res7 = document.getElementById("res7");
    let total = 0;
    if(soma == 0) {
        res7.innerHTML = "Digite pelo menos um número, ou dois número separados por virgula"
    }else{
        for (let i = 0; i < soma.length; i++) {
        total += soma[i];
    }
    res7.innerHTML = `A soma dos números do array é: ${total}`;
    }
    
}

// --- EXERCÍCIO 8 ---
// Crie uma função que inverta um array
// Exemplo: inverterArray([1, 2, 3]) → [3, 2, 1]
function inverterArray(array) {
    // SEU CÓDIGO AQUI
}

// --- EXERCÍCIO 9 ---
// Crie uma função que filtre apenas números pares de um array
// Exemplo: filtrarPares([1, 2, 3, 4, 5, 6]) → [2, 4, 6]
function filtrarPares(array) {
    // SEU CÓDIGO AQUI
}

// --- EXERCÍCIO 10 ---
// Crie uma função que conte quantas vezes uma letra aparece em uma frase
// Exemplo: contarLetra("banana", "a") → 3
function contarLetra(frase, letra) {
    // SEU CÓDIGO AQUI
}

// =================== NÍVEL DIFÍCIL ===================

// --- EXERCÍCIO 11 ---
// Crie uma função que receba um array de nomes e retorne o primeiro nome em ordem alfabética
// Dica: use loop e comparação!
// Exemplo: primeiroNomeAlfabetico(["Carlos", "Ana", "Bruno"]) → "Ana"
function primeiroNomeAlfabetico(nomes) {
    // SEU CÓDIGO AQUI
}

// --- EXERCÍCIO 12 ---
// Crie uma função que verifique se dois arrays são iguais (mesmos elementos, mesma ordem)
// Exemplo: saoIguais([1, 2, 3], [1, 2, 3]) → true
function saoIguais(array1, array2) {
    // SEU CÓDIGO AQUI
}

// --- EXERCÍCIO 13 ---
// Crie uma função que conte quantos números primos existem em um array
// Dica: reutilize a lógica de número primo!
// Exemplo: contarPrimos([1, 2, 3, 4, 5, 6, 7]) → 4
function contarPrimos(array) {
    // SEU CÓDIGO AQUI
}

// --- EXERCÍCIO 14 ---
// Crie uma função que faça a interseção de dois arrays (elementos comuns)
// Exemplo: intersecao([1, 2, 3, 4], [3, 4, 5, 6]) → [3, 4]
function intersecao(array1, array2) {
    // SEU CÓDIGO AQUI
}

// --- EXERCÍCIO 15 ---
// Crie uma função que retorne os dígitos de um número como array
// Exemplo: digitos(1234) → [1, 2, 3, 4]
function digitos(numero) {
    // SEU CÓDIGO AQUI
}

// ============================================
// TESTES (descomente para testar no console)
// ============================================

/*
console.log("=== TESTES NÍVEL FÁCIL ===");
console.log("1. Saudação:", saudacao("Maria"));
console.log("2. Média:", media(7, 8, 9));
console.log("3. Verificar Número:", verificarNumero(-5));
console.log("4. Contar Caracteres:", contarCaracteres("javascript"));
console.log("5. Fahrenheit:", celsiusParaFahrenheit(100));

console.log("\n=== TESTES NÍVEL MÉDIO ===");
console.log("6. Maior Elemento:", maiorElemento([3, 7, 2, 9, 1]));
console.log("7. Somar Array:", somarArray([1, 2, 3, 4, 5]));
console.log("8. Inverter Array:", inverterArray([1, 2, 3]));
console.log("9. Filtrar Pares:", filtrarPares([1, 2, 3, 4, 5, 6]));
console.log("10. Contar Letra:", contarLetra("banana", "a"));

console.log("\n=== TESTES NÍVEL DIFÍCIL ===");
console.log("11. Primeiro Nome:", primeiroNomeAlfabetico(["Carlos", "Ana", "Bruno"]));
console.log("12. São Iguais:", saoIguais([1, 2, 3], [1, 2, 3]));
console.log("13. Contar Primos:", contarPrimos([1, 2, 3, 4, 5, 6, 7]));
console.log("14. Interseção:", intersecao([1, 2, 3, 4], [3, 4, 5, 6]));
console.log("15. Dígitos:", digitos(1234));
*/
