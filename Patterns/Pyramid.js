function pyramid(n){
    let Pattern="";
    for(let i=0; i<n; i++){
       for(let k=n; k>i; k--){
           Pattern+=" ";
       }
       for(let j=0; j<=i; j++ ){
           Pattern+="* ";
       }
       Pattern+="\n";
    }
    console.log(Pattern);
   }
   
   pyramid(40);
       