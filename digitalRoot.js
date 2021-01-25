//finds the digital_root of a number n using recursion
function digital_root(n) {
    let arr = [];  //place to store individual digits of number n
    let mod = n;  //number to modulate
    while(mod !== 0) {  //while there are still digits to pull out
      arr.push(mod % 10);  //pull out the smallest number and put it into the array
      mod = Math.floor(mod / 10);  //divide by ten and round down
    }
    result = arr.reduce((a, b) => a + b, 0);  //Add up all numbers in the array
    if(result >= 10) {  //If that sum is still greater than ten
      return digital_root(result);  //repeat the process using recursion
    } else {  //If we are done
      return result;  //return the digital root of number n
    }
  }