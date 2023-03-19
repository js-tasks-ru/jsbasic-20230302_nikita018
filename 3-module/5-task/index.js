function getMinMax(str) {
  // ваш код...
  let arr = str.split(' ').filter(elm => !isNaN(parseFloat(elm)));
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return {min, max};
}

const inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';

console.log(getMinMax(inputData));