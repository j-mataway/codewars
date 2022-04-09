function magNumber(info){
    const ammoPerMag = {
      PT92 : 17,
      M4A1 : 30,
      M16A2 : 30,
      PSG1 : 5    
  }
    const arr = Object.keys(ammoPerMag)
    let result = 0
    for(let i = 0; i < arr.length; i++){
      if(arr[i] == info[0]){ result = Math.ceil((info[1] * 3)/ammoPerMag[arr[i]])}
    }
  return result
  }