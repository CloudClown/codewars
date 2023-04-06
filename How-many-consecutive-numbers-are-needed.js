function consecutive(arr) {
    arr.sort(function(a, b) { return a - b; }); // Sort the array in ascending order
    console.log(arr)
    var count = 0;
    for (var i = 1; i < arr.length; i++) {
      count = count + arr[i] - arr[i-1] - 1; // Count the number of missing consecutive numbers between adjacent elements
      console.log(count);
    }
    return count;
  }
  
  // Example usage
  console.log(consecutive([4, 8, 6])); // Output: 2
  