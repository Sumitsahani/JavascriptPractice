function AppearsOnce(Arr) {
  for (let i = 0; i < Arr.length; i++) {
    let newArr = Arr[i];
    count = 0;
    for (let j = 0; j < Arr.length; j++) {
      if (Arr[j] === newArr) {
        count++;
      }
    }
    if (count === 1) {
      return newArr;
    }
  }
  return -1;
}

let Arr = [1, 3, 2, 2, 3];
let ans = AppearsOnce(Arr);
console.log(ans);
