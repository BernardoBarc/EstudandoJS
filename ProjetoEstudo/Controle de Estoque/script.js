let produto = document.getElementById('produto')
let retirada = document.getElementById('retirada')
let estoque = document.getElementById('estoque')
let res = document.getElementById('res')

function isProduto(p){
    if(p.length == 0){
        return false
    }else{
        return true
    }
}

function isEstoque(e){
    if(e.length == 0 || Number(e) <= 0){
        return false
    }else{
        return true
    }
}

function isRetirada(r, e){
    if(Number(r) <= 0 || Number(r) > Number(e)){
        return false
    }else{
        return true
    }
}


function retirar(){
    res.innerHTML = ''
    if (isProduto(produto.value) == false){
        res.innerHTML = 'Preencha o campo de Produto'
    }else{
        if(isEstoque(estoque.value) == false){
            res.innerHTML = 'Quantidade em estoque não pode estar vazia nem ser igual a 0'
        }else{
            if(isRetirada(retirada.value, estoque.value) == false){
                res.innerHTML = 'Não é possível realizar a retirada.<br>Quantidade solicitada maior que o estoque disponível.'
            }else{
                let novoEstoque = Number(estoque.value) - Number(retirada.value)
                res.innerHTML = `Produto: ${produto.value}<br> Estoque antes da retirada: ${estoque.value}<br>
                Quantidade retirada ${retirada.value}<br>
                Estoque restante: ${novoEstoque}`
            }
        }

    }
}