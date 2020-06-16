var vampire_test = function(a, b){
    let product = (a * b).toString();
    let mult = a.toString() + b.toString();
    let productArr = product.split("");
    let multArr = mult.split("");
    productArr.sort((a,b) => {
      if(a == "-") {return -1}
      else if (b == "-") {return 1}
      else {return a - b}
    });
    multArr.sort((a,b) => {
      if(a == "-") {return -1}
      else if (b == "-") {return 1}
      else {return a - b}
    });
    if(JSON.stringify(productArr) == JSON.stringify(multArr)) {return true;}
    else {return false;}
  }