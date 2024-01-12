function diamondPattern(n){
    let Pattern="";
    for(let i=0; i<n; i++ ){
        for(let s=n; s>i; s--){
            Pattern+=" ";
        }
        for(let j=0; j<2*i-1; j++){
            Pattern+="*";
        }
        Pattern+="\n"
    }
    for(let i=1; i<=n; i++){
        for(let s=0; s<=i; s++){
            Pattern+=" ";
        }
        for(let j=n; j>=2*i-1; j--){
            Pattern+="*"
        }
        Pattern+="\n";
      }
      console.log(Pattern)
}

diamondPattern(5)