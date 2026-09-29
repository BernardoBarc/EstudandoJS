let nome = document.getElementById('nome')
let diaria = document.getElementById('diaria')
let quartos = document.getElementById('quartos')
let res = document.getElementById('res')

function nomeValido(n){
    if (n.length == 0){
        return false
    }else{
        return true
    }
}

function diariaValida(d){
    if(d.length == 0 || d <= 0){
        return false
    }else{
        return true
    }
}


function reservar(){
    res.innerHTML = ''
    if (nomeValido(nome.value) == false || diariaValida(diaria.value) == false){
        res.innerHTML = `Preencha todos os campos corretamente`
    }else{
        res.innerHTML += `Reserva Realizada!<br> Nome: ${nome.value}<br> Diarias Escolhidas: ${diaria.value}<br>
        Quarto Escolhido: ${quartos.value}<br>` 
        
        if(quartos.value == 'simples'){
            let preco = 120
            let newPreco = preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
            let tot = preco * Number(diaria.value)
            let newTotal = tot.toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
            res.innerHTML += `Preço da Diaria: ${newPreco}<br> Valor Total: ${newTotal}`
        }else if (quartos.value == 'duplo'){
            let preco = 180
            let newPreco = preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
            let tot = preco * Number(diaria.value)
            let newTotal = tot.toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
            res.innerHTML += `Preço da Diaria: ${newPreco}<br> Valor Total: ${newTotal}`
        }else if(quartos.value == 'familia'){
            let preco = 250
            let newPreco = preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
            let tot = preco * Number(diaria.value)
            let newTotal = tot.toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
            res.innerHTML += `Preço da Diaria: ${newPreco}<br> Valor Total: ${newTotal}`
        }else{
            let preco = 350
            let newPreco = preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
            let tot = preco * Number(diaria.value)
            let newTotal = tot.toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
            res.innerHTML += `Preço da Diaria: ${newPreco}<br> Valor Total: ${newTotal}`
        }
    }
    
}