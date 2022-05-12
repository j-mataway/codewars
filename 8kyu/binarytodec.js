function binToDec(bin){
    const arr = bin.split('').reverse()
    let dec = 0
  
    arr.forEach((x , i) =>{
      if (x == 1){
        dec += 2**i
      }    
    })
    
    return dec
  }