function downwardTringleStar (n){
    let pattern ="";
for(let i=0; i<=n; i++ ){
    for(let j=n; j>=i; j--){
       pattern +="* "
    }
    pattern+="\n"
}
console.log(pattern)
}

downwardTringleStar(5);