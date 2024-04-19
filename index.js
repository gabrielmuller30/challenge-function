function calculadora (vitoria, derrota){
    let saldo = vitoria - derrota

    let nivel

    if (vitoria < 10){
        nivel = "Ferro"
    }else if (vitoria >= 11 && vitoria <= 20){
    nivel = "Bronze"
    }else if (vitoria >= 21 && vitoria <= 50){
        nivel = "Prata"
    }else if (vitoria >= 51 && vitoria <= 80){
        nivel = "Ouro"
    }else if (vitoria >= 81 && vitoria <= 90){
        nivel = "Diamante"
    }else if (vitoria >= 91 && vitoria <= 100){
        nivel = "Lendário"
    }else{
        nivel = "Imortal"
    }

    console.log(`O herói tem o saldo de ${saldo} e está no nível de ${nivel}`)
}

calculadora (92, 13)

//Olá prof, então, nesse exercício queria ter criado duas funções uma pra receber os valores de derrotas e vitórias. E uma outra como "calculadora" para receber as variáveis da outra function. No entanto acabei não conseguindo passar os valores de uma função para outra ou até mesmo trabalhar com os valores separados em uma variável de fora. Pois bem, acabei realizando dessa maneira. 