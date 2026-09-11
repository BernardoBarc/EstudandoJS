function verificar() {
    let date = new Date()
    let anoAtual = date.getFullYear()
    let ano = document.getElementById('ano')
    let res = document.getElementById('res')
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (ano.length == 0 || ano > anoAtual) {
        alert('Verifique os dados e tente novamente!')
    } else {
        let genero = document.getElementsByName('genero')
        let idade = anoAtual - Number(ano.value)
        if (idade >= 0 && idade < 10) {
            // Criança
            if (genero[0].checked) {
                res.innerHTML = `Detectamos um menino de ${idade} anos.`
            } else if (genero[1].checked) {
                res.innerHTML = `Detectamos uma menina de ${idade} anos.`
            }
        } else if (idade < 21) {
            // Jovem
            if (genero[0].checked) {
                res.innerHTML = `Detectamos um jovem de ${idade} anos.`
            } else if (genero[1].checked) {
                res.innerHTML = `Detectamos uma jovem de ${idade} anos.`
            }
        } else if (idade < 65) {
            // Adulto
            if (genero[0].checked) {
                res.innerHTML = `Detectamos um homem de ${idade} anos.`
            } else if (genero[1].checked) {
                res.innerHTML = `Detectamos uma mulher de ${idade} anos.`
            }
        }else if (idade >= 65) {
            // Idoso
            if (genero[0].checked) {
                res.innerHTML = `Detectamos um idoso de ${idade} anos.`
            } else if (genero[1].checked) {
                res.innerHTML = `Detectamos uma idosa de ${idade} anos.`
            }
        }
    }
}