let valor = document.getElementById('valor')
let res = document.getElementById('res')
let valores = [100, 50, 20, 10]

function isNotas(n){
    if(n == 0 || n.length == 0)
        return false
}



function sacar(){
    res.innerHTML = ''
    let notas = [0,0,0,0]
    if (isNotas(valor.value) == false || valor.value < 10){
        alert('Digite o valor corretamente')

    }else {
        let novoValor = Number(valor.value)
        for (let i = 0; i < valores.length; i++ ){
            while(novoValor >= valores[i]){
                novoValor = novoValor - valores[i]
                notas[i]++
            }
        }

        if(novoValor != 0){
            res.innerHTML += `Saque não pode ser completado`
        }else{
            res.innerHTML += `Saque realizado!!! Foram emitidas:<br>
            ${notas[0]} notas de R$100,00<br> ${notas[1]} notas de R$50,00<br>
            ${notas[2]} notas de R$20,00<br> ${notas[3]} notas de R$10,00<br>`
        }

        
    }
}