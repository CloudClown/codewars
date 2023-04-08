function largest(n, array) {
    return  array.sort((a,b)=>a-b).slice(array.length-n);
  }

largest(2, [7,6,5,4,3,2,1])

// If start is not provided, it is assumed to be 0
// If end is not provided, it is assumed to be the length of the array.
// in sort a-b will return small to large numbers
// a+b will return large numbers to small numbers
