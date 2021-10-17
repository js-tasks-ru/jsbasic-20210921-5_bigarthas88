function getMinMax(str) {
  let arr = str.split(' ').map(Number);
  let newArr = [];
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  let sortedArr = newArr.sort((a, b) => a - b);
  result.min = sortedArr[0];
  result.max = sortedArr[sortedArr.length - 1];
  return result;
}
