let produto = document.getElementById('produto')
let valor = document.getElementById('valor')
let quantidade = document.getElementById('quantidade')
let res = document.getElementById('res')

function isProduto(p){
    if (p.length == 0 ){
        return false
    }else {
        return true
    }
}

function isValor(v){
    if (v.length == 0){
        return false
    }

    if (v > 0 ){
        return true
    }else {
        return false
    }
}

function isQuantidade(q){
    if (q > 0){
        return true
    }else{
        return false
    }
}

function isDesconto(t){
    if (t < 100){
        return 0
    }else if (t >= 500){
        return 10
    }else{
        return 5
    }
}

function finalizar(){
    if (isProduto(produto.value) == false || isValor(valor.value) == false || isQuantidade(quantidade.value) == false){
        alert('Preencha todos os campos')
    }else{
        let p = produto.value
        let v = Number(valor.value)
        let q = Number(quantidade.value)
        let tot = q * v

        res.innerHTML = ' '

        res.innerHTML += `Você escolheu ${q} unidade de ${p} seu valor é de R$${v}<br>Subtotal R$${tot}<br>`

        if(isDesconto(tot) == 0){
            res.innerHTML += `Você não possui desconto` 
        }else{
            if(isDesconto(tot) == 10){
                res.innerHTML += `Você tem 10% de desconto`
            }else{
                res.innerHTML += `Você tem 5% de desconto`
            }
        }
        
        
        /*if abaixo não seria necesário, mas para ficar mais separado
        e melhor compreendido por mim, fiz dessa forma*/ 
        if (isDesconto(tot) == 10){
            res.innerHTML += `<br>totalizando em R$${tot*0.90}`
        }else if(isDesconto(tot) == 5){
            res.innerHTML += `<br>totalizando em R$${tot*0.95}`
        }else{
            res.innerHTML += `<br> totalizando em R$${tot}`
        }
    }
    
}