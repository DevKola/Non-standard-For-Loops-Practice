function oddIndices(arr) {
  // Return an array containing all the odd indices in the array
  // Your code here
  let newArr = [];
  for (let i = 1; i < arr.length; i += 2) {
    newArr.push(arr[i]);
  }
  return newArr;
}

function oddReverse(arr) {
  // Return an array containing all the odd indices starting from the end
  // Your code here
  let newArr = [];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    if (i % 2 !== 0) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}
// console.log(oddReverse([1, 2, 3]));
// console.log(oddReverse([1, 2, 3, 4]));

function secondPower(arr) {
  // Return an array containing all indices that are powers of 2
  // Your code here
  let newArr = [];
  for (let i = 1; i < arr.length; i *= 2) {
    newArr.push(arr[i]);
  }
  return newArr;
}

// console.log(oddReverse([1, 2, 3, 4, 5, 6, 7, 8]));

function nthPower(arr, n) {
  // Return an array containing all indices that are powers of n
  // Your code here
  let newArr = [];
  for (let i = 1; i < arr.length; i *= n) {
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(oddReverse([1, 2, 3, 4, 5, 6, 7, 8]));

function firstHalf(arr) {
  // Return an array containing the first half of an array
  // Include middle index on odd length arr
  // Your code here
  const half = Math.ceil(arr.length / 2);
  const firstHalf = arr.slice(0, half);
  return firstHalf;
}

function secondHalf(arr) {
  // Return an array containing the second half of an array
  // Exclude middle index on odd length arr
  // Your code here
  const half = Math.ceil(arr.length / 2);
  const secondHalf = arr.slice(half);
  return secondHalf;
}

module.exports = {
  oddIndices,
  oddReverse,
  secondPower,
  nthPower,
  firstHalf,
  secondHalf,
};
