let arr = [3, 5, 6, 8, 11];
function loopingStructures() {
  biggest = -Infinity;
  smalest = Infinity;
  sum = 0;
  average = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > biggest) {
      biggest = arr[i];
    }
    if (arr[i] < smalest) {
      smalest = arr[i];
    }
    sum += arr[i];
    average = sum / arr.length;
  }
  return [biggest, smalest, sum, average, arr.length];
}
console.log(loopingStructures(arr));