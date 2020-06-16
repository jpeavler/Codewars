function find_average(array) {
    let sum = 0;
    array.forEach((number) => {
      sum = sum + number;
    });
    let average;
    if(array.length != 0) {
      average = sum / array.length;
    } else {
      average = 0
    }
    return average;
  }