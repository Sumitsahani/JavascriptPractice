
function ContainsDuplicate(Arr){
    Arr.sort((a,b)=>a-b)
 for(let i=0; i<Arr.length; i++){
       if(Arr[i]==Arr[i+1]){
           return true
       }
    }
    return false
}

let Arr =[1,3,4,5]
var res =ContainsDuplicate(Arr);
 console.log(res)