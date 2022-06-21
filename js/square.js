const num = [1, 2, 2];

function tambah(n) {
  let s = 0;
  for(const i of n) {
    s+=i**2;
  }
  return(s);
}

console.log(tambah(num));

// const sum = (num) => {
//   let s = 0;
//   for (const key in num) {
//       s+=key**2;
//   }
//   return(s);
// }

// console.log(sum);