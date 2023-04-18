function filterRange(arr, a, b) {
  // ваш код...
  return arr.filter(function (num) {
    return num >= a && num <= b;
  });
}
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

console.log( filtered );
console.log( arr );