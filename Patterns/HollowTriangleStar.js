function hollowTriangle(n){
    let pattern="";

    for(let i=0; i<= n; i++){
      for(let j =0; j<i; j++){
        if(i===n){
            pattern+="*";
        }else{

        if(j==0 || j==i-1){
           pattern+="*";
        }else{
            pattern+=" ";
        }
      }
    }
      pattern+="\n";
     }
     console.log(pattern);
}

hollowTriangle(6);