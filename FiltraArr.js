//A função receberá a arr A e o arr B,e irá remover do A tudo o que contém no arr B

function FiltraArr(arrA, arrB) {
    let arr = []
    arrA.forEach(atual => {
        if(!arrB.includes(atual)){
            
        }
        else{
            arr.push(atual)
        }    
    });
    return arr
}

a = [4, 3, 2, 1]
b = [2, 3, ]

let arr = FiltraArr(b, a)
console.log(arr)