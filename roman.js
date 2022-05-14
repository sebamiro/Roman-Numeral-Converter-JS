function convertUnit (num) {
  let str = "";
  for (let i = 1; i <= num; i++){
    if (i <= 3){
      str += 'I'
    }
    else if (i === 4){
      str = 'IV'
    }
    else if (i === 5){
      str = 'V'
    }
    else if (i < 9) {
      str += 'I'
    }
    else {
      str = 'IX'
    }
  }
  return str;
}

function convertTen (num) {
  let str = "";
  for (let i = 1; i <= num; i++){
    if (i <= 3){
      str += 'X'
    }
    else if (i === 4){
      str = 'XL'
    }
    else if (i === 5){
      str = 'L'
    }
    else if (i < 9) {
      str += 'X'
    }
    else {
      str = 'XC'
    }
  }
  return str;
}

function convertHundred (num) {
  let str = "";
  for (let i = 1; i <= num; i++){
    if (i <= 3){
      str += 'C'
    }
    else if (i === 4){
      str = 'CD'
    }
    else if (i === 5){
      str = 'D'
    }
    else if (i < 9) {
      str += 'C'
    }
    else {
      str = 'CM'
    }
  }
  return str;
}

function convertThousand (num) {
  let str = "";
  for (let i = 1; i <= num; i++){
    if (i <= 3){
      str += 'M'
    }
  }
  return str;
}

function convertToRoman(num) {
  let n = 1;
  let str = [];
  let arr = String(num).split('').reverse().map(a => parseInt(a));
  for (let i in arr){
    if (n < 10){
      str.push(convertUnit(arr[i]))
    }
    else if (n === 10){
      str.unshift(convertTen(arr[i]))
    }
    else if (n === 100){
      str.unshift(convertHundred(arr[i]))
    }
    else {
      str.unshift(convertThousand(arr[i]))
    }
    n *= 10;
  }
 return str.join('');
}
