const binaryArrayToNumber = arr => {
    const revArr = arr.slice().reverse()
    let total = 0 
    for (i = 0; i < revArr.length; i++){
      if(revArr[i] == 1){ 
       total += 2**i
        }
     }
     return total
   }