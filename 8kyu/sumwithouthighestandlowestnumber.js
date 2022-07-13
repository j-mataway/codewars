function sumArray(array) {
    let sumOfArray = 0 
      if(array == null || array.length <= 1 || array.isNaN) {
          return 0
      }else{
        sumOfArray = array.reduce((x,y) => x+y, 0)
        }
    
    const numToSubtract = (Math.min(...array) + Math.max(...array))
    return (sumOfArray - numToSubtract)
    }