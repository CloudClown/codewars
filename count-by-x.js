function countBy(x, n) {
  let z = [];

  // iterated through 1 to n and push to array of i * z
  for (let i = 1; i <= n; i++) {
    z.push(i * x);
  }
  return z;
}

const res =  countBy(2, 5);

console.log(res)