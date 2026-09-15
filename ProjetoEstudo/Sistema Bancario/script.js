let nome = document.getElementById('nome')
let saldo = document.getElementById('saldo')
let operacao = document.getElementById('operacao')
let valop = document.getElementById('valop')
let res = document.getElementById('res')

function isNome(n){
    if (n.length == 0){
        return false
    }else{
        return true
    }
}

function isSaldo(s){
    if (s.length == 0 || s < 0){
        return false
    }else{
        return true
    }
}

function isValorOp(vp){
    if (vp <= 0 || vp.length == 0){
        return false
    }else{
        return true
    }
}

function verifyOp(v, s){
    if (v > s){
        return false
    }else{
        return true
    }
}

function realizarOp(){
    res.innerHTML = ''
    if (isNome(nome.value) == false || isSaldo(saldo.value) == false){
        res.innerHTML = `<br>Por favor verifique se seu nome ou seu saldo, foram digitados corretamente e tente novamente.`
    }else{
        if (isValorOp(valop.value) == false){
            res.innerHTML = `<br>O valor da operação está inválido, favor verificar e tentar novamente!`
        }else{
            let novoSaldo = Number(saldo.value)
            let deposito = Number(novoSaldo) + Number(valop.value)
            let saque = Number(novoSaldo) - Number(valop.value)
            
            if (operacao.value == 'deposito'){
                novoSaldo = deposito
            }else if(operacao.value == 'saque'){ 
                if (verifyOp(Number(valop.value), Number(saldo.value)) == false){
                    return res.innerHTML = `Impossivel realizar o saque, valor acima do valor em conta.`
                }else{
                    novoSaldo = saque
                }
            }else{
                return res.innerHTML = 'Operação indisponivel'
            }
            res.innerHTML += `<br>Cliente: ${nome.value} <br> Saldo anterior: ${saldo.value}
            <br> Operação: ${operacao.value} <br> Valor da operação: ${valop.value} <br> Operação realizada com sucesso!
            <br> Novo Saldo: ${novoSaldo}<br>`

            if(Number(novoSaldo) <= 0){
                res.innerHTML += `Conta sem saldo`
            }else if(Number(novoSaldo) <= 100){
                res.innerHTML += `Saldo Baixo`
            }else if(Number(novoSaldo) <=1000){
                res.innerHTML += `Saldo Normal`
            }else{
                res.innerHTML += `Saldo Alto`
            }

        }
    }
}