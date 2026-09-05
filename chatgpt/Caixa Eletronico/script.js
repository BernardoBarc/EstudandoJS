let valor = document.getElementById('valor')
let res = document.getElementById('res')
let valores = [100, 50, 20, 10]

function isNotas(n){
    if(n == 0 || n.length == 0)
        return false
}



function sacar(){
    res.innerHTML = ''
    if (isNotas(valor.value) == false || valor.value < 10){
        alert('Digite o valor corretamente')

    }else {
        let novoValor = Number(valor.value)
        let notas100 = 0
        let notas50 = 0
        let notas20 = 0
        let notas10 = 0

        while (novoValor >= 100){
            novoValor = novoValor - 100
            notas100++
        }
        while(novoValor >= 50){
            novoValor = novoValor - 50
            notas50++
        }
        while(novoValor >= 20){
            novoValor = novoValor - 20
            notas20++
        }
        while(novoValor >= 10){
            novoValor = novoValor - 10
            notas10++
        }
        if(novoValor != 0){
            res.innerHTML += `Saque não pode ser completado`
        }else{
            res.innerHTML += `Saque realizado!!! Foram emitidas:<br> 
        ${notas100} notas de R$100,00,<br> ${notas50} notas de R$50,00,<br>
        ${notas20} notas de R$20,00<br> ${notas10} de R$10,00<br>`
        }

        
    }
}