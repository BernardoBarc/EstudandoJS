function load() {
    let div = document.querySelectorAll('div');
    let hora = new Date().getHours();
    let minuto = new Date().getMinutes().toString().padStart(2, '0');
    let segundo = new Date().getSeconds().toString().padStart(2, '0');
    let horario = `${hora}:${minuto}:${segundo}`;
    let saudacao = '';
    let atualzar = setInterval(load);
   
    if (hora >= 0 && hora < 12) {
        document.body.style.backgroundColor = '#ffb7b7';
        saudacao = 'Bom dia!';
    } else if (hora >= 12 && hora < 18) {
        document.body.style.backgroundColor = '#ff6f2dff';
        saudacao = 'Boa tarde!';
    } else {
        document.body.style.backgroundColor = '#3a3939ff';
        saudacao = 'Boa noite!';
    }
    div.forEach(d => {
        d.innerHTML = `Agora são ${horario} então ${saudacao}`;
    });
}