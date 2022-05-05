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