function leastLarger(a,i) {
    const number = a[i]
    const sortedArr = a.slice().sort((x,y)=> y-x)
    return a.indexOf(sortedArr[sortedArr.indexOf(number) - 1])
  }