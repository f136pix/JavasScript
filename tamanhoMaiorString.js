
//A função ira encontrar a tamanho da maior substring passada ao parametro sem que se repita uma letra

var lengthOfLongestSubstring = function(s) {
    arrUsados=[]
    for(atual=0; atual<s.length; atual++){
    if(arrUsados.includes(s[atual])){
        return arrUsados.length
        }    
    else{
        arrUsados.push(s[atual])
        }
    }
    
};