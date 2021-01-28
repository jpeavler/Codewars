//The solution function finds the sum of all natural numbers below 
//the given number that are multiples of 3 or 5
function solution(number){
    let result = 0;  //start counter
    for(let i = 0; i < number; i++) {  //check positive numbers below given number
      if(i % 3 === 0 || i % 5 === 0) {  //if divisible by 3 or 5
        result += i;  //add that number to running total
      }
    }
    return result;  //return the sum
  }