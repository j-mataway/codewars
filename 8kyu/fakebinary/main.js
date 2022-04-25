function fakeBin(x){
    let bin = ''
  for(let i = 0; i < x.length; i++){
     x.charAt(i) >= 5 ? bin += '1' : bin += '0'
  }
    return bin
    
  }