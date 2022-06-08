//A função ira retornar de forma legivel em b,kb,mg,g etc... o peso do arquivo imputado em bytes

const Medidas = ['B','KB','MG','GB','TB']

function legivel(b){

    let pesoAtual = 0
    
    while(b >= 1024){
        b = b / 1024
        pesoAtual++
    }

    const pesoFinal = b.toFixed(2)
    return pesoFinal + Medidas[pesoAtual]
    
}

