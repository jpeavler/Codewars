function ìsZeroBalanced(n){
    if(n.length == 0) {return false}
    let zeroBalanced = true;
    let balancedArr = [...n];
    balancedArr = balancedArr.filter(num => num != 0);
    let sumOfArr = n.reduce((num,sum) => {return num + sum}, 0);
    if(sumOfArr != 0) {return false}
    n.forEach((number) => {
      if(number != 0) {
        let opposite = number * -1;
        if(!balancedArr.includes(opposite)) {return false}
        else {
          let numIndex = balancedArr.indexOf(number);
          balancedArr.splice(numIndex, 1);
          let oppNumIndex = balancedArr.indexOf(opposite);
          balancedArr.splice(oppNumIndex, 1);
        }
      }
    });
    if(balancedArr.length != 0) {return false}
    return zeroBalanced;
  }