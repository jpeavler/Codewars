function reverseLetter(str) {
    let forward = str.replace(/[^A-Za-z]/gi, "").split('');
    let backward = [];
    while(forward.length > 0){
      backward.push(forward.pop());
    }
    let output = backward.join("");
    return output;
  }