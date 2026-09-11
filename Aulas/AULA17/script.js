let amigo = {nome:'Bernardo',
    idade:24, genero:'Masculino', peso: 78, engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`)