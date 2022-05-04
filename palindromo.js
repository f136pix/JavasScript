//O codigo irá descobrir se a string imputada é ou não um palindromo



var descobrePalindromo = function(head) {
    let esquerda = [head[0],head.length/2]
    let direita = [(head.length / 2) +1,head.length]
    let cont =0
    let resEsquerda =[]
    let resDireita =[]

    if (esquerda.length == direita.length){
        for(cont=0;cont<esquerda.length;cont++){
            resEsquerda.push(esquerda[cont])
            resDireita.push(direita[cont])
            cont++
        }
    }
    for(atual=0;atual<resEsquerda;atual++){
        if (resEsquerda[atual] != resDireita[atual]){
            return false
        }
    }
    return true
};


