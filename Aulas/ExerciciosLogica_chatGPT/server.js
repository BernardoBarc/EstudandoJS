//Mostrar somente os números pares na sequencia entre os números digitados pelo usuário
function verPares() {
    let n1 = document.getElementById('n1').value
    let n2 = document.getElementById('n2').value;
    let res = document.getElementById('res');

    if (n1.length == 0 || n2.length == 0) {
        res.innerHTML = 'preencha todos os campos';
    }else{
        let nn1 = Number(n1);
        let nn2 = Number(n2);
        res.innerHTML = '';
        for (let i = nn1; i <= nn2; i++) {
            if (i % 2 == 0) {
                res.innerHTML += `${i} é par <br>`;
            }
        }
    } 
}

//Somar somente os números impares na sequencia entre os números digitados pelo usuário
function somarImpares() {
    let n1 = document.getElementById('nn1').value
    let n2 = document.getElementById('nn2').value;
    let res = document.getElementById('res2');

    if (n1.length == 0 || n2.length == 0) {
        res.innerHTML = 'preencha todos os campos';
    }else{
        let nn1 = Number(n1);
        let nn2 = Number(n2);
        let soma = 0;
        if(nn1 > nn2){
            for (let i = nn1; i >= nn2; i--){
                if (i % 2 != 0) {
                    soma += i;
                }
            }
        }else{
            for (let i = nn1; i <= nn2; i++){
                if (i % 2 != 0) {
                    soma += i;
                }
            }
        }
        res.innerHTML = `A soma dos números impares é: ${soma}`;
    }
}
