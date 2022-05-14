//O código irá receber dois numeros de um a nove e irá dizer todas as possibilidades de string de um teclado numérico como o de um telefone.


function letterCombinations(digits) {
    let possibleCombinations = []
    const letters = ["abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"]
    let digit1 = letters[digits[0] -2]
    let digit2 = letters[digits[1] -2]
    
    for(i=0; i<digit1.length; i++){
        for(o=0; o<digit2.length; o++){
    
        possibleCombinations.push(digit1[i].concat(digit2[o]))         
        
        }
    }
return possibleCombinations
    
}



