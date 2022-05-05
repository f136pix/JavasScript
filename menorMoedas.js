//A função irá receber uma array de numeros em ordem e a partir deles irá descobrir qual a menor quantidade de numeros que pode ser usado
//para chegar ao "amount" recebido.Caso isso não seja possivel,será retornado o valor -1


var coinChange = function(coins, amount) {
    let total=0
    let qntMoedas=0
    for(atual=coins.length-1; atual>-1; atual--){
        console.log(atual)
        while(coins[atual] + total < amount){
            total = total+coins[atual]
            qntMoedas++
       }
        if(total + coins[atual] == amount){
            total = total+coins[atual]
            qntMoedas++
            return qntMoedas
        }
    }    
    return -1
};

coinChange([1,2,5],11)
