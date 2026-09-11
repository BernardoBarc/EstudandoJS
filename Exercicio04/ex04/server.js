function calcular(){
    let n1 = document.getElementById('n1').value;
    let res = document.getElementById('res');

    if (n1.length == 0){
        res.innerHTML = "Digite um número para efetuar o calculo"
        //alert('[ERRO] Campo Inválido (Preencha todos os campos)')
    }else {
        let nn1 = Number(n1);
        res.innerHTML = `Tabuada do ${nn1} gerada com sucesso<br>`

        for(let i=1; i<=10; i++){
            res.innerHTML += ` ${nn1} x ${i} = ${nn1*i}<br>`;
        }
    }
}