//A função modifica um Array para que todos os elemmentos com o valor de zero sejam jogados para o final do mesmo

function modificaArray(arr){
    for(i=0; i<arr.length; i++){
        if(arr[i] == 0){
            arr.push(arr[i])
            arr.splice(i,1)    
        }
    } 
    return arr    
}



