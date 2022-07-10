const divisions = (n, divisor) => {
    let i = 0
    
    while(n >= divisor){
      let remainder = n%divisor  
      n = (n-remainder)/divisor
      i++
    }
      
    return i
    };