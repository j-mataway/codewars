function squareDigits(num){
    const arr = num.toString().split('')
    for(let i = 0; i < arr.length; i++){
      arr[i] = (+arr[i])**2
    }
    return +arr.join('')
  }