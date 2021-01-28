//takes in a string and returns an array containing the string repeated
//with a capital letter 'waving' through the string.
function wave(str){
    let result = [];  //initialize array to return
    for(let i = 0; i <= str.length - 1; i++) {  //for each character in the string
      if(str[i] !== " ") {  //excludes spaces from being capitalized
      result.push(str.slice(0, i) + str.charAt(i).toUpperCase() + str.slice(i + 1));  //uppercase the string at the right index
      }
    }
    return result;  //return the array of waving strings.
  }