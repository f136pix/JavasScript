//Merge Sort

function mergeSort(array) {

    
    
  
    if(array.length > 1) {

      const meio = Math.floor(array.length / 2);
      const parte1 = mergeSort(array.slice(0, meio));
      const parte2 = mergeSort(array.slice(meio, array.length));
      array = sort(parte1, parte2);
    
    }
  
    return array;
  }
  
  function sort(parte1, parte2) {
    let posicaoAtualParte1 = 0 
    let posicaoAtualParte2 = 0
    const sorted = []
  
    while (posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length) {
     parte1[posicaoAtualParte1]
     parte2[posicaoAtualParte2]
  
      if (parte1[posicaoAtualParte1].proriedade < parte2[posicaoAtualParte2].propriedade) {
        sorted.push(parte1[posicaoAtualParte1])
        
        posicaoAtualParte1++
      } else {
        sorted.push(parte2[posicaoAtualParte2])
        
        posicaoAtualParte2++
      }
    }
  
    return sorted.concat(posicaoAtualParte1 < parte1.length
      ? parte1.slice(posicaoAtualParte1)
      : parte2.slice(posicaoAtualParte2))
  }
  
