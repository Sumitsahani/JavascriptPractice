
function maxElement(Array){
    for(let i=0; i<Array.length-1; i++){
        for(let j=0; j<(Array.length-i-1); j++){
            if(Array[j]>Array[j+1]){
                var temp =Array[j]
                Array[j]=Array[j+1];
                Array[j+1]=temp
            }
        }
    }
    console.log(Array);
}

var Array=[2,1,4,5]
maxElement(Array[Array.length-1]);