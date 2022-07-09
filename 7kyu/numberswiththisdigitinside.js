function numbersWithDigitInside(x, d) {
    let numArr = []
    
    for(let i = 1; i <= x; i++){
      if(((i+'').indexOf(d+'')) > -1){
        numArr.push(i)
      }
    }
    
    let product = 0
    
    if (numArr.length>0){
      product = numArr.reduce((x,y)=>x*y, 1)
    }
    
    return [numArr.length, numArr.reduce((x,y)=>x+y, 0), product]
  }