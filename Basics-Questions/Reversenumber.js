
function DigitNum(n){
      var rev=0;
    while(n!=0){
        var digit = n%10;
        rev =rev*10+digit;
        n=Math.floor(n/10);
    }
    console.log(rev)
}
DigitNum(1234)