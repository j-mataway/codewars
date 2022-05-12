function animals(heads, legs){

    let arr = []
     const cows = (legs/2)-heads
     const chickens =  heads - cows
    
    
    if(legs/heads > 4|| legs % 2 !== 0 || cows < 0 || chickens < 0)
      {return 'No solutions'}
    else{
    return [chickens, cows]}
  }
  
  