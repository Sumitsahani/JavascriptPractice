 function numCrownPattern(n){
    let Pattern="";
    for(let i=0; i<n; i++ ){
         for(let j=1; j<=i; j++){
            Pattern+=j;
         }
         for(let s=1;  s<2*n-1; s++ ){
            Pattern+="*"
         }
         for(let r=i;r>=1;r--){
            Pattern+=r;
           }
         Pattern+="\n"
         
    }
    console.log(Pattern);
 }

 numCrownPattern(5);