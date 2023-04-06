function betweenExtremes(numbers) {
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  return max - min;
}

console.log(betweenExtremes([-1, -41, -77, -100]))