function binarySearch(keyValue, sortedArray) {
  var lowIndex = 0;
  var highIndex = sortedArray.length - 1;

  while (lowIndex <= highIndex) {
    var midIndex = Math.floor((lowIndex + highIndex) / 2);
    var midValue = sortedArray[midIndex];

    if (midValue === keyValue) {
      return midIndex;
    } else if (midValue > keyValue) {
      lowIndex = midIndex + 1;
    } else {
      highIndex = midIndex - 1;
    }
  }

  return null;
}

console.log(binarySearch(5, [1,3,5,7,9,10]) === 2);
console.log(binarySearch(8, [1,3,5,7,9,10]) === null);