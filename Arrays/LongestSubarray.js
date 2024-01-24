 function LongSub(Arr,num){
    
    let len =0;
   for(let i=0; i<Arr.length; i++){
      let sum=0; 
      for(let j=i; j<Arr.length; j++){
         sum=sum+Arr[j]

         if(sum==num){
            len =Math.max(len, j-i+1);
         }
      }
      
   }
   return len
 }

 let Arr =[2, 3, 5, 1, 9]
 let num=10

 let result=LongSub(Arr,num);
 console.log(result)