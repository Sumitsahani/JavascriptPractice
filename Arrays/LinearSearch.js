function LinearSearch(Arr, num){
 for(let i=0; i<Arr.length; i++){
    if(Arr[i]==num){
        console.log(i)
    }
 }
}

var Arr=[1,3,2,4];
var num =4; 
LinearSearch(Arr,num)