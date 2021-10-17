function camelize(str) {
  let someArr = str.toLowerCase().split('-');
  let ccString = someArr[0];
  for (let i = 1; i < someArr.length; i++) {
    ccString += capitalize(someArr[i]);
  }
  return ccString;
}

let capitalize = (str) => str[0].toUpperCase() + str.slice(1);
