 
 function SumProblem(Arr,target){
   for(let i=0; i<Arr.length; i++){
     for(let j=i+1; j<Arr.length; j++){
         if(Arr[i]+Arr[j]==target){
            console.log(i,j);
         }
     }
   }
 }

 let Arr=[1,3,2,4];
 let target =6;

 SumProblem(Arr,target)