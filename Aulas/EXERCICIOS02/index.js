function enviar(){
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const idade = document.getElementById('idade').value;
    const res = document.getElementById('res');
    const genero = document.querySelector('input[name="genero"]:checked');
    const img = document.createElement('img');
    img.setAttribute('id', 'foto');

    if(nome && email && idade && genero) {
        res.innerHTML = `Olá, ${nome}! Seu email atual é ${email}, você tem ${idade} anos e se identifica com o genero ${genero.value}.`
    }else {
        res.innerHTML = "Por favor, preencha todos os campos.";
    }

    if (email.includes('@') && email.includes('.com')) {
        } else {
            res.innerHTML = "Por favor, insira um email válido.";
            return;
        }

    if (idade < 18 && genero.value === "masculino") {
        img.setAttribute('src', "icon.png");
        res.innerHTML = "Você ainda é muito jovem garoto, aproveite a vida!";
        res.appendChild(img);
    }else if (idade >= 18 && idade <= 55 && genero.value === "masculino") {
        img.setAttribute('src', "https://cdn-icons-png.flaticon.com/512/1077/1077013.png");
        res.innerHTML = "Aproveite sua vida adulta, garoto!";
        res.appendChild(img);
    }else if (idade > 55 && genero.value === "masculino") {
        res.innerHTML = "Você está na melhor idade, senhor!";
        img.src = "https://cdn-icons-png.flaticon.com/512/1077/1077014.png";
    }else if (idade < 18 && genero.value === "feminino") {
        res.innerHTML = "Você ainda é muito jovem garota, aproveite a vida!";
        img.src = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png";
    }else if (idade >= 18 && idade <= 55 && genero.value === "feminino") {
        res.innerHTML = "Aproveite sua vida adulta, garota!";
        img.src = "https://cdn-icons-png.flaticon.com/512/1077/1077013.png";
    }else if (idade > 55 && genero.value === "feminino") {
        res.innerHTML = "Você está na melhor idade, senhora!";
        img.src = "https://cdn-icons-png.flaticon.com/512/1077/1077014.png";
    }
}