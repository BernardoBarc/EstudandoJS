function gerarTabuada(){
    let num = Number(document.getElementById('numero').value)
    let resultado = document.getElementById('resultado')

    resultado.innerHTML = `<br>Tabuada do ${num} gerada com sucesso!<br><br>`

    //resultado.innerHTML = ''
    

    for (let c = 1; c <= 10; c++){
        resultado.innerHTML += `<br>${num} x ${c} = ${num*c}<br>`
    }
}




