const listOfNumbers = [1, 2, 3, 4, 5];

const addIndexToNumber = listOfNumbers.map(function(num, index){
  return num + index; // this 'evaluates' to a new number, the first time 1 + 0, second time, 2 + 1, etc
});
