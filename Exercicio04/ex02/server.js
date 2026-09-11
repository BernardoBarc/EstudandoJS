function calcular() {
    let num = Number(document.getElementById('num').value)
    let res = document.getElementById('res')

    for (let n=1; n<=10; n++){
        res.innerHTML += `${num} x ${n} = ${num*n}<br>`
    }
}