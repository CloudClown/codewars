function findMultiples(integer, limit) {
    var newArr = []
   
      if(integer !== 0){
          for (let i = 1; i <= limit; i++) {
       let newItem = integer * i;
  
       if (newItem <= limit) {
        newArr.push(newItem)
      } else {
        break;
      }
  }
      }
  return newArr
  }
  const result = findMultiples(5,25) 
  console.log(result)