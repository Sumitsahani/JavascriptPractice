function Palindrome(str){
   var revStr= str.split('').reverse().join('');
   return str==revStr;
}

var str= "sumittimus";
console.log(Palindrome(str))