function invertedStarPyramid(n){
    let pattern="";
    for(let i=1; i<=n; i++){
      for(let s=1; s<i; s++){
          pattern+="*";
      }
      for(let j=n; j<=2*i-1; j++){
        pattern+="#"
      }
      
      pattern+="\n";
    }
    console.log(pattern);
  }
  
  invertedStarPyramid(5);