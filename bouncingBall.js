//Given the height 'h', bounce back 'bounce', and window height 'window'
//of a bouncing ball, this function returns the amount of times the ball
//will pass the window.
function bouncingBall(h,  bounce,  window) {
    //Check for invalid inputs: A height of 0 or less, a bounce not between 0 and 1,
    //and a window that is taller than the initial height
    if(h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
      return -1;  //return bad input value
    } else {
      let count = 0;  //keep track
      while(h > window) {  //while the ball is higher than the window at the peak of its bounce
        count++;  //Increment count
        h = h * bounce;  //ball bounces back upwards
        if(h > window) {  //if new height is higher than window, then the ball passed window upwards
          count++;  //increment count
        }
      }
      return count;  //return the number of times the ball passed the window
    }
  }