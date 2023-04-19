function fixTheMeerkat(arr) {
  [arr[0], arr[2]] = [arr[2], arr[0]];
  return arr;
//   return arr.reverse();

}

const result = fixTheMeerkat(["lower legs", "torso", "upper legs"]);
console.log(result);

// checking whether the github is high or me 