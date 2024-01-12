function isPrime(num) {
    if (num <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function printPrimes(end) {
    for (let i = 2; i <= end; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
  }
  printPrimes(100);
  