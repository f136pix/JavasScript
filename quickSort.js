//Quick Sort

function quickSort(array,ArrEsquerda,ArrDireita){
    if (array.lenght > 1){
        let atual = divide(array,ArrEsquerda,ArrDireita)
    if (ArrEsquerda < atual -1){
        quickSort(array,ArrEsquerda,atual-1)
        }
    if  (atual < ArrDireita){
        quickSort(array,atual,ArrDireita)
    }
    }


    return sorted
}

function divide(array,ArrEsquerda,ArrDireita){
    let pivo = array[Math.floor((ArrEsquerda+ArrDireita)/2)]
    let esquerda = ArrEsquerda
    let direita = ArrDireita

    while (esquerda <= direita){
    
        while (arr[esquerda].preco < pivo.preco){
            esquerda++
        }
        while(array[direita].preco > pivo.preco){
            direita--
        }

    if(esquerda <= direita){
        trocaElementos(array,esquerda,direita)
    esquerda++

    direita--
        }
    }
    return esquerda
}

function trocaElementos(array, de, para) {
    const e1 = array[de]
    const e2 = array[para]
  
    array[para] = e1
    array[de] = e2
  }



  
