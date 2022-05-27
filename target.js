//A função irá descobrir quais elementos da array imputada somados irão resultar no target

var descobreNumeros= function(nums, target) {
    for(n1=0; n1 < nums.length; n1++ ){
        
        for(n2=0; n2 < nums.length; n2++){
            
        if(n1 == n2){
        continue
         }
        else if(nums[n1] + nums[n2] == target)
            return([n1,n2])
         }
            
    }
             
};
    
