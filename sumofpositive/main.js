function positiveSum(arr) {
    if (arr.filter(num => num > 0).length === 0) {return 0
    }  else {return arr.filter(num => num > 0).reduce((a,b) => a + b)}  
  }