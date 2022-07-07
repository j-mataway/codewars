function calculator(a,b,sign){
    if(typeof a && typeof b !== 'number'){
      return 'unknown value'
      }
      else{return sign==="+" ? a+b : sign==="-"? a-b : sign === '*'? a*b : sign==="/"? a/b: 'unknown value'}
    
    }