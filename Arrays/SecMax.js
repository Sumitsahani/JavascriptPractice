function bubbleSort(arr) {
    const length = arr.length;
  
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (arr[j] >arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  
    return arr;
  }
  
 
  const arrayToSort = [64, 34, 25, 12, 22, 11, 90];
  const sortedArray = bubbleSort(arrayToSort);
  console.log("Sec Largest Num :" +sortedArray[sortedArray.length-2])
   