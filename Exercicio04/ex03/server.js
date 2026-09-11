function sequencia(){
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    let num = document.getElementById('num').value;
    let res = document.getElementById('res');

    if (n1.length == 0 || n2.length == 0 || num.length == 0){
        res.innerHTML = "[ERRO] COMPLETE TODOS OS CAMPOS"
    }else {
        res.innerHTML = "A ordem é: "
        let nn1 = Number(n1)
        let nn2 = Number(n2)
        let numm = Number(num)

        if (nn1 < nn2) {
            for (let i=nn1; i<=nn2; i+=numm){
                res.innerHTML += ` ${i}`
            }
        } else {
            for(let i=nn1; i>=nn2; i-=numm){
                res.innerHTML += ` ${i}`
            }
        }
    }
}

   