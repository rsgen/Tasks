let list = [2, 54, 2, 54, false, 2];
let sum = 0;
for (let value of list) {
  if (value == true || value == false) {
    return sum;}
    
  sum += value;
}
console.log(sum);