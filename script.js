function smallestCommons(array) {
  let newArray = [];
  let min = Math.min(array[0], array[1]);
  let max = Math.max(array[0], array[1]);

  for (let i = min; i <= max; i++) {
    newArray.push(i);
  }

  let smallest = newArray[0];
  for (let j = 1; j < newArray.length; j++) {
    smallest = lmc(smallest, newArray[j]);
  }
  return smallest;
}

function lmc(a, b) {
  return (a * b) / GreatestCommonDivisor(a, b);
}
function GreatestCommonDivisor(a, b) {
  while (b !== 0) {
    let rest = a % b;
    a = b;
    b = rest;
  }
  return a;
}

console.log(smallestCommons([1, 5])); //60
console.log(smallestCommons([5, 1])); //60
console.log(smallestCommons([2, 10])); // 2520;
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([23, 18]));
