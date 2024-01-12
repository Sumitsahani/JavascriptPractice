//Find a peak element which is not smaller than its neighbours
function getMin(arr,n){
    let res=arr[0];
  for(let i=1; i<n; i++ )
    res=Math.min(res, arr[i]);
    return res;
}

function getMax(arr, n){
    let res =arr[0];
    for(let j=1; j<n; j++)
        res=Math.max(res, arr[j]);
        return res;
    
}


    let arr =[1,30,20,3];
    let n= arr.length;
    
    console.log(getMin(arr,n));
    console.log(getMax(arr,n))

