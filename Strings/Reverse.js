function reversed(){
    let reverse=" "
    for(let i=str.length-1; i>=0; i--){
        reverse+=str[i];
    }
    return reverse;
}

let str="hello world"

let reverseStr= reversed(str);
console.log(reverseStr)