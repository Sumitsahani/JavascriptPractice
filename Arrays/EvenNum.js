function getEvenNumbers(arr) {
    const evenNumbers = arr.filter(num=> num % 2 === 0);
    return evenNumbers;
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenArray = getEvenNumbers(numbers);
  console.log(evenArray);