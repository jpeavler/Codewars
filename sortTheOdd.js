//This sortArray function will sort all odd numbers
//without moving the position of the even numbers.
function sortArray(array) {
    let oddArray = [];  //temp array to store all odd numbers and sort
    for(num of array) {  //look through original array
      if(num % 2 !== 0) {  //If the number is not even (and therefore odd)
        oddArray.push(num);  //add the odd number to the odd array
      }
    }
    oddArray.sort((a, b) => a - b);  //sort the odd array
    let oddIndex = 0;  //to increment through the odd array
    for(index in array) {  //rearrange original array's odd numbers using odd array
      if(array[index] % 2 !== 0) {  //If the number in the original array is odd
        array[index] = oddArray[oddIndex];  //Reassign the odd number with a sorted odd number
        oddIndex++;  //move to the next odd number
      }
    }
    return array;  //return the array with sorted odd numbers with even numbers in the same order
  }