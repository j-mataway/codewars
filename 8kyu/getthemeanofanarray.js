function getAverage(marks){
    return Math.floor(marks.reduce((a,x)=> a+x, 0)/marks.length)
  }