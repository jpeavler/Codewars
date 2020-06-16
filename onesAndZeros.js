const binaryArrayToNumber = arr => {
    let str = arr.toString();
    str = str.replace(/,/gi,"");
    console.log(str)
    return parseInt(str, 2);
  };