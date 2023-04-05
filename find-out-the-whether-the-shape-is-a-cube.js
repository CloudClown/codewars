var cubeChecker = function(volume, side){

    if(Number.isInteger(volume) && Number.isInteger(side)){
      if(volume <= 0 && side <= 0){
        return false
      } else {
        let checkVol = side**3
      if(volume === checkVol){
        return true
      } else {
        return false
      }
      }
    } else {
      return false 
    }
    // return false;
  };
  
  
  console.warn(cubeChecker(0, 0))
  
  