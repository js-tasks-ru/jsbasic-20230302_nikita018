function getMinMax(str) {
  // ваш код...
  let arr = str.split(' ').filter(elm => !isNaN(parseFloat(elm)));
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return {min, max};
}
