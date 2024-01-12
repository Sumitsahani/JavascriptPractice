function christmas(n){
    let Pattern="";
    for(let i=0; i<n; i++){
        for(let s=n; s>i; s--){
            Pattern+=" ";
        }
        for(let j=0; j<i; j++){
            Pattern+="* "
        }
        Pattern+="\n"
    }
    for(let i=2; i<n; i++){
        for(let s=n-1; s>i; s--){
            Pattern+=" "
        }
        for(let j=2; j<i; j++){
            Pattern+="* "
        }
        Pattern+="\n"
    }
    console.log(Pattern)
}
christmas(5)
