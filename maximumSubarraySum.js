//function maxSequence takes in an array and returns 
//the maximum sum from any sub array
const maxSequence = function(arr){
    let best = 0;  //keeps track of absolute best. Zero is a starting point because a sub array of zero numbers count
    let currentScore = 0;  //keeps track of addition that happens along the way
    for(let i = 0; i < arr.length; i++) {  //look at each number in the array
      currentScore += arr[i];  //attept to add that number to the currentScore
      if(best < currentScore) {  //if the current score beats the best score
        best = currentScore;  //make it the best score
      }
      if(currentScore < 0) {  //if adding that number causes the currentScore to dip below zero
        currentScore = 0;  //end the streak of that currentScore and reset to zero
      }
    }
    return best; //Once the best score is determined, return it
  }