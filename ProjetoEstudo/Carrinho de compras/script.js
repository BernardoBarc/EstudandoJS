let produto = document.getElementById('produto')
let valor = document.getElementById('valor')
let quantidade = document.getElementById('quantidade')
let pagamento = document.getElementById('pagamento')
let res = document.getElementById('res')

function isProduto(p){
    if (p.length == 0){
        return false
    }else{
        return true
    }
}

function isValor(v){
    if(v.length == 0 || Number(v) <= 0){
        return false
    }else{
        return true
    }
}

function isQuantidade(q){
    if (q.length == 0 || Number(q) <= 0){
        return false
    }else{
        return true
    }
}



function finalizar(){
    res.innerHTML = ''
    if (isProduto(produto.value) == false || isValor(valor.value) == false || isQuantidade(quantidade.value) == false){
        res.innerHTML = `Impossivel finalizar!!<br>Revise todos os campos, se estão preenchidos corretamente!!`
    }else{
        let total = Number(quantidade.value) * Number(valor.value)
        let totalFormatado = Number(valor.value)
        let newTotal = total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        let newValor = totalFormatado.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})


        res.innerHTML += `Produto: ${produto.value}<br> Quantidade: ${quantidade.value}<br> Valor: ${newValor}<br> Subtotal: ${newTotal}<br>`

        if(pagamento.value == 'pix'){
            res.innerHTML += `Desconto de 5%<br> Total com desconto: ${total*0.95}`
        }else if (pagamento.value == 'dinheiro'){
            res.innerHTML += `Desconto de 10%<br> Total com desconto: ${total*0.90}`
        }else{
            res.innerHTML += `Desconto de 0%<br> Total: ${total}`
        }
        
    }
}