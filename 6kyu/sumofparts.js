function partsSums(ls) {
    let sumArr = [ls.reduce((x,y)=> x+y, 0)]
    for(let i = 0; i < ls.length; i++){
      sumArr.push(sumArr[i] - ls[i]) 
    }
    return sumArr
  }