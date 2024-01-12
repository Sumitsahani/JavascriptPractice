function prime(n){
    if(n<=1){
        return false
    }else{
        for(let i=2; i<=Math.sqrt(n); i++){
            if(n%i===0){
                return false
            }
        }
        return true
    }
 
}

 function checkPrime(end){
    for(let i= 2; i<=end; i++){
        if(prime(i)){
            console.log(i);
        }
    }
 }

 

