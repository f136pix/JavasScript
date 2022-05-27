//A partir de uma frase recebida em forma de string,a função ira formatar o texto retirando
//os espaços, colocando e letras maiusculas após os espaços e adicionando uma hashtag no começo.

function hashtag(frase) {
    let fraseSemEspaco = frase.trim().split(" ")
    let fraseFormatada = []
    for (i = 0; i < fraseSemEspaco.length; i++) {
        fraseFormatada[i] = fraseSemEspaco[i][0].toUpperCase() + fraseSemEspaco[i].toLowerCase().slice(1)
    }
    fraseFormatada.unshift('#')
    fraseFormatada = fraseFormatada.join('')
    console.log(fraseFormatada)
    return fraseFormatada
}
