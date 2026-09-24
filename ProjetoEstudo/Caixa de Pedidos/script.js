let res = document.getElementById('res')
let quantidade = document.getElementById('quantidade')
let opcoes = document.getElementById ('opcoes')
let lista = document.getElementById('lista')


function produto(ped, preco){
    lista.innerHTML = ''
    let pedido = document.createElement('option')
    pedido.innerHTML = ped
    pedido.value = preco
    lista.appendChild(pedido)
    lista.selectedIndex = lista.options.length - 1
}

function adicionar(){
    let novaQuantidade = Number(quantidade.value)
    if (novaQuantidade >= 0){
        novaQuantidade = novaQuantidade + 1
        quantidade.value = novaQuantidade
    }      
}

function diminuir(){
    let novaQuantidade = Number(quantidade.value)
    if (novaQuantidade > 1){
        novaQuantidade = novaQuantidade - 1
        quantidade.value = novaQuantidade
    }else{
        alert ('Quantidade indisponivel para pedido')
    }    
}

function limpar(){
    let lista = document.getElementById('lista')
    lista.innerHTML = ''
    quantidade.value = ''
    res.innerHTML = ''
}

function finalizar(){
    let nomeProduto = lista.options[lista.selectedIndex].text
    let preco = Number(lista.value)
    let newPreco = preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    let qtd = Number(quantidade.value)
    let tot = preco * qtd
    let totalFomatado = Number(tot)
    let newTotal = totalFomatado.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    if(quantidade.value.length == 0 || lista.length == 0){
        alert ('Impossivel Finalizar, nenhum campo pode ficar vazio')
    }else{
        
    res.innerHTML = `<br>Você escolheu: ${nomeProduto}<br> Preço: ${newPreco} 
    <br> Quantidade: ${qtd}<br>Total: ${newTotal}`
    }
}
    