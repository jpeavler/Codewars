function getMiddle(s)
{
  let middle = "";
  if(s.length % 2 == 0) {
    middle = s[s.length/2 -1] + s[s.length/2];
  } else {
    middle = s[Math.floor(s.length/2)];
  }
  return middle;
}