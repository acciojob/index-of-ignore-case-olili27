function indexOfIgnoreCase(s1, s2) {
  // write your code here
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  let count = 0;
  let index = 0;
  let len = s2.length

  while((index + len) <= s1.length) {
   let newSubstring = s1.substring(index, index + len);

   console.log("sub", newSubstring);

   if(newSubstring == s2) {
    return index
   }
   index++;

  }
  console.log("i am out");
  return -1
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
