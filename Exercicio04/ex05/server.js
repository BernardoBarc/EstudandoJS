/*function calcular(){
    let num = document.getElementById('num').value
    let res = document.getElementById('res')

    if(num.length == 0){
        alert('[ERRO] Preencha todos os campos')
    }else{
        let n1 = Number(num)
        let c = 1
        res.innerText = ''

        while (c <=10) {
            res.innerHTML += `${n1} x ${c} = ${n1*c} <br>`
            c++
        }
    }
}*/

/*function calcular() {
    let num = document.getElementById('num')
    let res = document.getElementById('res')

    if(num.value.length == 0){
        res.innerHTML = "[ERRO] Preencha todos os campos"
    }else {
        let n1 = Number(num.value)
        let c = 1
        res.innerHTML = `Tabuada do ${n1} Gerada com sucesso<br>`
        do {
            res.innerHTML += ` ${n1} x ${c} = ${n1*c}<br>`
            c++
        } while (c <=10 );
    }
}*/

function calcular() {
    let num = document.getElementById('num')
    let res = document.getElementById('res')

    if(num.value.length == 0){
        res.innerHTML = "[ERRO] Por favor, preencha todos os campos"
    }else{
        let n1 = Number(num.value)
        res.innerHTML = ` Tabuada do ${n1} gerada com sucesso<br> `
        for (let i = 1; i <= 10; i++) {      
            res.innerHTML += ` ${n1} x ${i} = ${n1*i}<br>`
        }
    }
}