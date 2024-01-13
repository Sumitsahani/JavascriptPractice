function pushNonZero(Array) {
    let temp = [];

    for (let i = 0; i < Array.length; i++) {
        if (Array[i] !== 0) {
            temp.push(Array[i]);
        }
    }

    for (let i = temp.length; i < Array.length; i++) {
        temp.push(0);
    }

    return temp;
}

var Array = [0, 2, 1, 44, 0, 3, 0, 3, 0];
var zero = pushNonZero(Array);
console.log(zero);
