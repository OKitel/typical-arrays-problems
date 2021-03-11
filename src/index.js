
exports.min = function min (array = []) {
  let min = array[0] || 0;
  for (i=1; i <= array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
  }
  return min;
}


exports.max = function max (array = []) {
  let max = array[0] || 0;
  for (i=1; i <= array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
  
}

exports.avg = function avg (array = [0]) {
  let result = 0;
  for (i = 0; i <= array.length-1; i++) {
    result += array[i];
  }
  if (array.length == 0) {
    return result;
  } else {
    result = result/array.length;
  }
  return result;
}
