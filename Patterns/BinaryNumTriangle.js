function binaryNumTriangle(n){
    let Pattern=" ";
    for(let i=0; i<n; i++ ){
         for(let j=0; j<i; j++){
            if(j%2==1){
                Pattern+="1"
            }else{
                Pattern+="0"
            }
         }
         Pattern+="\n"
    }
    console.log(Pattern);
}

binaryNumTriangle(5);