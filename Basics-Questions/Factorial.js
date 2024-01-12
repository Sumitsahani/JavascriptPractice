function factorial(num) {
    let fact=1;
   if(num==1 || num==0){
      return fact;
   }else if(num>0){
      for(let i=num; i>0; i--){
        fact*=i;
      }
      return fact;
   }else{
     return "positive"
   }
}

let factorailNum= factorial(5);
console.log(factorailNum)
