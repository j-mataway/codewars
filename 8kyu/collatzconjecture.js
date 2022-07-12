var hotpo = function(n){
    let result = 0
    for(let i = 1; n != 1; i++){
      if (n%2===0){
          n=n/2
      }else{n = (3*n)+1}
        result = i
    }
    return result
  }