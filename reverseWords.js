function reverseWords(str) {
    let flipper = [];
    let result = "";
    for(let i = 0; i < str.length; i++) {
      if(str[i] != " ") {
        flipper.push(str[i]);
      } else {
        while(flipper.length != 0) {
          result = result + flipper.pop();
        }
        result = result + " ";
      }
    }
    while(flipper.length != 0) {
      result = result + flipper.pop();
    }
    return result;
  }