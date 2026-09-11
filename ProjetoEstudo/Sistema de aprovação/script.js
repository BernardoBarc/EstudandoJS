let nota = document.getElementById('nota')
let res = document.getElementById('res')

function isValido(n){
    if (n.length == 0){
        return false
    }
    
    if (Number(n) >= 0 && Number(n) <= 10){
        return true
    }else{
        return false
    }
}

function isAprovado(n){
    if (Number(n) >= 7 ){
        res.innerHTML = `Aluno aprovado, nota ${n}`
    } else if (Number(n) >= 5) {
        res.innerHTML = `Aluno de recuperação, nota ${n}`
    } else {
        res.innerHTML = `Aluno reprovado, nota ${n}`
    }
}

function calcular(){
    if (isValido(nota.value) == false ) { 
        alert('Preencha o campo corretamente')
    }else{
        isAprovado(nota.value)
    }
}